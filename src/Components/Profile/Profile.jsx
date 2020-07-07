import React from 'react';
import style from './Profile.module.css';
import avatar from '../../images/git-profile.jpg';
import Post from "./Post/Post";


function Profile(props) {

    let postItem = props.posts.map(post =>  <Post key={post.postId} post={post.post}/> ).reverse()

    let changePostText = (e) => {
        let newPostText = e.target.value;
        props.changePostText(newPostText);
    };

    let addPost = () => {
        props.addPost();
    };

    return (
        <div className={style.Profile}>
            <div className={style.profileArea}>
                <div className={style.avatar}>
                    <img src={avatar} alt="profile-ava" className={style.avatarImg}/>
                </div>
                <div className={style.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa dicta praesentium quos sunt!
                    Aliquam aut deserunt esse eum fugit, harum ipsum labore nobis perspiciatis possimus provident
                    tempore veniam, voluptatem!
                </div>
                <div className={style.posts}>
                    <div className={style.addPost}>
                        <textarea onChange={changePostText} value={props.newPostText}/>
                        <button onClick={addPost}>Отправить</button>
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
