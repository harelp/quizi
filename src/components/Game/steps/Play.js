import React, { useState, useContext } from 'react';
import Name from './Name';
import Question from './Question';
import Answers from './Answers';
import { QuizContext } from '../../Context/QuizContext';
import { UserContext } from '../../Context/UserContext';

const Play = props => {
  const { content } = useContext(QuizContext);
  const { handlePoints, handleCurName } = useContext(UserContext);

  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [qNum, setqNum] = useState(0);

  // prevents refresh
  const handleSubmit = evt => {
    evt.preventDefault();
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

  // helly's code
  const handleCalc = () => {
    handlePoints();
  };

  // reset's step
  const handleReset = () => {
    const ansArrLen = Object.keys(content).length - 1;
    if (qNum === ansArrLen) {
      setqNum(0);
      setStep(4);
      console.log('i got in');
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
    <Answers qNum={qNum} onCalc={handleCalc} onReset={handleReset} />
  );
  switch (step) {
    case 0:
      return stepZero;
    case 1:
      return stepOne;

    case 2:
      return stepTwo;
    default:
      return 'GameEnd';
  }
};

export default Play;
