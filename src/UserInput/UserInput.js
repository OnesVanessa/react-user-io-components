import React from 'react';
import './UserInput.css';

const style = {
    fontWeight: 'bold'
   }

const userInput = (props) => {
    return (
        <div className ="UserInput">
            <input type="text" style={style} onChange={props.changed} value ={props.userName}></input>
        </div>
        
    )
}

export default userInput;