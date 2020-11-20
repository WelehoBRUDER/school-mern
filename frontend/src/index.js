import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import App from './pages/App';
import GameView from './pages/GameView';
import GameAdd from './pages/GameAdd';
import GameEdit from './pages/GameEdit';
import GameDelete from './pages/GameDelete';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './styling/header.css';
import './styling/game.css';
import './styling/error.css';
import './styling/addgame.css';
import './styling/delete.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/view/:id" exact component={GameView} />
        <Route path="/add-game" exact component={GameAdd} />
        <Route path="/edit-game/:id" exact component={GameEdit} />
        <Route path="/delete-game/:id" exact component={GameDelete} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
