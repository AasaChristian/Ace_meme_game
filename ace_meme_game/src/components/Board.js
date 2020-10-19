import React from "react";
import MessageForm from "./Form";
import Thread from "./Thread";

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
        <div className="logoutBTN">
          <button
        onClick={logout}
        >LogOut</button>
        </div>
        
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
