import React, {useEffect, useState} from 'react';
import style from './Profile.module.css';
import Post from "./Post/Post";
import Preloader from "../Common/Preloader";
import ProfileStatus from "./ProfileStatus";
import AddPostForm from "./AddPostForm";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import Popup from "../Common/Popup";
import ProfileAvatarDominantColor from "./ProfileAvatar/ProfileAvatarDminantColor";
import {updateUserAvatar} from "../../Redux/profile-reducer";

function Profile(props) {

    let [visible, setVisible] = useState(false);
    let [RGB, setRGB] = useState({r: 0, g: 0, b: 0});

    useEffect(() => {
        let profile = props.profile;
        if (profile) {
            ProfileAvatarDominantColor(setRGB, profile)
        }
    }, [props.profile])

    console.log('123')

    const closeModal = () => {
        setVisible(false);
    }

    const openModal = () => {
        setVisible(true);
    }

    if (!props.profile) {
        let style = {marginTop: `calc(50vh - 10vh)`, scale: '2'};
        return <Preloader style={style}/>
    }

    let postItem = props.posts.map(post => <Post key={post.postId} post={post.post}/>);

    let avatarStyle = {width: `200px`, height: `200px`, margin: `30px`};
    let modalAvatarStyle = {width: `500px`, height: `500px`, margin: `30px`};

    return (

        <div className={style.Profile}>
            <div className={style.profileArea}>

                {
                    props.isFetching
                        ?
                        <div style={{
                            marginBottom: `33vh`,
                            height: `38vh`,
                            display: `flex`,
                            alignItems: `center`,
                            justifyContent: `center`
                        }}>
                            <Preloader style={{transform: `scale(2)`}}/>
                        </div>

                        :

                        <div>
                            <div id='avatarArea' style={{
                                height: `35vh`,
                                position: `relative`,
                                filter: `blur(10px)`,
                                background: `rgb(` + RGB.r + `, ` + RGB.g + `, ` + RGB.b + `)`
                            }}>
                            </div>
                            <div className={style.avatar}>
                                <div onClick={openModal} className={style.ava}>
                                    <ProfileAvatar
                                        profilePhoto={props.profile.photos.large}
                                        avatarStyle={avatarStyle}/>
                                </div>
                                <div><h1>{props.profile.fullName}</h1></div>
                            </div>
                            <div className={style.description}>
                                {/*<h3>{props.profile.aboutMe}</h3>*/}
                                <ProfileStatus
                                    status={props.status}
                                    updateUserStatus={props.updateUserStatus}
                                    myId={props.myId}
                                    userId={props.profile.userId}
                                />
                            </div>

                            <Popup
                                profilePhoto={props.profile.photos.large}
                                avatarStyle={modalAvatarStyle}
                                visible={visible}
                                setVisible={setVisible}
                                RGB={RGB}
                                updateUserAvatar={props.updateUserAvatar}
                            />

                        </div>


                }
                {
                    (props.myId === props.profile.userId)
                        ?
                        <div className={style.posts} style={{marginTop: `-35vh`}}>
                            <AddPostForm {...props}/>
                            <div className={style.postsArea}>
                                {postItem.reverse()}
                            </div>
                        </div>
                        : null
                }

            </div>

        </div>
    );


}

export default Profile;
