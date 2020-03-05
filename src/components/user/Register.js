import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './../Context/UserContext';
import './User.css';

const API_URL = 'http://localhost:5000/api/v1';

const Register = props => {
  const { secureUser, setUserData } = useContext(UserContext);
  const [input, setInput] = useState({});

  const handleSubmit = async evt => {
    evt.preventDefault();
    const isInputObj = Object.keys(input).length > 0;
    if (isInputObj) {
      const { nickName, email, password, confirmPassword } = input;

      const register = password === confirmPassword;
      if (register) {
        try {
          const response = await axios.post(`${API_URL}/users/signup`, {
            nickName,
            email,
            password,
            confirmPassword
          });
          localStorage.setItem('quiziToken', response.data.token);
          secureUser(true);
          setUserData(response.data.user);
          props.history.push('/profile');
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const handleChange = evt => {
    setInput({ ...input, [evt.target.id]: evt.target.value });
  };
  return (
    <div className="container center">
      <h3>Register</h3>
      <div className="row" style={{ marginTop: '25px' }}>
        <form
          className="col s12"
          onSubmit={handleSubmit}
          style={{
            background: '#fff',
            borderRadius: '2px',
            boxShadow:
              '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
            padding: '25px 25px'
          }}
        >
          <div className="row">
            <div className="input-field col s12">
              <input
                id="nickName"
                type="text"
                className="validate"
                minLength="1"
                maxLength="20"
                required
                onChange={handleChange}
              />
              <label htmlFor="nickName">Nick Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                required
                onChange={handleChange}
              />
              <label htmlFor="email">Email Address</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="password"
                type="password"
                minLength="8"
                className="validate"
                required
                onChange={handleChange}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col s6">
              <input
                id="confirmPassword"
                type="password"
                minLength="8"
                className="validate"
                required
                onChange={handleChange}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
          </div>
          <div className="row center">
            <div className="flexbox">
              <div className="input-field">
                <button
                  className="btn waves-effect indigo btn-large"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
