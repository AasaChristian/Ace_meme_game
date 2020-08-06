import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import io from "socket.io-client"
import MessageForm from './components/Form';
import Thread from './components/Thread';
import ImageUploader from './components/image';
import './App.css'

const socket = io.connect("http://localhost:5000/")

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <header>
            <h1>Ace's Meme Game</h1>
          </header>
          <div>
            <ImageUploader
            socket={socket}
            />
          </div>
          <section className={'thread-body'} translate='no'>
            <div className={'thread-box'}>
              <Thread
                socket={socket}
              />
              <MessageForm
                socket={socket}
              />  
            </div>
          </section>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
////////////////////////////////////////////////
