import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import io from "socket.io-client"
import './App.css'
import Register from './components/register';
import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
import Board from './components/Board';
import Welcome from './components/welcome';


const socket = io.connect("http://localhost:5000/")

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
          <header>
            <h1>Ace's Meme Game</h1>
          </header>

          <div>
            {/* <ImageUploader
            socket={socket}
            /> */}
          </div>
          <section className={'thread-body'} translate='no'>
            <div className={'thread-box'}>
              {/* <Thread
                socket={socket}
              />
              <MessageForm
                socket={socket}
              />   */}
            </div>
          </section>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
////////////////////////////////////////////////
