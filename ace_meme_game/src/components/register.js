import React, { useState, useRef } from 'react';


const Register = (props) =>{
    const uploadedImage = useRef(null)
    let aviImg;

    const handleImage = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const {current} = uploadedImage;
            current.file = file;
            console.log(file, "file")

            reader.onload = (e) => {
                current.src = e.target.result;
                aviImg = uploadedImage.current.src

                
            }
            reader.readAsDataURL(file)  
        }
    }

const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    avatar: ( aviImg ? aviImg : '')
});

const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
console.log(credentials)

const register = e => {
    e.preventDefault();
    props.socket.emit('register', credentials)
}


props.socket.on('token', load => {
    localStorage.setItem('token', load.Token)
    localStorage.setItem('username', load.username)
    localStorage.setItem('avatar', load.avatar )

})




return(
    <div>
   <form onSubmit={register}>
        <input type="text" name="username" onChange={handleChange} placeholder="username" />
        <input type="text" name="password" onChange={handleChange} placeholder="password"/>
        <input type="file" accept="image/*" onChange={handleImage}/>
        <button type="submit">CREATE ACCOUNT</button>
</form> 

<img
            ref={uploadedImage}
            style={{display:"none"}}
            />

</div>
)


}

export default Register;