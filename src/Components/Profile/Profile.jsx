import React from 'react';
import style from './Profile.module.css';
import Post from "./Post/Post";
import Preloader from "../Common/Preloader";

import ImagePalette from 'react-image-palette'
import IMAGE from '../../images/bg.jpg'
import ProfileStatus from "./ProfileStatus";

function Profile(props) {

    if (!props.profile) {
        let style = {marginTop: `calc(50vh - 10vh)`, scale: '2'};
        return <Preloader style={style}/>
    }

    let postItem = props.posts.map(post => <Post key={post.postId} post={post.post}/>);

    let imag = props.profile.photos.large
    window.imag = imag

    // let imm = props.profile.photos.large

    console.log(props.profile)

    return (

        <div className={style.Profile}>
            <div className={style.profileArea}>

                {/*<div className={style.avatar}>*/}

                {/*    {*/}
                {/*        props.profile.photos.large === null*/}
                {/*            ? <img src="https://zurlz.xyz/img/userb.png" alt="profile-ava" className={style.avatarImg}/>*/}
                {/*            : <img src={props.profile.photos.large} alt="profile-ava" className={style.avatarImg}/>*/}
                {/*        // ? IMG = `https://zurlz.xyz/img/userb.png`*/}
                {/*        // : IMG = props.profile.photos.large*/}
                {/*    }*/}

                {/*    <div><h1>{props.profile.fullName}</h1></div>*/}

                {/*</div>*/}

                {/* finding a dominant color */}

                {
                    props.isFetching
                        ? <div style={{
                            marginBottom: `33vh`,
                            height: `38vh`,
                            display: `flex`,
                            alignItems: `center`,
                            justifyContent: `center`
                        }}><Preloader style={{transform: `scale(2)`}}/></div>
                        : <ImagePalette image={IMAGE}>

                            {({backgroundColor, color, alternativeColor}) => (
                                <div>
                                    <div style={{
                                        backgroundColor,
                                        height: `35vh`,
                                        position: `relative`,
                                        filter: `blur(20px)`
                                    }}>
                                    </div>
                                    <div className={style.avatar}>
                                        {
                                            props.profile.photos.large === null
                                                ?
                                                <img
                                                    src="http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png"
                                                    alt="profile-ava"
                                                    className={style.avatarImg} style={{borderColor: color}}/>
                                                : <img src={props.profile.photos.large} alt="profile-ava"
                                                       className={style.avatarImg} style={{
                                                    borderColor: color,
                                                    borderStyle: `solid`,
                                                    borderRadius: `100%`
                                                }}/>
                                        }
                                        <div style={{color}}><h1>{props.profile.fullName}</h1></div>
                                    </div>
                                    <div className={style.description} style={{color}}>
                                        {/*<h3>{props.profile.aboutMe}</h3>*/}
                                        <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                                    </div>
                                </div>
                            )}

                        </ImagePalette>

                }


                <div className={style.posts} style={{marginTop: `-35vh`}}>
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
