import React, { useEffect, useState } from "react";
import MessageForm from "./Form";
import Thread from "./Thread";
import queryString from 'query-string'



const userName = localStorage.getItem("username");
function Board(props) {

  const [room, setRoom] = useState('') 


  useEffect(() => {
    const data = queryString.parse(props.location.search)

    console.log(data, "data")

    setRoom(data.room)

    console.log(data.room, "room")

    props.socket.emit()

    return () => {
      props.socket.emit('disconnect')

      props.socket.off()
    }


  },[props.location.search])


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
