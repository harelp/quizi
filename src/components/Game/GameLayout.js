import React, { useEffect } from 'react';
import Play from './steps/Play';
import axios from 'axios';
import './steps/Answers.css';

export default function GameLayout(props) {
  useEffect(() => {
    async function fetch() {
      try {
        const resp = await axios('http://localhost:5000/api/v1/users');
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  });

  const arr = [
    { username: 'Omar5000', points: '732' },
    { username: 'HarelP', points: '755' },
    { username: 'jon', points: '231' },
    { username: 'BigBob', points: '795' },
    { username: 'ILoveTRUMP', points: '795' },
    { username: 'ILoveTRUMP', points: '795' }
  ];

  return (
    <div className="row" style={{ height: '85vh' }}>
      <div className="col l2 s12 hideMobile">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Points</th>
            </tr>

            {arr.map((el, index) => {
              return (
                <tr key={index}>
                  <th>{el.username}</th>
                  <th>{el.points}</th>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
      <div className="col l10 s12">
        <Play />
      </div>
    </div>
  );
}
