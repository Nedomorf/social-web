import Profile from "./Profile";
import {addPost, changePostText, setProfile, toggleIsFetching} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import {withRouter} from "react-router-dom";
import {userProfileAPI} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) userId = 6441

        // this.props.toggleIsFetching(true)

        userProfileAPI.getUserProfile(userId)
            .then(data => {
                this.props.setProfile(data);
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
        profile: state.Profile.profile,
        isFetching: state.Profile.isFetching
    }
}

let mapDispatchToProps = {addPost, changePostText, setProfile, toggleIsFetching}

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainerComponent);