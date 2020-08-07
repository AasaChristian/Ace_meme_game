import React, { useState } from 'react';


const Register = (props) =>{

const [credentials, setCredentials] = useState({
    username: '',
    password: '',
});

const [isFetching, setIsFetching] = useState(false)

const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
console.log(credentials)

const register = e => {
    e.preventDefault();
    setIsFetching(true);
    props.socket.emit('register', credentials)
}


props.socket.on('token', load => {
    localStorage.setItem('token', load.Token)
    localStorage.setItem('username', load.username)

})
return(
   <form onSubmit={register}>
        <input type="text" name="username" onChange={handleChange} placeholder="username" />
        <input type="text" name="password" onChange={handleChange} placeholder="password"/>
        <button type="submit">CREATE ACCOUNT</button>
</form> 
)


}

export default Register;