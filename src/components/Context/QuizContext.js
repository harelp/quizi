import React, { useState, createContext } from 'react';
import axios from 'axios';
import shuffleHelper from './shuffleHelper';
export const QuizContext = createContext();

export function QuizProvider(props) {
  const [quiz, setQuiz] = useState(null);
  const [content, setContent] = useState(null);
  const [userQuiz, setUserQuiz] = useState(null);

  const getQuiz = async id => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/quizzes/${id}`
      );
      setQuiz(response.data);
      const suffled = shuffleHelper(response.data.content);
      setContent(suffled);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <QuizContext.Provider
      value={{
        quiz,
        content,
        getQuiz,
        userQuiz,
        setUserQuiz,
        setContent,
        setQuiz
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
}
