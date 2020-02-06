import React from 'react';
import { Link } from 'react-router-dom';

const AuthNav = ({ children, onLogOut }) => {
  return (
    <div className="container">
      <Link to="/" className="brand-logo">
        Quizi
      </Link>
      <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button
            className="btn waves-effect teal btn-small"
            onClick={onLogOut}
          >
            Log Out
          </button>
        </li>
        {children}
      </ul>
    </div>
  );
};

export default AuthNav;
