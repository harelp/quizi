import React, { useContext } from 'react';
import { EditQuizContext } from '../EditQuizContext';
const QuizName = () => {
  const { currQuiz } = useContext(EditQuizContext);
  return (
    <div className="row">
      <div className="col s12">
        <h5>{currQuiz.name}</h5>
      </div>
      <div className="col s12 left-align">
        <h6>
          <strong>Invite friends:</strong> quiz.com/invite?id={currQuiz._id}
        </h6>
      </div>
    </div>
  );
};

export default QuizName;
