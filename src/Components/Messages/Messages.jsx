import React from 'react';
import style from './Messages.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return (
        <div className={style.Message}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores doloribus eaque expedita hic
            laudantium magnam nihil officia perferendis possimus, quam quasi quia quisquam quod quos ratione sapiente
            sit totam.
        </div>
    );
}

const User = (props) => {
    return (
        <NavLink to='/' className={style.userName}>
            <h3>User Name</h3>
        </NavLink>
    );
}

function Messages() {
    return (
        <div className={style.Messages}>
            <div className={style.messagesArea}>
                <div className={style.Users}>
                    <User/>
                    <User/>
                    <User/>
                </div>
                <div className={style.userMessages}>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
            </div>
        </div>
    );
}

export default Messages;
