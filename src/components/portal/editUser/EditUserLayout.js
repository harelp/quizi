import React, { useState } from 'react';
import EditDetails from './EditDetails';
import EditPass from './EditPass';
import './EditUserLayout.css';
const EditUserLayout = props => {
  const [step, setStep] = useState(0);

  const handleStep = num => {
    setStep(num);
  };

  const editDetails = <EditDetails onStepChange={handleStep} />;
  const editPassword = <EditPass onStepChange={handleStep} />;

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h5>Edit Profile</h5>
        </div>
      </div>
      <div className="row EditLayout">
        {step === 0 && editDetails}
        {step === 1 && editPassword}
      </div>
    </div>
  );
};

export default EditUserLayout;
