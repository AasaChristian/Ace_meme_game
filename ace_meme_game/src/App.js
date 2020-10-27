import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import io from "socket.io-client"
import './App.css'
import Register from './components/register';
import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
import Board from './components/Board';
import Welcome from './components/welcome';
import JoinRoom from './components/joinRoom';

const socket = io.connect("http://localhost:5000/")

// const socket = io.connect("https://aasa-chat-app.herokuapp.com/")

console.log(socket, "socket")

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute
          exact path="/home"
          component={Board}
          socket={socket}
          />
          <Route
          exact path="/"
          render={props => <Welcome {...props}/>}/>
          <Route
          exact path="/register"
          render={props => <Register {...props} socket={socket}/>}
          />
          <Route
          exact path="/login"
          render={props => <Login {...props} socket={socket}/>}
          />
          <Route
          exact path="/joinRoom"
          render={props => <JoinRoom {...props} socket={socket}/>}
          />
          <header>
            <h1>Ace's Meme Game</h1>
          </header>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
////////////////////////////////////////////////
