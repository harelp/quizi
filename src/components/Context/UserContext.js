import React, { useState, createContext } from 'react';
export const UserContext = createContext();

export function UserProvider(props) {
  const [isAuth, setIsAuth] = useState(true);
  const [user, setUser] = useState(undefined);
  const [points, setPoints] = useState(null);
  const [curName, setCurName] = useState();

  const secureUser = bool => {
    setIsAuth(bool);
  };

  const setUserData = val => {
    setUser(val);
  };

  const handlePoints = () => {
    if (points === null) {
      setPoints(1);
    } else {
      setPoints(points + 1);
    }
  };

  const handleCurName = value => {
    setCurName(value);
  };

  return (
    <UserContext.Provider
      value={{
        isAuth,
        secureUser,
        user,
        setUserData,
        handlePoints,
        points,
        curName,
        handleCurName,
        setPoints
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
