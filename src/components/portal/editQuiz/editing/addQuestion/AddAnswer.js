import React from 'react';

const AddAnswer = props => {
  const handleAnswer = evt => {
    props.setAnsObj({ ...props.ansObj, [evt.target.id]: evt.target.value });
  };
  return (
    <div className="col l6 s12">
      <p>
        <label>
          <input
            onChange={evt => {
              props.setCorrectAns(evt.target.value);
            }}
            name="groupOne"
            type="radio"
            required
            value={props.id}
          />
          <span>Correct Asnswer?</span>
        </label>
      </p>
      <input
        onChange={handleAnswer}
        id={props.id}
        type="text"
        className="col s12 validate"
        required
        value={props.answer}
      />
    </div>
  );
};

export default AddAnswer;
