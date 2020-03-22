import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {

const style1 = {
        color: 'black'
       }
 const style2 = {
    color: 'red'
 }      

return(
    <div className = "UserOutput">
        <p>1 paragraph for <b style ={style1}>{props.userName}</b></p>
        <p>2 paragraph for <b style ={style2}>{props.userName}</b></p>
    </div>
);
}

export default userOutput;