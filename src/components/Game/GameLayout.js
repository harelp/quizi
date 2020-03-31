import React from 'react';
import Play from './steps/Play';
import './steps/Answers.css';
import LeaderBoardLayout from './lb/LeaderBoardLayout';
export default function GameLayout(props) {
  const handleGameSubmit = () => {
    props.history.push('/');
  };

  const handleStart = () => {
    props.history.push('/invite');
  };
  return (
    <div className="row gameHeigth ">
      <div className="col l10 s12">
        <Play redirect={handleGameSubmit} startHanlder={handleStart} />
      </div>
      <div className="col l2 s12">
        <LeaderBoardLayout />
      </div>
    </div>
  );
}
