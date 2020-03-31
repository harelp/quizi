import React from 'react';
const EditQuestion = props => {
  return (
    <div className="input-field col s12">
      {props.questionTag && <p>Question: </p>}
      <input
        onChange={evt => props.setQuestionEdit(evt.target.value)}
        id="question"
        type="text"
        className="col 12 validate"
        required
        value={props.question}
      />
    </div>
  );
};

export default EditQuestion;
