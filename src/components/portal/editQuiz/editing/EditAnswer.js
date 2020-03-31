import React from 'react';
import './editing.css';
const EditAnswer = props => {
  const handleAnswer = evt => {
    props.setAnswersObj({
      ...props.answersObj,
      [evt.target.id]: evt.target.value
    });
  };

  return (
    <div className="col l6 s12">
      <p>
        <label onClick={() => props.setstate(false)}>
          <input
            onChange={evt => {
              props.setCorrectAns(evt.target.id);
            }}
            name="groupOne"
            type="radio"
            id={props.answer}
            checked={props.correctAns === props.answer}
            required
            disabled={props.state}
          />
          <span>Correct Asnswer?</span>
        </label>
      </p>
      <input
        onChange={handleAnswer}
        id={props.val}
        type="text"
        className="col s12 validate"
        required
        value={props.answer}
      />
    </div>
  );
};

export default EditAnswer;
