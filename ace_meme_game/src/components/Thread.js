import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateThread } from "../actions";
import {
  AgentBar,
  Column,
  Title,
  Subtitle,
  Avatar,
} from "@livechat/ui-kit";

const localUser = localStorage.getItem("username");
const chatmessages = document.getElementsByClassName("scroll");

function Thread(props) {
  const [thread, setThread] = useState([]);

  props.socket.on("thread", (load) => {
    console.log("here");
    setThread(load);
    chatmessages[0].scrollTop = chatmessages[0].scrollHeight;
  });

  const clearThread = () => {
      props.socket.emit('delete')
      setThread([])
  }

  return (
    <div className="scroll">
        
      {thread.map((line, i) => (
        <div className="agentBarDiv" key={i}>
          <AgentBar
            style={
              line.user == localUser
                ? {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }
                : { display: "flex" }
            }
          >
            <Avatar imgUrl={line.image} />
            <div
              className={line.user == localUser ? "myMessage" : "yourMessage"}
            >
              <Column>
                <div className={"line"}>
                  <Title>{line.line}</Title>
                  <Subtitle>{line.user}</Subtitle>
                </div>
              </Column>
            </div>
          </AgentBar>
        </div>
      ))}
      <button
        onClick={clearThread}
        >Clear Thread</button>
    </div>
  );
}

// export default Thread
const MemoiizedThread = React.memo(Thread);
const mapStateToProps = (state) => {
  return {
    messageCount: state.messageCount,
  };
};

export default connect(mapStateToProps, { updateThread })(MemoiizedThread);
