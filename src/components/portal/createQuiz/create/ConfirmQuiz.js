import React, { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { CqContext } from '../CqContext';
import { UserContext } from './../../../Context/UserContext';

const API_URL = 'http://localhost:5000/api/v1';

const ConfirmQuiz = props => {
  const { data, details } = useContext(CqContext);
  const { user, setUserData } = useContext(UserContext);

  const handleCreate = async () => {
    const DATATOPOST = {
      name: details.name.value,
      description: details.description.value,
      userId: details.userId,
      private: details.private,
      content: data
    };
    try {
      const created = user.created + 1;
      await axios.post(`${API_URL}/quizzes`, DATATOPOST);
      const response = await axios.patch(`${API_URL}/users/updateUser`, {
        userId: user._id,
        created
      });
      setUserData(response.data.user);
      toast.success('Quiz has been created!', {
        onClose: () => props.onRouteChange()
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="row">
      <h4 className="center">Confirm</h4>
      <div className="col s6 center">
        <button
          className="btn waves-effect waves-light red darken-2"
          onClick={handleCreate}
        >
          Create Quiz
        </button>
      </div>
      <div className="col s6 center">
        <button
          className="btn waves-effect waves-light indigo"
          onClick={() => {
            props.onStep(1);
          }}
        >
          Add Question
        </button>
      </div>
    </div>
  );
};

export default ConfirmQuiz;
