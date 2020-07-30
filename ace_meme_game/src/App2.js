import React, {useState, useEffect} from 'react';
// import './App.css';
import io from "socket.io-client"
// import MessageForm from './Form';
import Thread from './Thread';





const socket = io.connect("http://localhost:5000/")

function App2() {
  // const [inRoom, setInRoom] = useState(false)
  // const [messageCount, setMessageCount] = useState(0)
  // const [message, setMessage] = useState([])
  const [thread, setThread] = useState([])


  console.log("here")



  return (
    <div className="App">
      <header>
        <h1>Ace's Meme Game</h1>
      </header>
        <section>
          <MessageForm
          setThread={setThread}
          thread={thread}
          />
          
        </section>
      

      <section>
       {thread.map((line, i) => (
         <div key ={i}>
         <Thread
         i={i}
         message = {line.message}
         user = {line.user}
         />
</div>

         
       ))}
        

      </section>


      
    </div>
  );
}

export default App2;

function MessageForm(props){
  const [notes, setNotes] = useState([])


  socket.on('thread', payload => {
    props.setThread([...props.thread, {
    message: payload.message,
    user: payload.user}])       
})

const handleChanges = e => {
  e.preventDefault()
  setNotes(e.target.value)
  
}


const submitForm = e =>{
  e.preventDefault()
  socket.emit('new message', {
      message: notes,
      user: "new User"
    })

  setNotes([])
}


return(
  <div>
      <section>
          <form  onSubmit={submitForm}>
              <input
              id="notes"
              type="text"
              name="notes"
              value={notes}
              onChange={handleChanges}
              />
              <button type="submit">Submit</button>
          </form>
      </section>
  </div>
)



}

