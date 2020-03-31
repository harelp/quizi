import React from 'react';
import { QuizContext } from '../../Context/QuizContext';
import TopUsers from './TopUsers';
import CurUser from './CurUser';
export default function LeaderBoardLayout() {
  const { quiz } = React.useContext(QuizContext);
  return (
    <div className="row center">
      <div className="col s12" style={{ marginTop: '25px' }}>
        <h6>Quizi Pin: {quiz !== null && quiz._id}</h6>
      </div>
      <div
        className="col s12"
        style={{
          background: '#fff',
          borderRadius: '2px',
          boxShadow:
            '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',

          marginTop: '25px'
        }}
      >
        <h6>Your Score</h6>
        <CurUser />
      </div>
      <div
        className="col s12"
        style={{
          background: '#fff',
          borderRadius: '2px',
          boxShadow:
            '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',

          marginTop: '25px'
        }}
      >
        <h6>Top Players</h6>
        <TopUsers />
      </div>
    </div>
  );
}
