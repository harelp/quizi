import React, { useState } from 'react';
import EditDetails from './EditDetails';
import EditPass from './EditPass';
import './EditUserLayout.css';
const EditUserLayout = props => {
  const [step, setStep] = useState(0);

  const handleStep = num => {
    setStep(num);
  };

  const handleRoute = () => {
    props.history.push('/profile');
  };

  const editDetails = (
    <EditDetails onStepChange={handleStep} onRouteChange={handleRoute} />
  );
  const editPassword = (
    <EditPass onStepChange={handleStep} onRouteChange={handleRoute} />
  );

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

  // switch (step) {
  //   case 0:
  //     return (
  //       <div className="container">
  //         <div className="EditLayout">{editDetails}</div>
  //       </div>
  //     );

  //   case 1:
  //     return (
  //       <div className="container">
  //         <div className="EditLayout">{editPassword}</div>
  //       </div>
  //     );
  //   default:
  //     break;
  // }
};

export default EditUserLayout;
