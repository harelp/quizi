import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';
import { toast } from 'react-toastify';
import Loader from '../../Loader';

import './GameEnd.css';
const API_URL = 'http://localhost:5000/api/v1';

const GameEnd = ({ restart, redirect }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { points, isAuth, user, setPoints, setUserData } = useContext(
    UserContext
  );
  const checkPoints = points !== null;

  const handleRestart = () => {
    setPoints(null);
    restart();
  };

  const submitScores = async () => {
    setIsLoading(true);
    const totalPoints = user.totalPoints + points;
    const completed = user.completed + 1;
    try {
      const response = await axios.patch(`${API_URL}/users/updateUser`, {
        userId: user._id,
        totalPoints,
        completed
      });
      setUserData(response.data.user);
      toast.success('Awesome!!', {
        onClose: () => {
          redirect();
        }
      });
    } catch (error) {
      toast.error('Pleas Try Again', {
        onClose: () => setIsLoading(false)
      });
    }
  };

  const btn = isAuth && (
    <button
      className="waves-effect blue darken-1 btn-large"
      onClick={submitScores}
    >
      Submit Score
    </button>
  );
  return (
    <div className="GameEnd_flex">
      <h5 style={{ marginBottom: '50px' }}>
        Congratulations!! You scored <strong>{checkPoints ? points : 0}</strong>{' '}
        Points
      </h5>
      <div className="button_flex">
        <button
          className="waves-effect red btn-large"
          disable={isLoading}
          onClick={handleRestart}
        >
          <i className="material-icons left">refresh</i>Restart
        </button>

        {isLoading ? <Loader /> : btn}
      </div>
    </div>
  );
};

export default GameEnd;
