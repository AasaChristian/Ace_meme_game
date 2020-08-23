import React, { useState, useRef } from 'react';


const Register = (props) =>{
    const uploadedImage = useRef(null)
    // let aviImg;



const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    avatar: ''
});



const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
// const handleImage = e => {
//     const [file] = e.target.files;
//     if (file) {
//         const reader = new FileReader();
//         const {current} = uploadedImage;
//         current.file = file;
//         console.log(file, "file")

//         reader.onload = (e) => {
//             current.src = e.target.result;
//             aviImg = uploadedImage.current.src
//             setCredentials({...credentials, avatar: aviImg})

            
//         }
//         reader.readAsDataURL(file)  
//     }
// }
console.log(credentials)

const register = e => {
    e.preventDefault()
    props.socket.emit('register', credentials)
    props.history.push('/home')
}


props.socket.on('token', load => {
    localStorage.setItem('token', load.Token)
    localStorage.setItem('username', load.username)

})




return(
    <div>
   <form onSubmit={register} className="loginForm">
        <input type="text" name="username" onChange={handleChange} placeholder="UserName" />
        <input type="text" name="password" onChange={handleChange} placeholder="PassWord"/>
        {/* <input className='imgInpt' type="file" accept="image/*" onChange={handleImage} /> */}
        <button type="submit" className="loginBTN">CREATE ACCOUNT</button>
</form> 

<img
            ref={uploadedImage}
            style={{display:"none"}}
            alt='use avatar'
            />

</div>
)


}

export default Register;