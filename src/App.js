import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { QuizProvider } from './components/Context/QuizContext';
import { UserProvider } from './components/Context/UserContext';
import ProtectedRoute from './ProtectedRoute';
import Nav from './components/navbar/Nav';
import QuizList from './components/quizList/QuizList';
import GameLayout from './components/Game/GameLayout';
import Invite from './components/Game/Invite';
import Profile from './components/profile/Profile';
import Register from './components/user/Register';
import Login from './components/user/Login';
import CreateLayout from './components/profile/CreateLayout';

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
              <Route exact path="/invite" component={Invite} />
              <ProtectedRoute exact path="/profile" component={Profile} />
              <ProtectedRoute
                exact
                path="/profile/create"
                component={CreateLayout}
              />
            </Switch>
          </Router>
        </QuizProvider>
      </UserProvider>
    );
  }
}

export default App;
