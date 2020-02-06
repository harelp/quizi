import React, { useState } from 'react';
import CreateBox from './CreateBox';
const CreateQuiz = () => {
  const [txtVal, setTxtVal] = useState();
  const [ans, setAns] = useState();
  const [radChoice, setRadChoice] = useState();
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
    setTxtVal({ ...txtVal, [evt.target.name]: evt.target.value });
  };
  const handleAnswer = evt => {
    setAns(evt.target.id);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    let ansSel = '';
    Object.keys(txtVal).forEach(function(key) {
      if (ans === key) {
        setRadChoice(txtVal[key]);
      }
    });
  };
  console.log(radChoice);
  return (
    <div className="container">
      <div className="row">
        <div className="col s9">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input id="question" type="text" className="validate" />
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
        <div className="col s3">{}</div>
      </div>
    </div>
  );
};

export default CreateQuiz;
