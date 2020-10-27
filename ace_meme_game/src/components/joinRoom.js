import React, { useState } from 'react';



const Login = (props) =>{

const [room, setRoom] = useState('')

console.log(room, "room")

const handleChangeRoom = e => {
    setRoom(e.target.value)
}

const create = () => {
    props.socket.emit('roomName', {room: room})
}



return(
   <form onSubmit={create} className="loginForm">
        <input type="text" name="room" onChange={handleChangeRoom} placeholder="Room" />
        <button type="submit" className="loginBTN">Create Room</button>
</form> 

)


}

export default Login;