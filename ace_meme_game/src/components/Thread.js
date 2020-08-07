import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {updateThread} from '../actions'
import {AgentBar, Column, Title,Subtitle, Avatar, FixedWrapper, Message , MessageText, } from '@livechat/ui-kit'

function Thread(props){
    const [thread, setThread] = useState([])

    props.socket.on('thread', load => { 
        console.log("here") 
        console.log(load, "load")
        setThread(load)
    },)
    console.log(thread, "thread")

    return(
        <section>
        <div>
            {thread.map((line, i) => (
                <div key ={i}> 

<AgentBar>
  <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
  <Column>
        <div className={'line'}>
        <Title>{line.line}</Title>
    <Subtitle>{line.user}</Subtitle>
        </div>
  </Column>
</AgentBar>
</div>))}
</div>
        </section>
)}
const MemoiizedThread = React.memo(Thread)
const mapStateToProps = state => {
    return{
    messageCount: state.messageCount, 
    }
  };
  
  export default connect( 
    mapStateToProps, {updateThread}
  )(MemoiizedThread);