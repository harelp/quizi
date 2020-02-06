import React, { useContext } from 'react';
import { QuizContext } from '../Context/QuizContext';

const Invite = props => {
  const { getQuiz } = useContext(QuizContext);
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  // //5e24cc914b98ee5eb0fb85aa
  getQuiz(id);
  props.history.push('/play');

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
};

export default Invite;
