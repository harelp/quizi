import React, { useState } from 'react';

import axios from 'axios';
import './User.css';

const Register = props => {
  const [input, setInput] = useState({});

  const handleSubmit = async evt => {
    evt.preventDefault();

    if (Object.keys(input).length > 0) {
      const register = input.password[0] === input.confirmPass[0];
      if (register) {
        try {
          await axios.post('http://localhost:5000/api/v1/users/signup', {
            nickName: input.name[0],
            email: input.email[0],
            password: input.password[0],
            confirmPassword: input.confirmPass[0]
          });
          setInput({});
          props.history.push('/login');
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const handleChange = evt => {
    setInput({ ...input, [evt.target.id]: [evt.target.value] });
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
                id="name"
                type="text"
                className="validate"
                minLength="1"
                maxLength="20"
                required
                onChange={handleChange}
              />
              <label htmlFor="name">Nick Name</label>
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
                id="confirmPass"
                type="password"
                minLength="8"
                className="validate"
                required
                onChange={handleChange}
              />
              <label htmlFor="confirmPass">Confirm Password</label>
            </div>
          </div>
          <div className="row center">
            <div className="flexbox">
              <div className="input-field">
                <button
                  className="btn waves-effect indigo btn-large"
                  type="submit"
                  //   name="action"
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
