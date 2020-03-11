import React from 'react';
import { Link } from 'react-router-dom';

const UnAuthNav = ({ children }) => {
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
          <Link to="/login">Login</Link>
        </li>
        <li className="active">
          <Link to="/register">Register</Link>
        </li>
        {children}
      </ul>
    </div>
  );
};

export default UnAuthNav;
