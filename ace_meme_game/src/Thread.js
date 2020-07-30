import React from 'react';

function Thread(props){
    return(
        // <div key={props.user}>
        //     <h3 key={props.user} >{props.message}</h3>

        // </div>

        <div key={props.i}>
            <h3>{props.message}</h3>
        </div>
    )

}export default Thread