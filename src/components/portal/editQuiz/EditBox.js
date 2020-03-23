import React from 'react';
import './editQuiz.css';

const EditBox = props => {
  return (
    <div className="col s4 center">
      <div className="card darken-1 QuizEdit">
        <div className="card-content editFlex">
          <i className=" material-icons">{props.icon}</i>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default EditBox;
