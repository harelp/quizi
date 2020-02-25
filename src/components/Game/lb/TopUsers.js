import React from 'react';
import { QuizContext } from '../../Context/QuizContext';
import sortArr from './helpers';
const TopUsers = () => {
  const { quiz } = React.useContext(QuizContext);
  const playerData = quiz !== null && sortArr(quiz.leaderBoard);

  const outputPlayer =
    playerData &&
    playerData.map((el, index) => {
      return (
        <tr key={index}>
          <td>{el.playerName}</td>
          <td>{el.points}</td>
        </tr>
      );
    });
  return (
    <table className="centered highlight">
      <thead>
        <tr>
          <th>Player</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>{outputPlayer}</tbody>
    </table>
  );
};

export default TopUsers;
