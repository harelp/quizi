import React, { useState, useContext } from 'react';
import CreateBox from './CreateBox';
import { QuizContext } from '../Context/QuizContext';

const CreateQuiz = () => {
  const [txtVal, setTxtVal] = useState();
  const [answers, setAnswers] = useState();
  const [ans, setAns] = useState();
  const { addData } = useContext(QuizContext);
  let arr = [];

  const boxes = () => {
    for (let index = 0; index < 4; index++) {
      arr.push(
        <div className="col s6" key={index}>
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
    <div className="container">
      <div className="row">
        <div className="col s12">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                onChange={evt => setTxtVal(evt.target.value)}
                id="question"
                type="text"
                className="validate"
                required
              />
            </div>
            <div className="row">{boxes()}</div>
            <button
              className="btn waves-effect waves-light indigo"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
        <div className="col s3">lol</div>
      </div>
    </div>
  );
};

export default CreateQuiz;
