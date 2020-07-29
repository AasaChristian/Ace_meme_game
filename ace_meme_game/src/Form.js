import React, {useState} from 'react';

function MessageForm(props){
    const [notes, setNotes] = useState([])

const handleChanges = e => {
    e.preventDefault()
    setNotes(e.target.value)
    
}

const submitForm = e =>{
    e.preventDefault()
    props.addMessage(notes, "New User")
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