import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../Context/QuizContext';

const Invite = props => {
  const { content, getQuiz } = useContext(QuizContext);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (content === null) {
      getQuiz(id);
    } else {
      props.history.push('/play');
    }
  }, [content]);

  // //5e24cc914b98ee5eb0fb85aa
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