import React, { useState, useContext } from 'react';
import CreateBox from './CreateBox';
import { CqContext } from '../CqContext';

const CreateQuiz = props => {
  const [question, setQuestion] = useState({ value: '' });
  const [answers, setAnswers] = useState({});

  const [corrAns, setCorrAns] = useState();
  const { handleData } = useContext(CqContext);

  let arr = [];
  const boxes = () => {
    for (let index = 0; index < 4; index++) {
      arr.push(
        <div className="col s6 bg-color" key={index}>
          <CreateBox
            name={'ans' + index}
            changeHandler={handleChange}
            setAns={handleAnswer}
          />
        </div>
      );
    }
    return arr;
  };

  const handleChange = evt => {
    setAnswers({ ...answers, [evt.target.name]: evt.target.value });
  };
  const handleAnswer = evt => {
    setCorrAns(evt.target.id);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    let radio,
      ansArray = [];
    Object.keys(answers).forEach(function(key) {
      if (corrAns === key) radio = answers[key];
      ansArray.push(answers[key]);
    });

    const content = {
      question: question.value,
      answers: ansArray,
      correctAns: radio
    };

    handleData(content);
    setQuestion({ value: '' });
    props.onStep(2);
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col s4">
          <button
            className="btn-floating btn-small waves-effect waves-light red"
            onClick={() => {
              props.onStep(0);
            }}
          >
            <i className="material-icons">arrow_back</i>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              onChange={evt => setQuestion({ value: evt.target.value })}
              id="question"
              type="text"
              className="col 12 validate"
              required
              value={question.value}
            />
            <label htmlFor="question">I need a fun question here</label>
          </div>
        </div>
        <div className="row ">{boxes()}</div>
        <div className="row">
          <div className="col s12 right-align">
            <button
              className="btn waves-effect waves-light indigo"
              type="submit"
            >
              Add Question
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CreateQuiz;
