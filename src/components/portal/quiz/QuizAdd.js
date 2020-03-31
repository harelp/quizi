import React from 'react';
import './quiz.css';
const QuizAdd = props => {
  return (
    <div className="col s6 m4 l3 center" onClick={() => props.directToCreate()}>
      <div className="card darken-1 QuizAdd">
        <div className="card-content">
          <i className="large material-icons">add_circle</i>
        </div>
      </div>
    </div>
  );
};

export default QuizAdd;
