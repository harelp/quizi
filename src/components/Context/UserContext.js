import React, { useState, createContext } from 'react';
import pointsHelper from './pointsHelper';
export const UserContext = createContext();

export function UserProvider(props) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(undefined);
  const [points, setPoints] = useState(0);
  const [curName, setCurName] = useState();

  const secureUser = bool => {
    setIsAuth(bool);
  };

  const setUserData = val => {
    setUser(val);
  };

  const handlePoints = num => {
    const timerPoints = Math.round(pointsHelper(num) + 0.4);
    const totalPoints = points + timerPoints;
    setPoints(totalPoints);
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
