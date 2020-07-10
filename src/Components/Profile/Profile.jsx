import React from 'react';
import style from './Profile.module.css';
import Post from "./Post/Post";
import Preloader from "../Common/Preloader";

import ImagePalette from 'react-image-palette'
import IMAGE from '../../images/bg.jpg'

function Profile(props) {

    if (!props.profile) {
        let style = {marginTop: 'calc(' + 50 + 'vh' + ' ' + '+' + ' ' + (-10) + 'vh' + ')', scale: '2'};
        return <Preloader style={style}/>
    }

    let postItem = props.posts.map(post => <Post key={post.postId} post={post.post}/>);

    let imag = props.profile.photos.large
    window.imag = imag

    let imm = props.profile.photos.large

    return (

        <div className={style.Profile}>
            <div className={style.profileArea}>

                {/*{*/}
                {/*    props.profile.photos.large === null*/}
                {/*    ? <img src="https://zurlz.xyz/img/userb.png" alt="profile-ava" className={style.avatarImg}/>*/}
                {/*    : <img src={props.profile.photos.large} alt="profile-ava" className={style.avatarImg}/>*/}
                {/*    // ? IMG = `https://zurlz.xyz/img/userb.png`*/}
                {/*    // : IMG = props.profile.photos.large*/}
                {/*}*/}

                <ImagePalette image={IMAGE}>

                    {({backgroundColor, color, alternativeColor}) => (
                        <div style={{backgroundColor}}>
                              <div className={style.avatar}>
                                <img src={imm} alt="profile-ava" className={style.avatarImg}/>
                                <div style={{color}}><h1>{props.profile.fullName}</h1></div>
                            </div>
                        </div>
                    )}

                </ImagePalette>


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
