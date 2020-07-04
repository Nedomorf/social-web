import React from 'react';
import style from './Users.module.css';
// import User from "./User/User";
import * as axios from "axios";
import {NavLink} from "react-router-dom";

class Users extends React.Component {

    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=200').then(res => {
            this.props.setUsers(res.data.items);
            console.log(res.data.totalCount);
            console.log(res.data.totalCount / 10);
        })

    };


    // userItem = this.props.users.map(user =>
    //
    //     <div className={style.User}>
    //         <div className={style.userAvatar}>
    //             <img src={user.photos.small} alt="user-avatar" className={style.userAvatarImg}/>
    //         </div>
    //         <div className={style.userData}>
    //             <div>
    //                 <div className={style.userName}><h2>{user.name}</h2></div>
    //                 <div className={style.userDescription}>{user.status}</div>
    //             </div>
    //             <div className={style.isFollowedButton}>
    //                 {
    //                     user.followed
    //                         ? <button onClick={
    //                             () => {
    //                                 this.props.unfollowUser(user.id)
    //                             }
    //                         }>Unfollow</button>
    //
    //                         : <button onClick={
    //                             () => {
    //                                 this.props.followUser(user.id)
    //                             }
    //                         }>Follow</button>
    //                 }
    //             </div>
    //         </div>
    //     </div>
    // )


    render() {

        return (
            <div className={style.Users}>
                <div className={style.usersArea}>
                    <div className={style.pages}>123</div>
                    {
                        this.props.users.map(user =>

                            <div className={style.User} key={user.id}>
                                <div className={style.userAvatar}>

                                    <NavLink to={`/users/${user.id}`}>

                                    {
                                        user.photos.small === null
                                        ? <img src="https://zurlz.xyz/img/userb.png" alt="user-avatar" className={style.userAvatarImg}/>
                                        : <img src={user.photos.small} alt="user-avatar" className={style.userAvatarImg}/>
                                    }

                                    </NavLink>

                                    {/*<img src={user.photos.small} alt="user-avatar" className={style.userAvatarImg}/>*/}
                                </div>
                                <div className={style.userData}>
                                    <div>
                                        <NavLink to={`/users/${user.id}`} className={style.userName}><h2>{user.name}</h2></NavLink>
                                        <div className={style.userDescription}>{user.status}</div>
                                    </div>
                                    <div className={style.isFollowedButton}>
                                        {
                                            user.followed
                                                ? <button onClick={
                                                    () => {
                                                        this.props.unfollowUser(user.id)
                                                    }
                                                }>Unfollow</button>

                                                : <button onClick={
                                                    () => {
                                                        this.props.followUser(user.id)
                                                    }
                                                }>Follow</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );

    }


}

export default Users;
