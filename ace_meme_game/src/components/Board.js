import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import io from "socket.io-client";
import MessageForm from "./Form";
import Thread from "./Thread";
import ImageUploader from "./image";

const userName = localStorage.getItem("username");
function Board(props) {


  const logout = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    props.history.push('/')
  }
  return (
    <div>
      <div className="welcome">
        <p>Welcome {userName}</p>
        <button
        onClick={logout}
        className="logoutBTN"
        >LogOut</button>
      </div>

      <div>
        <ImageUploader socket={props.socket} />
      </div>
      <section className={"thread-body"}>
        <div className={"thread-box"}>
          <Thread socket={props.socket} />
          <MessageForm socket={props.socket} />
        </div>
      </section>
    </div>
  );
}
export default Board;
////////////////////////////////////////////////
