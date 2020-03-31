import React, { useState, useContext, useEffect } from 'react';
import Name from './Name';
import Question from './Question';
import Answers from './Answers';
import GameEnd from './GameEnd';
import { QuizContext } from '../../Context/QuizContext';
import { UserContext } from '../../Context/UserContext';

const Play = props => {
  const { content } = useContext(QuizContext);
  const { handlePoints, handleCurName, setPoints } = useContext(UserContext);
  useEffect(() => {
    return () => {
      setPoints(0);
    };
  }, [setPoints]);

  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [qNum, setqNum] = useState(0);

  const handleSubmit = evt => {
    evt.preventDefault();
    content === null && alert('Please enter a Quizi Pin');
    content === null && props.startHanlder();
    handleCurName(name);
    setStep(1);
  };
  // input controller
  const handleChange = evt => {
    setName(evt.target.value);
  };
  // Updates the step
  const handleUpdate = () => {
    setStep(step + 1);
  };
  const handleRestart = props => {
    setStep(0);
  };
  // helly's code
  const handleCalc = num => {
    handlePoints(num);
  };

  // reset's step
  const handleReset = () => {
    const ansArrLen = Object.keys(content).length - 1;
    if (qNum === ansArrLen) {
      setqNum(0);
      setStep(4);
    } else {
      setqNum(qNum + 1);
      setStep(1);
    }
  };

  const stepZero = (
    <Name onSubmit={handleSubmit} onChange={handleChange} value={name} />
  );
  const stepOne = <Question qNum={qNum} onUpdate={handleUpdate} />;
  const stepTwo = (
    <Answers
      qNum={qNum}
      onCalc={handleCalc}
      onReset={handleReset}
      setStep={setStep}
    />
  );
  const stepDefault = (
    <GameEnd restart={handleRestart} redirect={props.redirect} />
  );
  switch (step) {
    case 0:
      return stepZero;
    case 1:
      return stepOne;

    case 2:
      return stepTwo;
    default:
      return stepDefault;
  }
};

export default Play;
