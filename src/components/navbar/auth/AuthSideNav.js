import React from 'react';
import { Link } from 'react-router-dom';

const AuthSideNav = ({ children, onLogOut }) => {
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
        <Link to="/invite">
          <strong>Join a Quizi</strong>
        </Link>
      </li>
      <li>
        <Link to="/profile/quizzes">My Quizzes</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <button
          style={{ marginLeft: '30px' }}
          className="btn waves-effect teal btn-small"
          onClick={onLogOut}
        >
          Log Out
        </button>
      </li>
      {children}
    </React.Fragment>
  );
};

export default AuthSideNav;
