import React from 'react';
import Loader from '../../Loader';
const ResetButtons = props => {
  const btn = (
    <button className="btn waves-effect indigo btn-medium" type="submit">
      {props.step === 0 ? 'Next' : 'Change Password'}
    </button>
  );

  const btnTwo = (
    <button
      className="btn waves-effect black btn-medium"
      type="button"
      disabled={props.isLoading}
    >
      back
    </button>
  );
  return (
    <div className="row">
      <div className="col s2 left-align" onClick={() => props.setStep(0)}>
        {props.step === 1 ? btnTwo : ''}
      </div>
      <div className="col s10 right-align">
        {props.isLoading ? <Loader /> : btn}
      </div>
    </div>
  );
};

export default ResetButtons;
