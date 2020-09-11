import React from "react";
import style from './Popup.module.css'
import ProfileAvatar from "../Profile/ProfileAvatar";

const Popup = (props) => {

    let modalAvatarStyle = {width: `500px`, height: `500px`, margin: `30px`};

    const closeModal = () => {
        props.setVisible(false);
    }

    return (
        <div className={`${style.popup} ${props.visible && style.open}`}>
            <div className={style.popupBody} onClick={closeModal}/>
            <div className={style.popupInner} style={{ background: `rgb(` + props.RGB.r + `, ` + props.RGB.g + `, ` + props.RGB.b + `)` }}>
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