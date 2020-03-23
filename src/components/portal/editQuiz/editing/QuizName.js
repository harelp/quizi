import React, { useContext } from 'react';
import { EditQuizContext } from '../EditQuizContext';
const QuizName = () => {
  const { currQuiz } = useContext(EditQuizContext);
  return (
    <div className="row">
      <div className="col s12">
        <h5>{currQuiz.name}</h5>
      </div>
    </div>
  );
};

export default QuizName;
