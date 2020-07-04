import style from "./User.module.css";
import React from "react";

const User = (props) => {

    return (
        <div className={style.User}>
            <div className={style.userAvatar}>
                <img src={props.photos} alt="user-avatar" className={style.userAvatarImg}/>
            </div>
            <div className={style.userData}>
                <div>
                    <div className={style.userName}><h2>{props.name}</h2></div>
                    <div className={style.userDescription}>{props.status}</div>
                </div>
                <div className={style.isFollowedButton}>
                    {
                        props.followed
                            ? <button onClick={
                                () => {
                                    props.unfollowUser(props.id)
                                }
                            }>Unfollow</button>

                            : <button onClick={
                                () => {
                                    props.followUser(props.id)
                                }
                            }>Follow</button>
                    }
                </div>

            </div>
        </div>
    );
}

export default User;