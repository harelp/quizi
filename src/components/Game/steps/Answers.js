import React, { useEffect, useContext, useState } from 'react';
import AnswerBox from './AnswerBox';
import { QuizContext } from '../../Context/QuizContext';
import './Answers.css';

export default function Answers(props) {
  const { content } = useContext(QuizContext);
  const [answer, setAnswer] = useState(null);
  const [timer, setTimer] = useState(8);

  useEffect(() => {
    let interVal = setInterval(Timer, 1000);
    function Timer() {
      if (timer !== 0) {
        setTimer(timer - 1);
      } else if (timer === 0) {
        props.onReset();
      }
    }
    return () => {
      clearInterval(interVal);
    };
  }, [timer, props]);

  const handleAnswer = ans => {
    const userAnswer = ans === content[props.qNum].correctAns;
    setAnswer(userAnswer);
    userAnswer && props.onCalc();
  };

  const answers = content[props.qNum].answers;
  const question = content[props.qNum].question;
  const ansCorrect = answer && 'Correct';
  const ansInCorrect = answer === null ? '' : 'Incorrect';

  return (
    <div className="answer-container">
      <div className="answer-flex">
        <div className="flex-top">
          <h5>{answer ? ansCorrect : ansInCorrect}</h5>
        </div>
        <div className="flex-middle">
          <h3>{question}</h3>
          <h5>{timer}</h5>
        </div>
        <div className="flex-bottom">
          {answers.map(el => {
            return (
              <AnswerBox
                key={el}
                answer={el}
                divController={answer}
                onAnswer={() => handleAnswer(el)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
