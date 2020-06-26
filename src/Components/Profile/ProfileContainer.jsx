import Profile from "./Profile";
import React from "react";
import {addPost, changePostText} from "../../Redux/profile-reducer";
import {connect} from "react-redux";

// function ProfileContainer(props) {
//     return (
//         <>
//             {
//                 <Profile addPost={props.addPost} changePostText={props.changePostText} posts={props.posts} newPostText={props.newPostText}/>
//             }
//         </>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.Profile.posts,
        newPostText: state.Profile.newPostText
    }
}

let mapDispatchToProps = {addPost, changePostText}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);