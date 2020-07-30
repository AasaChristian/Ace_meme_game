import React, {useState, useEffect} from 'react';
// import './App.css';
import io from "socket.io-client"
import MessageForm from './Form';
import Thread from './Thread';

let socket;

export const initiateSocket = () => {
  
  //  socket = io.connect("http://localhost:5000/")
  if (socket) 
  // console.log('connected')
  return socket
}

export const disconnectSocket = () => {
  // console.log("disconnected")
  if(socket){
    socket.disconnect()
  }
}




function App() {
  const [inRoom, setInRoom] = useState(false)
  const [messageCount, setMessageCount] = useState(0)
  const [message, setMessage] = useState([])
const [thread, setThread] = useState([])

console.log(thread)
useEffect(( )=> {
  if (socket){
    socket.on('thread', payload => {
      setThread([...thread, {
        message: payload.message,
        id:payload.id,
        user: payload.user}])
      
    })
    console.log("onThread")
  }
},[messageCount])


  const addMessage = (newMessage, user) => {
    const newMsg = {
      message: newMessage,
      user: user,
      id: Date.now()
    }
    setMessage([...message,  newMsg])
    setMessageCount(!messageCount)

    if (socket){
      socket.emit('new message', {
        message: newMsg.message,
        id: newMsg.id,
        user: newMsg.user
      })
    }
    
  }
  const connect = () => {
    setInRoom(!inRoom)
  }

  useEffect(() => {
    if (inRoom) 
    socket = initiateSocket()
  
    return() => {
      disconnectSocket()
    }
  },[inRoom])

  return (
    <div className="App">
      <header>
        <h1>Ace's Meme Game</h1>
      </header>

      <button type="submit" onClick={connect}>connect</button>
      <h1>{inRoom}</h1>

      <section>
        <MessageForm
        addMessage={addMessage}
        />
      </section>

      <section>
       {thread.map((line, i) => (
         <div key ={i}>

         
         <Thread
         
         id = {line.id}
         message = {line.message}
         user = {line.user}
         />
</div>

         
       ))}
        

      </section>


      
    </div>
  );
}

export default App;
