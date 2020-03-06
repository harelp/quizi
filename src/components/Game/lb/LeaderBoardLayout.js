import React from 'react';
import TopUsers from './TopUsers';
import CurUser from './CurUser';
export default function LeaderBoardLayout(props) {
  return (
    <div className="row center">
      <div
        className="col s12"
        style={{
          background: '#fff',
          borderRadius: '2px',
          boxShadow:
            '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
          padding: '3px',
          margin: '25px 0 0 15px'
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
          padding: '3px',
          margin: '25px 0 0 15px'
        }}
      >
        <h6>Top Players</h6>
        <TopUsers />
      </div>
    </div>
  );
}
