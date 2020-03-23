import React, { useContext } from 'react';
import { EditQuizProvider } from './EditQuizContext';
import EditingLayout from './editing/EditingLayout';

const EditQuizLayout = props => {
  const RedirectQuiz = () => {
    props.history.push('/profile/quizzes');
  };
  return (
    <EditQuizProvider>
      <EditingLayout
        quizId={props.location.state.id}
        RedirectQuiz={RedirectQuiz}
      />
    </EditQuizProvider>
  );
};

export default EditQuizLayout;
