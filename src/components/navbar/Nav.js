import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './../Context/UserContext';
import './Nav.css';

export default function Nav(props) {
  const { isAuth, secureUser } = useContext(UserContext);

  const logOut = () => {
    secureUser(false);
  };
  // unauthorized nav
  const unAuthNav = (
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
          <Link to="/login">Sign In</Link>
        </li>
        <li className="active">
          <Link to="/register">Register</Link>
        </li>
        {props.children}
      </ul>
    </div>
  );
  // unauthorized  sideNav
  const unAuthSideNav = (
    <ul className="sidenav" id="mobile-demo">
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
        <Link to="/login">Sign In</Link>
      </li>
      <li className="active">
        <Link to="/register">Register</Link>
      </li>
      {props.children}
    </ul>
  );

  // authorized  sideNav
  const authSideNav = (
    <ul className="sidenav" id="mobile-demo">
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
        <button
          style={{ marginLeft: '30px' }}
          className="btn waves-effect teal btn-small"
          onClick={logOut}
        >
          Log Out
        </button>
      </li>
      {props.children}
    </ul>
  );

  // authorized nav
  const authNav = (
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
          <button className="btn waves-effect teal btn-small" onClick={logOut}>
            Log Out
          </button>
        </li>
        {props.children}
      </ul>
    </div>
  );

  return (
    <nav>
      <div className="nav-wrapper white black-text">
        {isAuth ? authNav : unAuthNav}
      </div>
      {isAuth ? authSideNav : unAuthSideNav}
    </nav>
  );
}
