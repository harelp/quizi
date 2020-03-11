import React, { useContext, useEffect } from 'react';
import M from 'materialize-css';
import { UserContext } from './../Context/UserContext';
import AuthNav from './auth/AuthNav';
import AuthSideNav from './auth/AuthSideNav';
import UnAuthNav from './notAuth/UnAuthNav';
import UnAuthSideNav from './notAuth/UnAuthSideNav';
import './Nav.css';

export default function Nav(props) {
  const { isAuth, secureUser } = useContext(UserContext);
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, {});
    let elem = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elem, {});
  }, []);

  const handleLogOut = () => {
    secureUser(false);
  };
  return (
    <React.Fragment>
      <nav>
        <div className="nav-wrapper white black-text">
          {isAuth ? <AuthNav onLogOut={handleLogOut} /> : <UnAuthNav />}
        </div>
        <ul className="sidenav" id="mobile-demo">
          {isAuth ? <AuthSideNav onLogOut={handleLogOut} /> : <UnAuthSideNav />}
        </ul>
      </nav>
    </React.Fragment>
  );
}
