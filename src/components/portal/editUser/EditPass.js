import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { UserContext } from './../../Context/UserContext';
import Loader from '../../Loader';
const API_URL = 'http://localhost:5000/api/v1';

const EditPass = props => {
  const [currPassword, setcurrPassword] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUserData } = useContext(UserContext);

  const handleSubmit = async evt => {
    evt.preventDefault();
    setIsLoading(true);
    const passMatch = password === confirmPassword;
    if (!passMatch) {
      alert("Password's don't match");
    } else {
      try {
        const response = await axios.patch(`${API_URL}/users/updatePassword`, {
          userId: user._id,
          currPassword,
          password,
          confirmPassword
        });
        toast.success('Password Changed', {
          onClose: () => setIsLoading(false)
        });
        setUserData(response.data.user);
        setpassword('');
        setconfirmPassword('');
        setIsLoading('');
      } catch (error) {
        toast.error('Incorrect Password!');
        setIsLoading(false);
      }
    }
  };

  const btn = <button className="waves-effect red btn-small">Save</button>;

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="row">
        <div className="flexbox">
          <div className="input-field col l12 s12">
            <small>Current Password</small>
            <input
              id="currPassword"
              type="password"
              className="validate"
              value={currPassword}
              disabled={isLoading}
              onChange={evt => setcurrPassword(evt.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="flexbox">
          <div className="input-field col l6 s12">
            <small>New Password</small>
            <input
              id="newPassword"
              type="password"
              minLength="8"
              className="validate"
              value={password}
              disabled={isLoading}
              onChange={evt => setpassword(evt.target.value)}
              required
            />
          </div>
          <div className="input-field col l6 s12">
            <small>Confirm New Password</small>
            <input
              id="confPassword"
              type="password"
              className="validate"
              minLength="8"
              value={confirmPassword}
              disabled={isLoading}
              onChange={evt => setconfirmPassword(evt.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="flexbox">
          <div className="col l6 s8">
            <button
              type="button"
              onClick={() => props.onStepChange(0)}
              className="waves-effect black btn-small"
              disabled={isLoading}
            >
              Change Details
            </button>
          </div>
          <div className="col l6 s4 right-align">
            {isLoading ? <Loader /> : btn}
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditPass;
