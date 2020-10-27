import React, { useEffect, useState } from 'react';



const JoinRoom = (props) =>{
    const userName = localStorage.getItem('username')
    useEffect(() => {
        props.socket.emit("selectRoom", userName)
    },[])

const [room, setRoom] = useState('')
const [existingRoom, setExistingRoom] = useState([])

props.socket.on("preRoom", preRooms => {
    setExistingRoom(preRooms)
})
console.log(room, "room")

const handleChangeRoom = e => {
    setRoom(e.target.value)
}

const create = (e) => {
    e.preventDefault()
    props.socket.emit('roomName', {roomName: room, userName})
}





return(
    <div>
   <form onSubmit={create} className="loginForm">
        <input type="text" name="room" onChange={handleChangeRoom} placeholder="Room" />
        <button type="submit" className="loginBTN">Create Room</button>
</form> 
<div>
    {existingRoom.map(rooms => {
        return(
            <div key ={rooms.id}>
           <button onClick={nun => {
               props.socket.emit("selectedRoomName", (rooms.name))
            
            } }
           ><p>{rooms.name}</p></button>
           </div>
        )
    })}
</div>
    </div>


)


}

export default JoinRoom;