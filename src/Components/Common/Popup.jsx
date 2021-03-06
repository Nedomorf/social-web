import React from "react";
import style from './Popup.module.css'
import ProfileAvatar from "../Profile/ProfileAvatar/ProfileAvatar";
import UploadProfilePhoto from "../Profile/ProfileAvatar/UploadProfilePhoto";

const Popup = (props) => {

    let modalAvatarStyle = {width: `500px`, height: `500px`, margin: `30px`};

    const closeModal = () => {
        props.setVisible(false);
    }

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.updateUserAvatar(e.target.files[0]);
            props.refreshProfile(props.userId);
            props.setVisible(false);
        }
    }

    return (
        <div className={`${style.popup} ${props.visible && style.open}`}>
            <div className={style.popupBody} onClick={closeModal}/>
            <div className={style.popupInner}
                 style={{background: `rgb(` + props.RGB.r + `, ` + props.RGB.g + `, ` + props.RGB.b + `)`}}>
                {/*<UploadProfilePhoto/>*/}
                {
                    (props.myId === props.userId)
                        ? <input type="file" onChange={onPhotoSelected}/>
                        : null
                }
                <ProfileAvatar
                    profilePhoto={props.profilePhoto}
                    avatarStyle={modalAvatarStyle}
                />
                <div onClick={closeModal} className={style.close}>
                    <img src="https://img.icons8.com/color/48/000000/close-window.png" alt='close-modal'/>
                </div>
            </div>
        </div>
    )
}

export default Popup;