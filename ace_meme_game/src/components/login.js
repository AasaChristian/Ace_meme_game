import React, { useState } from 'react';


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
    console.log(props.socket, "props socket")
    props.socket.emit('login', credentials)
    // console.log(log, "log")
    props.history.push('/home')
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
</form> 
)


}

export default Login;