import React, { Component } from 'react';
import { QuizProvider } from './components/Context/QuizContext';
import { UserProvider } from './components/Context/UserContext';
import Nav from './components/navbar/Nav';
import QuizList from './components/quizList/QuizList';
import GameLayout from './components/Game/GameLayout';
import Invite from './components/Game/Invite';
import Profile from './components/profile/Profile';
import Register from './components/user/Register';
import Login from './components/user/Login';
import CreateQuiz from './components/profile/CreateQuiz';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <UserProvider>
        <QuizProvider>
          <Router>
            <Nav />
            <Switch>
              <Route path="/" exact component={QuizList} />
              <Route path="/profile" component={Profile} />
              <Route path="/play" component={GameLayout} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/Profile" component={Profile} />
              <Route path="/invite" component={Invite} />
              <Route path="/create" component={CreateQuiz} />
            </Switch>
          </Router>
        </QuizProvider>
      </UserProvider>
    );
  }
}

export default App;
