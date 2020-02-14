import React from 'react';

const ViewBox = props => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <p>{props.question}</p>
        <p>Answers:</p>
        <div className="row">
          {props.answers.map(el => {
            return (
              <div className="col s2" key={el}>
                {el}
              </div>
            );
          })}
        </div>
        <p>Correct Answer: {props.correctAns}</p>
      </div>
    </div>
  );
};

export default ViewBox;
