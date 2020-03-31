import React, { useEffect } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

const AuthNav = ({ children, onLogOut }) => {
  useEffect(() => {
    let elem = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elem, { coverTrigger: false });
  }, []);

  return (
    <div>
      <ul
        id="dropdown1"
        className="dropdown-content"
        style={{ top: '0 !important', marginTop: '64px !important' }}
      >
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li className="divider"></li>
        <li>
          <Link to="#" onClick={onLogOut}>
            Logout
          </Link>
        </li>
      </ul>

      <div className="container">
        <Link to="/" className="brand-logo">
          Quizi
        </Link>
        <Link to="#!" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/invite">
              <strong>Join a Quizi</strong>
            </Link>
          </li>
          <li>
            <Link to="/profile/quizzes">
              <strong>My Quizzes</strong>
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-trigger flexbox"
              to="#!"
              data-target="dropdown1"
            >
              <i className="material-icons nav-ico">insert_emoticon</i>
              <i className="material-icons nav-ico">arrow_drop_down</i>
            </Link>
          </li>
          {children}
        </ul>
      </div>
    </div>
  );
};

export default AuthNav;
