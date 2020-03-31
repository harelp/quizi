import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { EditQuizContext } from '../EditQuizContext';
import Loader from '../../../Loader';

const API_URL = 'http://localhost:5000/api/v1';

const EditQuizDetails = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('$@');
  const [description, setDescription] = useState('$@');
  const [isPrivate, setPrivate] = useState('$@');

  const { currQuiz, setCurrQuiz } = useContext(EditQuizContext);

  useEffect(() => {
    currQuiz !== '' && name === '$@' && setName(currQuiz.name);
    currQuiz !== '' &&
      description === '$@' &&
      setDescription(currQuiz.description);
    currQuiz !== '' && isPrivate === '$@' && setPrivate(currQuiz.private);
  }, [name, description, isPrivate, currQuiz]);

  const handleSubmit = async evt => {
    evt.preventDefault();
    setIsLoading(true);
    const DATATOPOST = {
      name,
      description,
      private: isPrivate
    };
    try {
      const response = await axios.patch(
        `${API_URL}/quizzes/${currQuiz._id}`,
        DATATOPOST
      );

      toast.success('Changed Succesfully', {
        onClose: () => {
          setIsLoading(false);
          props.setOpen(false);
          setCurrQuiz(response.data);
        }
      });
    } catch (error) {
      toast.error('Try Again');
      setIsLoading(false);
    }
  };
  return (
    <div className="card">
      <div className="card-content">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <small>Quiz Name:</small>
              <input
                onChange={evt => setName(evt.target.value)}
                type="text"
                className="col 12 validate"
                required
                value={name}
              />
            </div>
            <div className="input-field col s12">
              <small>Description:</small>
              <input
                onChange={evt => setDescription(evt.target.value)}
                type="text"
                className="col 12 validate"
                required
                value={description}
              />
            </div>
          </div>
          <div className="row">
            <div className="col l6 s4 left-align">
              <p>
                <label>
                  <input
                    type="checkbox"
                    className="filled-in"
                    checked={isPrivate}
                    onChange={() => setPrivate(!isPrivate)}
                  />
                  <span>Make It Private!</span>
                </label>
              </p>
            </div>
            <div className="col s6 right-align">
              <div className="col s2 right">
                {isLoading ? (
                  <Loader />
                ) : (
                  <button
                    className="waves-effect indigo btn-small"
                    type="submit"
                  >
                    Save
                  </button>
                )}
              </div>
              <div className="col right">
                <button
                  className="waves-effect black btn-small"
                  type="button"
                  onClick={() => props.setOpen(false)}
                  disabled={isLoading}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditQuizDetails;
