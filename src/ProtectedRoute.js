import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from './components/Context/UserContext';

const ProtectedRoute = ({ component: Component }, ...rest) => {
  const { isAuth } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuth) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
