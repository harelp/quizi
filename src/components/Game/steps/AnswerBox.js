import React from 'react';
import './AnswerBox.css';
export default function AnswerBox(props) {
  return (
    <div className="col l6 s12" style={{ marginTop: '15px' }}>
      <button
        className="waves-effect AnswerBox"
        onClick={props.onAnswer}
        disabled={props.divController !== null}
      >
        {props.answer}
      </button>
    </div>
  );
}
