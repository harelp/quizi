import React from 'react';
import { Link } from 'react-router-dom';

const UnAuthSideNav = ({ children }) => {
  return (
    <React.Fragment>
      <li
        style={{
          borderBottom: '1px solid rgba(160,160,160,0.2)'
        }}
      >
        <Link to="/">Quizi</Link>
      </li>

      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li className="active">
        <Link to="/register">Register</Link>
      </li>
      {children}
    </React.Fragment>
  );
};

export default UnAuthSideNav;
