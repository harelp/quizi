import React, { useState, createContext } from 'react';
export const UserContext = createContext();

export function UserProvider(props) {
  const [isAuth, setIsAuth] = useState(false);

  const secureUser = bool => {
    setIsAuth(bool);
  };

  return (
    <UserContext.Provider value={{ isAuth, secureUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
