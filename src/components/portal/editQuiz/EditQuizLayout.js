import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../../Context/QuizContext';
const EditQuizLayout = props => {
  const { userQuiz } = useContext(QuizContext);
  const [quiz, setQuiz] = useState(null);
  useEffect(() => {
    const filteQuiz = userQuiz.filter(quiz => {
      return quiz._id === props.location.state.id;
    });

    setQuiz(filteQuiz);
  }, []);

  console.log(props.location.state.id);
  console.log(quiz);
  return 'editquiz';
};

export default EditQuizLayout;
