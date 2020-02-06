import React, { useContext } from 'react';
import { UserContext } from './../Context/UserContext';
import AuthNav from './auth/AuthNav';
import AuthSideNav from './auth/AuthSideNav';
import UnAuthNav from './notAuth/UnAuthNav';
import UnAuthSideNav from './notAuth/UnAuthSideNav';
import './Nav.css';

export default function Nav(props) {
  const { isAuth, secureUser } = useContext(UserContext);

  const handleLogOut = () => {
    secureUser(false);
  };
  return (
    <nav>
      <div className="nav-wrapper white black-text">
        {isAuth ? <AuthNav onLogOut={handleLogOut} /> : <UnAuthNav />}
      </div>
      <ul className="sidenav" id="mobile-demo">
        {isAuth ? <AuthSideNav onLogOut={handleLogOut} /> : <UnAuthSideNav />}
      </ul>
    </nav>
  );
}
