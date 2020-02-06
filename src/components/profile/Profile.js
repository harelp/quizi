import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

const Profile = props => {
  const { isAuth } = useContext(UserContext);
  if (isAuth && localStorage.getItem('quiziToken')) {
    return 'secure';
  } else {
    setTimeout(() => {
      props.history.push('/login');
    }, 1000);
    return (
      <div
        className="progress"
        style={{
          position: 'absolute',
          top: '50vh',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50vw',
          textAlign: 'center'
        }}
      >
        <div className="indeterminate"></div>
      </div>
    );
  }
};

export default Profile;
