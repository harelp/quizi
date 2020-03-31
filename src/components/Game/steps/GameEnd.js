import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';
import { QuizContext } from '../../Context/QuizContext';
import { toast } from 'react-toastify';
import Loader from '../../Loader';

import './GameEnd.css';
const API_URL = 'http://localhost:5000/api/v1';

const GameEnd = ({ restart, redirect }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { points, isAuth, user, setPoints, setUserData } = useContext(
    UserContext
  );
  const { quiz } = useContext(QuizContext);
  const checkPoints = points !== null;

  const handleRestart = () => {
    setPoints(null);
    restart();
  };

  const submitScores = async () => {
    setIsLoading(true);
    const totalPoints = user.totalPoints + points;
    const completed = user.completed + 1;
    const filtered = quiz.leaderBoard.filter(el => el.playerId === user._id);
    filtered.length > 0 && console.log(filtered);
    try {
      const response = await axios.patch(`${API_URL}/users/updateUser`, {
        userId: user._id,
        totalPoints,
        completed
      });

      if (filtered.length > 0) {
        const confirmSubmit = window.confirm(
          'Do you want to update your current scores for this quizi?'
        );
        confirmSubmit &&
          (await axios.patch(`${API_URL}/quizzes/updatePoints/${quiz._id}`, {
            playerId: filtered[0].playerId,
            points,
            playerName: user.nickName
          }));
      } else {
        await axios.patch(`${API_URL}/quizzes/newPoints/${quiz._id}`, {
          playerId: user._id,
          points,
          playerName: user.nickName
        });
      }

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
          disabled={isLoading}
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
