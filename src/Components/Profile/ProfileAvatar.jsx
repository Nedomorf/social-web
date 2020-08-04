import React from "react";
import ImagePalette from "react-image-palette";
import IMAGE from "../../images/bg.jpg";
import style from "./Profile.module.css";

const ProfileAvatar = (props) => {
    return (
        <ImagePalette image={IMAGE}>

            {({backgroundColor, color, alternativeColor}) => (
                <div>
                    {
                        props.profilePhoto === null
                            ?
                            <img
                                src="http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png"
                                alt="profile-ava"
                                className={style.avatarImg} style={{borderColor: color}}/>
                            : <img src={props.profilePhoto} alt="profile-ava"
                                   className={style.avatarImg} style={{
                                borderColor: color,
                                borderStyle: `solid`,
                                borderRadius: `100%`
                            }}/>
                    }
                </div>
            )}

        </ImagePalette>
    )
}

export default ProfileAvatar;