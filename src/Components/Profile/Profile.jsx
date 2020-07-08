import React from 'react';
import style from './Profile.module.css';
import Post from "./Post/Post";
import Preloader from "../Common/Preloader";


function Profile(props) {

    if (!props.profile) {
        return <Preloader/>
    }

    let postItem = props.posts.map(post => <Post key={post.postId} post={post.post}/>);

    return (
        <div className={style.Profile}>
            <div className={style.profileArea}>

                <div className={style.avatar}>
                    {
                        props.profile.photos.large === null
                        ? <img src="https://zurlz.xyz/img/userb.png" alt="profile-ava" className={style.avatarImg}/>
                        : <img src={props.profile.photos.large} alt="profile-ava" className={style.avatarImg}/>
                    }
                </div>
                <div className={style.description}>
                    {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa dicta praesentium quos sunt!*/}
                    {/*Aliquam aut deserunt esse eum fugit, harum ipsum labore nobis perspiciatis possimus provident*/}
                    {/*tempore veniam, voluptatem!*/}
                    <h3>{props.profile.aboutMe}</h3>
                </div>
                <div className={style.posts}>
                    <div className={style.addPost}>
                        <textarea onChange={props.changePostText} value={props.newPostText}/>
                        <button onClick={props.addPost}>Отправить</button>
                    </div>
                    <div className={style.postsArea}>
                        {postItem}
                    </div>
                </div>

            </div>
        </div>
    );


}

export default Profile;
