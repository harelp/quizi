import React, { useEffect } from 'react';
import Play from './steps/Play';
import axios from 'axios';
import './steps/Answers.css';
import LeaderBoardLayout from './lb/LeaderBoardLayout';

export default function GameLayout(props) {
  return (
    <div className="row" style={{ height: '85vh' }}>
      <div className="col l2 s12 hideMobile">
        <LeaderBoardLayout />
      </div>
      <div className="col l10 s12">
        <Play />
      </div>
    </div>
  );
}
