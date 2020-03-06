import React, { useContext, useState } from 'react';
import { CqContext } from '../CqContext';
import { UserContext } from './../../../Context/UserContext';
const QuizDetails = props => {
  const { user } = useContext(UserContext);
  const {
    handleDetails,
    handleQuizName,
    handleQuizDesc,
    quizName,
    quizDesc,
    quizCheck,
    setQuizCheck
  } = useContext(CqContext);

  const nextStep = () => {
    if (quizName.value.length === 0 || quizDesc.value.length === 0) {
      return alert('Please Input Name or Description');
    }
    props.onStep(1);
    handleDetails({
      name: quizName,
      description: quizDesc,
      private: quizCheck,
      userId: user._id
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="input-field col s12">
          <small>Quiz Name</small>
          <input
            onChange={handleQuizName}
            id="name"
            type="text"
            className="col 12 validate"
            required
            value={quizName.value}
          />
        </div>
        <div className="input-field col s12">
          <small>Quiz Description</small>
          <textarea
            id="textarea1"
            className="materialize-textarea"
            onChange={handleQuizDesc}
            value={quizDesc.value}
            required
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <p>
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={quizCheck}
                onChange={() => setQuizCheck(!quizCheck)}
              />
              <span>Make It Private!</span>
            </label>
          </p>
        </div>
        <div className="input-field col s6 right-align">
          <button
            className="btn waves-effect waves-light indigo"
            onClick={nextStep}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
