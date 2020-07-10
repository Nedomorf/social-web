import Profile from "./Profile";
import {addPost, changePostText, setProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";


class ProfileContainer extends React.Component {

    componentDidMount() {

        // this.props.toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/10`)
            .then(res => {
                this.props.setProfile(res.data);
                // this.props.setTotalCount(res.data.totalCount);
                // this.props.toggleIsFetching(false)
            })

    };

    changePostText = (e) => {
        let newPostText = e.target.value;
        this.props.changePostText(newPostText);
    };

    addPost = () => {
        this.props.addPost();
    };

    render() {

        return (

            <Profile addPost={this.addPost} changePostText={this.changePostText} posts={this.props.posts}
                     newPostText={this.props.newPostText} profile={this.props.profile}/>

        )
    }

}

let mapStateToProps = (state) => {
    return {
        posts: state.Profile.posts,
        newPostText: state.Profile.newPostText,
        profile: state.Profile.profile
    }
}

let mapDispatchToProps = {addPost, changePostText, setProfile}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);