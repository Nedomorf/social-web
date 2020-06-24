import React from 'react';
import style from './Users.module.css';
import userAvatar from '../../git-profile.jpg'

const User = (props) => {
    return (
        <div className={style.User}>
            <div className={style.userAvatar}>
                <img src={userAvatar} alt="user-avatar" className={style.userAvatarImg}/>
            </div>
            <div className={style.userData}>
                <div className={style.userName}><h2>User Name</h2></div>
                <div className={style.userDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat modi neque quos totam velit.
                    Aliquid at autem consequatur doloremque ducimus earum harum id minus nam, numquam, qui quis totam
                    voluptates?
                </div>
            </div>
        </div>
    );
}

function Users() {
    return (
        <div className={style.Users}>
            <div className={style.usersArea}>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
            </div>
        </div>
    );
}

export default Users;
