import React, { createContext, useState } from 'react';
import axios from 'axios';
export const CqContext = createContext();

const API_URL = 'http://localhost:5000/api/v1';

export const CqProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState();

  const handleData = newData => {
    // console.log('got it');
    // const d = data;
    // d.push(newData);
    // setNewData(d);
    // console.log('new data added');
    // console.log(newData);
    setData([...data, newData]);
  };

  const handleDetails = data => {
    setDetails(data);
  };

  const postData = () => {
    const DATATOPOST = {
      name: details.name,
      description: details.description,
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

  return (
    <CqContext.Provider value={{ data, handleData, handleDetails, postData }}>
      {children}
    </CqContext.Provider>
  );
};
