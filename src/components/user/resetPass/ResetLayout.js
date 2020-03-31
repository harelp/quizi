import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ResetPass from './ResetPass';
import ResetButtons from './ResetButtons';
import './resetLayout.css';

const API_URL = 'http://localhost:5000/api/v1';

const ResetLayout = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [secretCode, setSecretCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async evt => {
    evt.preventDefault();
    if (step === 0) {
      try {
        setIsLoading(true);
        await axios.post(`${API_URL}/users/forgotPassword`, {
          email,
          secretCode
        });
        toast.success('User Found!', {
          onClose: () => {
            setStep(1);
            setIsLoading(false);
          }
        });
      } catch (error) {
        toast.error('Incorrect Email or Secret Code', {
          onClose: () => setIsLoading(false)
        });
      }
    }

    if (step === 1) {
      const match = password === confirmPassword;

      if (!match) {
        toast.error("Passwords don't Match");
      } else {
        try {
          setIsLoading(true);
          await axios.post(`${API_URL}/users/resetPassword`, {
            email,
            password,
            confirmPassword
          });
          toast.success('Password Changed!', {
            onClose: () => {
              props.history.push('/login');
            }
          });
        } catch (error) {
          toast.error('Contact Adminstrator', {
            onClose: () => setIsLoading(false)
          });
        }
      }
    }
  };

  return (
    <div className="container center">
      <h5>Reset Password</h5>
      <div className="flex">
        <form className="resetContainer" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                disabled={isLoading || step === 1}
                required
                value={email}
                onChange={evt => setEmail(evt.target.value)}
              />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="input-field col s12">
              <input
                id="secretCode"
                type="text"
                maxLength="4"
                className="validate"
                disabled={isLoading || step === 1}
                required
                value={secretCode}
                onChange={evt => setSecretCode(evt.target.value)}
              />
              <label htmlFor="secretCode">Secret Code</label>
            </div>
          </div>
          {step === 1 && (
            <ResetPass
              isLoading={isLoading}
              password={password}
              confirmPassword={confirmPassword}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
            />
          )}
          <ResetButtons step={step} isLoading={isLoading} setStep={setStep} />
        </form>
      </div>
    </div>
  );
};

export default ResetLayout;
