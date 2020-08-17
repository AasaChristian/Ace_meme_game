import React, {useState, useRef} from 'react';

function ImageUploader(props){

    const [meme, setMeme] = useState()

    const uploadedImage = useRef(null)

    const handleImage = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const {current} = uploadedImage;
            current.file = file;
            console.log(file, "file")

            reader.onload = (e) => {
                current.src = e.target.result;

                props.socket.emit('sent_meme', uploadedImage.current.src) 
            }
            reader.readAsDataURL(file)  
        }
    }
    props.socket.on('returned_meme', (photo) => {
        console.log(photo, "photo")
        setMeme(photo)
    })

    console.log(meme, "meme")
    console.log(uploadedImage, "uploadedImage")
    

    return(
        <div>
            <input type="file" accept="image/*" onChange={handleImage}
            />
            <div className='imgCont'>
            <img 
            alt='use avatar'
            src={meme}
            />
            </div>
            <img
            alt='use avatar' 
            ref={uploadedImage}
            style={{display:'none'}}
            />
            

        </div>
    )

} export default ImageUploader