import React from 'react';
import style from './Profile.module.css';
import avatar from '../../git-profile.jpg';

function Profile() {
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
                        <textarea/>
                        <button>Отправить</button>
                    </div>
                    <div className={style.postsArea}>posts</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
