import React, { useState } from 'react';
import CreateQuiz from './create/CreateQuiz';
import ConfirmQuiz from './create/ConfirmQuiz';
import QuizDetails from './create/QuizDetails';
import { CqProvider } from './CqContext';
import './CreateLayout.css';

const CreateLayout = props => {
  const [step, setStep] = useState(0);
  const handleStep = num => {
    setStep(num);
  };

  const handleRoute = () => {
    props.history.push('/profile');
  };

  const stepZero = <QuizDetails onStep={handleStep} />;
  const stepOne = <CreateQuiz onStep={handleStep} />;
  const stepTwo = (
    <ConfirmQuiz onStep={handleStep} onRouteChange={handleRoute} />
  );
  return (
    <CqProvider>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h5>Add Quiz</h5>
          </div>
        </div>
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
