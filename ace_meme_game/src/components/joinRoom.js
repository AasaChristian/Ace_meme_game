import React, { useEffect, useState } from 'react';



const JoinRoom = (props) =>{
    const userName = localStorage.getItem('username')
    const [room, setRoom] = useState('')
    const [existingRoom, setExistingRoom] = useState([])
// sends server user name to have connected rooms returned
    useEffect(() => {
        props.socket.emit("selectRoom", userName)
    },[])
// socket from server, retunrs all rooms user is part of.
props.socket.on("preRoom", preRooms => {
    setExistingRoom(preRooms)
})
// handle change for new room inpute form
const handleChangeRoom = e => {
    setRoom(e.target.value)
}
// click even to create a new room
const create = (e) => {
    e.preventDefault()
    props.socket.emit('roomName', {roomName: room, userName})
    props.history.push('/home')
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
               props.history.push('/home')
            
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