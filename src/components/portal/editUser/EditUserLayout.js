import React from 'react';
import EditDetails from './EditDetails';
import EditPass from './EditPass';
import './EditUserLayout.css';
const EditUserLayout = () => {
  //   const editDetails = <EditDetails />;
  //   const editPassword = <EditPass />;
  return (
    <div className="container">
      <div className="EditLayout">
        <div className="row">
          <div className="input-field col s12">
            <small>Email Address</small>
            <input
              id="email"
              type="email"
              className="col 12 validate"
              required
            />
          </div>
          <div className="input-field col s12">
            <small>Nick Name</small>
            <input
              id="email"
              type="text"
              className="col 12 validate"
              required
            />
          </div>
        </div>

        <div className="button_flex">
          <button className="waves-effect red btn-large">Edit Details</button>

          <button className="waves-effect red btn-large">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserLayout;
