import React, { useState, useContext } from 'react';
import CreateBox from './CreateBox';
import { QuizContext } from '../../Context/QuizContext';

const CreateQuiz = () => {
  const [txtVal, setTxtVal] = useState();
  const [answers, setAnswers] = useState();
  const [ans, setAns] = useState();
  const { addData } = useContext(QuizContext);
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
    setAns(evt.target.id);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    let radio,
      ansCol = [];
    Object.keys(answers).forEach(function(key) {
      if (ans === key) radio = answers[key];
      ansCol.push(answers[key]);
    });

    const content = {
      question: txtVal,
      answers: ansCol,
      correctAns: radio
    };

    addData(content);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <input
            onChange={evt => setTxtVal(evt.target.value)}
            id="question"
            type="text"
            className="col 12 validate"
            required
          />
          <label htmlFor="question">I need a fun question here</label>
        </div>
      </div>
      <div className="row ">{boxes()}</div>
      <button className="btn waves-effect waves-light indigo" type="submit">
        Add
      </button>
    </form>
  );
};

export default CreateQuiz;
