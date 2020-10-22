import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios'


const Login = (props) =>{

const [credentials, setCredentials] = useState({
    username: '',
    password: '',
});
const [room, setRoom] = useState('')

console.log(room, "room")

const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
}

const handleChangeRoom = e => {
    setRoom(e.target.value)
}
const login = e => {
    e.preventDefault()
    console.log( "Help Me!")
    // props.socket.emit('login', credentials)
    // console.log(log, "log")
    Axios
    .post('http://localhost:5000/api/login', credentials)
    .then(res => {
        // localStorage.setItem('token', res.data.payload);
        console.log(res, "Token")
    })
    .catch(err => console.log(err))

    // props.history.push('/home')
}

props.socket.on('token', load => {
    console.log(load)
    // localStorage.setItem('token', load.Token)
    localStorage.setItem('username', load.username)
})
return(
   <form onSubmit={login} className="loginForm">
        <input type="text" name="room" onChange={handleChangeRoom} placeholder="Room" />
    
        <input type="text" name="username" onChange={handleChange} placeholder="UserName" />
        <input type="text" name="password" onChange={handleChange} placeholder="PassWord"/>
        <button type="submit" className="loginBTN">LOGIN</button>
        {/* <Link onClick={e => (!credentials.username  || !room) ? e.preventDefault(): null} to={`/home?name=${credentials.username}&room=${room}` && {login}}>
        </Link> */}
</form> 

)


}

export default Login;