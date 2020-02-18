import React, { useState } from 'react';
import CreateQuiz from './create/CreateQuiz';
import QuizDetails from './create/QuizDetails';
import ViewQuiz from './view/ViewQuiz';
import { CqProvider } from './CqContext';
import './CreateLayout.css';

const CreateLayout = () => {
  const [step, setStep] = useState(0);
  const handleStep = num => {
    setStep(num);
  };

  const stepZero = <QuizDetails onStep={handleStep} />;
  const stepOne = <CreateQuiz onStep={handleStep} />;
  const stepTwo = 'lol';
  return (
    <CqProvider>
      <div className="container " style={{ marginTop: '20px' }}>
        <div className="row CreateLayout">
          {step === 0 && stepZero}
          {step === 1 && stepOne}
          {step === 2 && stepTwo}
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
