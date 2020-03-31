import React, { createContext, useState } from 'react';
// import axios from 'axios';
export const CqContext = createContext();

// const API_URL = 'http://localhost:5000/api/v1';

export const CqProvider = props => {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState();
  const [quizName, setQuizName] = useState({ value: '' });
  const [quizDesc, setQuizDesc] = useState({ value: '' });
  const [quizCheck, setQuizCheck] = useState(false);

  /// handle form 1 state
  const handleQuizName = evt => {
    setQuizName({ value: evt.target.value });
  };

  const handleQuizDesc = evt => {
    setQuizDesc({ value: evt.target.value });
  };

  /// Post data Functions
  const handleData = newData => {
    setData([...data, newData]);
  };

  const handleDetails = data => {
    setDetails(data);
  };

  return (
    <CqContext.Provider
      value={{
        details,
        data,
        handleData,
        handleDetails,
        handleQuizName,
        handleQuizDesc,
        quizName,
        quizDesc,
        quizCheck,
        setQuizCheck
      }}
    >
      {props.children}
    </CqContext.Provider>
  );
};
