import React from 'react';
import './Profile.css';

const Profile = props => {
  const { nickName, email } = props.user;
  // const nickName = 'harel peri';
  // const email = 'harelperi2@gmail.com';
  return (
    <div className="row center">
      <div className="col s12">
        <h5>{nickName}</h5>
      </div>
      <div className="col s12">
        <p className="points">{email}</p>
      </div>
    </div>
  );
};

export default Profile;
