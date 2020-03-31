import React, { useState, createContext } from 'react';

export const EditQuizContext = createContext();

export function EditQuizProvider(props) {
  const [currQuiz, setCurrQuiz] = useState('');
  const [questionObj, setQuestionObj] = useState();

  return (
    <EditQuizContext.Provider
      value={{ currQuiz, setCurrQuiz, questionObj, setQuestionObj }}
    >
      {props.children}
    </EditQuizContext.Provider>
  );
}
