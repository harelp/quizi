import React, { createContext, useState } from 'react';
import axios from 'axios';
export const CqContext = createContext();

//const API_URL = 'http://localhost:5000/api/v1';
const API_URL = 'http://localhost:5000/api/v1';

export const CqProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState();
  const [quizName, setQuizName] = useState({ value: '' });
  const [quizDesc, setQuizDesc] = useState({ value: '' });

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

  const postData = () => {
    console.log('cool');
    const DATATOPOST = {
      name: details.name.value,
      description: details.description.value,
      userId: details.userId,
      content: data
    };
    axios
      .post(`${API_URL}/quizzes`, DATATOPOST)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  // const postData = async () => {
  //   const DATATOPOST = {
  //     name: details.name.value,
  //     description: details.description.value,
  //     userId: 'details.userId',
  //     content: data
  //   };

  //   try {
  //     const response = await axios.post(`${API_URL}/quizzes`, DATATOPOST);

  //     // localStorage.setItem('quiziToken', response.data.token);
  //     console.log(response.data);
  //     // secureUser(true);
  //     // props.history.push('/profile');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <CqContext.Provider
      value={{
        data,
        handleData,
        handleDetails,
        postData,
        handleQuizName,
        handleQuizDesc,
        quizName,
        quizDesc
      }}
    >
      {children}
    </CqContext.Provider>
  );
};
