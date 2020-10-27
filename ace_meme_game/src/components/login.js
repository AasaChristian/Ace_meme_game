import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios'


const Login = (props) =>{

const [credentials, setCredentials] = useState({
    username: '',
    password: '',
});




const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
}


const login = e => {
    e.preventDefault()
    console.log( "Help Me!")
    props.socket.emit('login', { creds: credentials})
    props.history.push('/joinRoom')
}

props.socket.on('token', load => {
    console.log(load)
    localStorage.setItem('token', load.Token)
    localStorage.setItem('username', load.username)
})
return(
   <form onSubmit={login} className="loginForm">
    
        <input type="text" name="username" onChange={handleChange} placeholder="UserName" />
        <input type="text" name="password" onChange={handleChange} placeholder="PassWord"/>
        <button type="submit" className="loginBTN">LOGIN</button>
        {/* <Link onClick={e => (!credentials.username  || !room) ? e.preventDefault(): null} to={`/home?name=${credentials.username}&room=${room}` && {login}}>
        </Link> */}
</form> 

)


}

export default Login;