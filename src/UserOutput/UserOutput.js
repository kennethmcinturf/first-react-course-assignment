import React from 'react';
import './UserOutput.css';

const UserOutput = (props) =>{
    return(
        <div className="UserOut">
            <p>This is my first paragraph, written by {props.name}</p>
            <p>My teacher at codeup is {props.teacher}</p>
        </div>
    )
};

export default UserOutput;
