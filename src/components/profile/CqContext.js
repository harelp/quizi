import React, { createContext, useState } from 'react';

export const CqContext = createContext();

export const CqProvider = ({ children }) => {
  const [data, setData] = useState('Harel');
  return <CqContext.Provider value={{ data }}>{children}</CqContext.Provider>;
};
