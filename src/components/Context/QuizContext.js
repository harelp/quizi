import React, { useState, createContext } from 'react';
import axios from 'axios';
export const QuizContext = createContext();

export function QuizProvider(props) {
  const [quiz, setQuiz] = useState(null);
  const [content, setContent] = useState(null);
  const [newData, setNewData] = useState([]);

  const getQuiz = async id => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/quizzes/${id}`
      );
      setQuiz(response.data);
      setContent(response.data.content);
      console.log('im here');
    } catch (err) {
      console.log(err);
    }
  };

  const addData = data => {
    const d = newData;
    d.push(data);
    setNewData(d);
    console.log('new data added');
    console.log(newData);
  };

  return (
    <QuizContext.Provider value={{ quiz, content, getQuiz, newData }}>
      {props.children}
    </QuizContext.Provider>
  );
}
