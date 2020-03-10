import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { QuizProvider } from './components/Context/QuizContext';
import { UserProvider } from './components/Context/UserContext';
import ProtectedRoute from './ProtectedRoute';
import Nav from './components/navbar/Nav';
import QuizList from './components/quizList/QuizList';
import GameLayout from './components/Game/GameLayout';
import Invite from './components/Game/Invite';
import Register from './components/user/Register';
import Login from './components/user/Login';
import ResetLayout from './components/user/resetPass/ResetLayout';
import PortalLayout from './components/portal/PortalLayout';
import CreateLayout from './components/portal/createQuiz/CreateLayout';
import EditUserLayout from './components/portal/editUser/EditUserLayout';

toast.configure({
  position: 'top-right',
  autoClose: 1000,
  className: 'mt-2',
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false
});
class App extends Component {
  render() {
    return (
      <UserProvider>
        <QuizProvider>
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/" component={QuizList} />

              <Route exact path="/play" component={GameLayout} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/reset" component={ResetLayout} />
              <Route exact path="/invite" component={Invite} />
              <ProtectedRoute exact path="/profile" component={PortalLayout} />
              <ProtectedRoute
                exact
                path="/profile/create"
                component={CreateLayout}
              />
              <Route
                exact
                path="/profile/editUser"
                component={EditUserLayout}
              />
              {/* <ProtectedRoute
                exact
                path="/profile/editUser"
                component={EditUserLayout}
              /> */}
            </Switch>
          </Router>
        </QuizProvider>
      </UserProvider>
    );
  }
}

export default App;
