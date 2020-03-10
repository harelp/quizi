import React from 'react';
import Play from './steps/Play';
import './steps/Answers.css';
import LeaderBoardLayout from './lb/LeaderBoardLayout';

export default function GameLayout(props) {
  const handleGameSubmit = () => {
    props.history.push('/');
  };
  return (
    <div className="row" style={{ height: '85vh' }}>
      <div className="col l2 s12 hideMobile">
        <LeaderBoardLayout />
      </div>
      <div className="col l10 s12">
        <Play redirect={handleGameSubmit} />
      </div>
    </div>
  );
}
