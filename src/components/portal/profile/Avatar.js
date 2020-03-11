import React from 'react';
import { Link } from 'react-router-dom';
const Avatar = props => {
  const { nickName } = props.user;
  //   const nickName = 'harel peri';
  //   const email = 'harelperi2@gmail.com';
  return (
    <div className="row">
      <div className="col s8">
        <div className="center avatar">{nickName.charAt(0).toUpperCase()}</div>
      </div>
      <div className="col s4 right-align margin-edit">
        <Link
          to="/profile/edituser"
          className="btn-floating btn-small waves-effect waves-light red"
        >
          <i className="material-icons">edit</i>
        </Link>
      </div>
    </div>
  );
};

export default Avatar;
