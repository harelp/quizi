import React from 'react';
import './Profile.css';

const Profile = props => {
  const nickName = 'harel peri';
  const totalPoints = 500;
  return (
    <div className="card" style={{ marginTop: '20px' }}>
      <div
        className="card-image"
        style={{
          height: '80px',
          background: 'linear-gradient(90deg,#615cae,#506fbd)'
        }}
      >
        <div className="row right" style={{ margin: '-15px -25px 0 0' }}>
          <div className="col s12">
            <button className="btn-floating btn-small waves-effect waves-light red">
              <i className="material-icons">edit</i>
            </button>
          </div>
        </div>
      </div>
      <div className="card-content">
        <div className="row">
          <div className="col s12">
            <div className="center avatar">
              {nickName.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        <div className="row center">
          <div className="col s12">
            <h5>{nickName}</h5>
          </div>
          <div className="col s12">
            <p className="points">Points: {totalPoints}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
