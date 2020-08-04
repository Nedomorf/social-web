import React from "react";

const ProfileAvatar = (props) => {
    let avatarStyle = props.avatarStyle;
    return (
        <div>
            {
                props.profilePhoto === null
                    ?
                    <img
                        src="http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png"
                        alt="profile-ava"
                        // style={{borderColor: props.color}}
                        // style={props.avatarStyle}
                        style={avatarStyle && Object.assign(avatarStyle, {borderColor: props.color})}
                    />
                    : <img src={props.profilePhoto} alt="profile-ava"
                           style={avatarStyle && Object.assign(avatarStyle, {
                               borderRadius: `100%`,
                               borderColor: props.color,
                               borderStyle: `solid`
                           })}
                    />
            }
        </div>

    )
}

export default ProfileAvatar;