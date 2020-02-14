import React, { useState } from 'react';
import CreateQuiz from './create/CreateQuiz';
import QuizDetails from './create/QuizDetails';
import ViewQuiz from './view/ViewQuiz';
import { CqProvider } from './CqContext';
import './CreateLayout.css';

const CreateLayout = () => {
  const [txtVal, setTxtVal] = useState();
  const [quizName, setQuizName] = useState();
  const [step, setStep] = useState(0);

  const handletxtVal = val => {
    setTxtVal(val);
  };

  const handleQuizName = val => {
    setQuizName(val);
  };

  const handleStep = num => {
    setStep(num);
  };

  const stepZero = (
    <QuizDetails
      onTextVal={handletxtVal}
      onQuizName={handleQuizName}
      onStep={handleStep}
      quizName={quizName}
      txtVal={txtVal}
    />
  );
  const stepOne = (
    <CreateQuiz onStep={handleStep} txtVal={txtVal} quizName={quizName} />
  );
  return (
    <CqProvider>
      <div className="container " style={{ marginTop: '20px' }}>
        <div className="row CreateLayout">
          {step === 0 && stepZero}
          {step === 1 && stepOne}
        </div>
        <div className="row">
          <div className="col s12">
            ViewQuiz
            {/* <ViewQuiz /> */}
          </div>
        </div>
      </div>
    </CqProvider>
  );
};

export default CreateLayout;
