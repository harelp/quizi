import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { UserContext } from './../../Context/UserContext';
import Loader from '../../Loader';
const API_URL = 'http://localhost:5000/api/v1';

const EditDetails = props => {
  const [email, setEmail] = useState(' ');
  const [nickName, setNickName] = useState(' ');
  const [isLoading, setIsLoading] = useState(false);

  const { user, setUserData, secureUser } = useContext(UserContext);
  useEffect(() => {
    if (email === ' ') {
      setEmail(user.email);
    }
    if (nickName === ' ') {
      setNickName(user.nickName);
    }
  }, [email, nickName, user.email, user.nickName]);

  const handleSubmit = async evt => {
    evt.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.patch(`${API_URL}/users/updateUser`, {
        userId: user._id,
        email,
        nickName
      });
      toast.success('Details Changed', {
        onClose: () => {
          setIsLoading(false);
        }
      });
      setUserData(response.data.user);
    } catch (error) {
      toast.error('Unauthorized, Contact Administrator');
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    if (window.confirm('Are you sure?')) {
      try {
        await axios.delete(`${API_URL}/users/${user._id}`);
        toast.success('Account has been Deleted', {
          onClose: () => {
            secureUser(false);
          }
        });
      } catch (error) {
        toast.error('Unauthorized, Contact Administrator');
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  const btn = <button className="waves-effect red btn-small">Save</button>;

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="row">
        <div className="flexbox">
          <div className="input-field col l12 s12">
            <small>Email Address</small>
            <input
              id="email"
              type="email"
              value={email}
              onChange={evt => setEmail(evt.target.value)}
              className="validate"
              disabled={isLoading}
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="flexbox">
          <div className="input-field col l12 s12">
            <small>Nick Name</small>
            <input
              id="nickName"
              value={nickName}
              type="text"
              minLength="1"
              maxLength="20"
              className="validate"
              disabled={isLoading}
              onChange={evt => setNickName(evt.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <a
            className="right"
            style={{ cursor: 'pointer' }}
            onClick={!isLoading && handleDelete}
          >
            Delete Account?
          </a>
        </div>
      </div>
      <div className="row">
        <div className="flexbox">
          <div className="col l6 s8">
            <button
              type="button"
              onClick={() => props.onStepChange(1)}
              className="waves-effect black btn-small"
              disabled={isLoading}
            >
              Change Password
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

export default EditDetails;
