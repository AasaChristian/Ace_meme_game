import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {updateThread} from './actions'

function Thread(props){
    const [thread, setThread] = useState([])

    let state = 0

    props.socket.on('count', i => {
         state = state +1
    
    })

    useEffect(() => { 
        props.socket.on('thread', load => {  
           
            setThread(load)
            
        },)}, [props.socket])


    return(
        <div>
            {thread.map((line, i) => (
                <div key ={i}> 

            <p>{line.message}</p>

                </div>

            ))}
        </div>
        
    )

}
const MemoiizedThread = React.memo(Thread)


const mapStateToProps = state => {
    return{
    messageCount: state.messageCount, 
    }
  };
  
  export default connect( 
    mapStateToProps, {updateThread}
  )(MemoiizedThread);