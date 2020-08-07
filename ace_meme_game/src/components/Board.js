import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import io from "socket.io-client"
import MessageForm from './Form';
import Thread from './Thread';
import ImageUploader from './image';
import Register from './register';
import Login from './login';
import PrivateRoute from './PrivateRoute';


function Board(props) {
  return (
<div>
    <header>
    <h1>Ace's Meme Game</h1>
  </header>

  <div>
    <ImageUploader
    socket={props.socket}
    />
  </div>
  <section className={'thread-body'} translate='no'>
    <div className={'thread-box'}>
      <Thread
        socket={props.socket}
      />
      <MessageForm
        socket={props.socket}
      />  
    </div>
  </section>
  </div>
  );
}
export default Board;
////////////////////////////////////////////////
