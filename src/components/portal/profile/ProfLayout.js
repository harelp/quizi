import React from 'react';
// import {UserContext} from './../Context/UserContext';
import Profile from './Profile';
const ProfLayout = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col l3 m12 s12">
          <h5>Profile</h5>
          <Profile />
        </div>

        <div className="col l9 m12 s12">
          <h5>other stuff</h5>
        </div>
      </div>
    </div>
  );
};

export default ProfLayout;
