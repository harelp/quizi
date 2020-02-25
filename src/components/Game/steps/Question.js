import React, { useEffect, useContext, useState } from 'react';
import { QuizContext } from '../../Context/QuizContext';
import './Question.css';

export default function Question(props) {
  const { content } = useContext(QuizContext);
  const [timer, setTimer] = useState(4);

  useEffect(() => {
    const interVal = setInterval(Timer, 1000);
    function Timer() {
      if (timer !== 0) {
        setTimer(timer - 1);
      } else if (timer === 0) {
        props.onUpdate();
      }
    }

    return () => {
      clearInterval(interVal);
    };
  }, [timer, props]);
  return (
    <div className="question-flex">
      <h3>{content[props.qNum].question}</h3>
      <h5>{timer}</h5>
    </div>
  );
}
