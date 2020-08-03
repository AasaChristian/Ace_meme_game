import React from 'react';
import io from "socket.io-client"
import MessageForm from './Form';
import Thread from './Thread';

const socket = io.connect("http://localhost:5000/")

function App2() {
  return (
    <div className="App">
      <header>
        <h1>Ace's Meme Game</h1>
      </header>
        <section>
          <MessageForm
          socket={socket}
          />
        </section>
      <section>
      <Thread
      socket={socket}
      />
        
      </section>
    </div>
  );
}
export default App2;
////////////////////////////////////////////////
