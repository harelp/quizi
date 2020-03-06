import React, { useContext } from 'react';
import { UserContext } from './../Context/UserContext';
import Profile from './profile/Profile';
import Avatar from './profile/Avatar';
import Stats from './userStats/Stats';
import './PortalLayout.css';
const PortalLayout = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h5>Profile</h5>
        </div>
      </div>

      <div className="row ">
        <div className="col l12 m12 s12">
          <div className="card">
            <div className="card-image pro-img"></div>
            <div className="card-content ">
              <Avatar user={user} />
              <div className="row">
                <div className="col l3 s12" style={{ marginTop: '25px' }}>
                  <Profile user={user} />
                </div>
                <div className="col l9 s12">
                  <Stats
                    color="green"
                    title="Total Points"
                    num={user.totalPoints}
                  />
                  <Stats
                    color="purple"
                    title="Quizzes Completed"
                    num={user.completed}
                  />
                  <div onClick={() => console.log('clicked')}>
                    <Stats
                      color="pink"
                      title="Quizzes Created"
                      num={user.created}
                      onClick={() => console.log('hmm')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalLayout;
