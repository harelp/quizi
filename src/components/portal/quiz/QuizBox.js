import React from 'react';
const QuizBox = props => {
  return (
    <div
      onClick={() => props.editQuiz(props.data._id)}
      className="col s6 m4 l3 center"
    >
      <div className="card indigo darken-1 QuizBox">
        <div className="card-content white-text">
          <h4>{props.counter}</h4>
          <p>
            <strong>{props.data.name.substring(0, 10)}</strong>
            ...
          </p>
        </div>
      </div>
    </div>
    // <div onClick={() => props.editQuiz()} className="col s6 m4 l3 center">
    //   <div className="card indigo darken-1 QuizBox">
    //     <div className="card-content white-text">
    //       <h4>{props.counter}</h4>
    //       <p>
    //         <strong>{props.data.name.substring(0, 10)}</strong>
    //         ...
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default QuizBox;
