import React, {useState} from 'react';
import io from "socket.io-client"



function MessageForm(props){
    const [notes, setNotes] = useState([])

const handleChanges = e => {
    e.preventDefault()
    setNotes(e.target.value)
    
}


const submitForm = e =>{
    e.preventDefault()
    props.socket.emit('new message', {
        message: notes,
        user: "new User"
      })

    setNotes([])
}





return(
    <div>
        <section>
            <form  onSubmit={submitForm}>
                <input
                id="notes"
                type="text"
                name="notes"
                value={notes}
                onChange={handleChanges}
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    </div>
)



}
export default MessageForm;