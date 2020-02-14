import React, { useState, createContext } from 'react';
export const UserContext = createContext();

export function UserProvider(props) {
  const [isAuth, setIsAuth] = useState(true);
  const [user, setUser] = useState(true);
  const secureUser = bool => {
    setIsAuth(bool);
  };

  const setUserData = val => {
    setUser(val);
  };

  return (
    <UserContext.Provider value={{ isAuth, secureUser, user, setUserData }}>
      {props.children}
    </UserContext.Provider>
  );
}
