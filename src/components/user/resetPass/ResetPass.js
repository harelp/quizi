import React from 'react';

const ResetPass = props => {
  const handlePassword = evt => {
    props.setPassword(evt.target.value);
  };

  const handleConfPassword = evt => {
    props.setConfirmPassword(evt.target.value);
  };

  return (
    <div className="row">
      <div className="input-field col s6">
        <input
          id="password"
          type="password"
          disabled={props.isLoading}
          minLength="8"
          className="validate"
          required
          value={props.password}
          onChange={handlePassword}
        />
        <label htmlFor="password">Password</label>
      </div>
      <div className="input-field col s6">
        <input
          id="confPassword"
          type="password"
          disabled={props.isLoading}
          minLength="8"
          className="validate"
          required
          value={props.confirmPassword}
          onChange={handleConfPassword}
        />
        <label htmlFor="confPassword">Confirm Password</label>
      </div>
    </div>
  );
};

export default ResetPass;
