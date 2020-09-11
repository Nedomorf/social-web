import React, {useEffect, useState} from 'react';
import style from './Profile.module.css';
import Post from "./Post/Post";
import Preloader from "../Common/Preloader";

import ImagePalette from 'react-image-palette'
import IMAGE from '../../images/bg.jpg'
import ProfileStatus from "./ProfileStatus";
import AddPostForm from "./AddPostForm";
import ProfileAvatar from "./ProfileAvatar";
import Popup from "../Common/Popup";

import getAverageColor from 'get-average-color';

function Profile(props) {

    useEffect(() => {
        let DIV = document.getElementById('avatarArea');
        if (DIV) {
            props.profile.photos.large
                ?
                getAverageColor(props.profile.photos.large).then(rgb => {
                    console.log(rgb);
                    DIV.style.background = `rgb(` + rgb.r + `, ` + rgb.g + `, ` + rgb.b + `)`;
                })
                :
                getAverageColor(IMAGE).then(rgb => {
                    console.log(rgb);
                    DIV.style.background = `rgb(` + rgb.r + `, ` + rgb.g + `, ` + rgb.b + `)`;
                })
        }
    })

    let [visible, setVisible] = useState(false);

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

    // let [RGB, setRGB] = useState({r: 255, g: 255, b: 255});
    // const setColor = (rgb) => {
    //     setRGB({rgb});
    //     console.log(rgb);
    // }
    // let imag = 'http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png'


    let postItem = props.posts.map(post => <Post key={post.postId} post={post.post}/>);

    console.log(props.profile)

    let avatarStyle = {width: `200px`, height: `200px`, margin: `30px`};
    let modalAvatarStyle = {width: `500px`, height: `500px`, margin: `30px`};

    return (

        <div className={style.Profile}>
            <div id="123">123</div>
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
                                filter: `blur(10px)`
                            }}>
                            </div>
                            <div className={style.avatar}>
                                <div onClick={openModal}>
                                    <ProfileAvatar
                                        profilePhoto={props.profile.photos.large}
                                        avatarStyle={avatarStyle}/>
                                </div>
                                <div><h1>{props.profile.fullName}</h1></div>
                            </div>
                            <div className={style.description}>
                                {/*<h3>{props.profile.aboutMe}</h3>*/}
                                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                            </div>

                            {/*<Modal visible={visible} width="1000px" height="600px" effect="fadeInDown"*/}
                            {/*       onClickAway={closeModal}>*/}
                            {/*    <div>*/}
                            {/*        <ProfileAvatar*/}
                            {/*            profilePhoto={props.profile.photos.large}*/}
                            {/*            color={color}*/}
                            {/*            avatarStyle={modalAvatarStyle}*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*</Modal>*/}

                            <Popup
                                profilePhoto={props.profile.photos.large}
                                avatarStyle={modalAvatarStyle}
                                visible={visible}
                                setVisible={setVisible}
                            />

                        </div>


                }

                <div className={style.posts} style={{marginTop: `-35vh`}}>
                    <AddPostForm {...props}/>
                    {/*<div className={style.addPost}>*/}
                    {/*    <textarea onChange={props.changePostText} value={props.newPostText}/>*/}
                    {/*    <button onClick={props.addPost}>Отправить</button>*/}
                    {/*</div>*/}
                    <div className={style.postsArea}>
                        {postItem.reverse()}
                    </div>
                </div>

            </div>

        </div>
    );


}

export default Profile;
