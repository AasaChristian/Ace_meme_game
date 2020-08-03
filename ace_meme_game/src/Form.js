import React, {useState} from 'react';
import { connect } from "react-redux";
import {updateThread} from './actions'




function MessageForm(props){
    const [notes, setNotes] = useState([])

const handleChanges = e => {
    e.preventDefault()
    setNotes(e.target.value)   }

const submitForm = e =>{
    e.preventDefault()
    props.socket.emit('new message', {
        message: notes,
        user: "new User",
        id: Date.now()
      })
    setNotes([])
    props.socket.emit('state', 1)
    }

return(
    <div>
        <section>
            <form  onSubmit={submitForm} >
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
const mapStateToProps = state => {
    return{
    messageCount: state.messageCount, 
    }
  };
  
  export default connect( 
    mapStateToProps, {updateThread}
  )(MessageForm);