import Profile from "./Profile";
import {addPost, changePostText, getProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) userId = 6441

        this.props.getProfile(userId);

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

            <Profile addPost={this.addPost} changePostText={this.changePostText} {...this.props}/>

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

let mapDispatchToProps = {addPost, changePostText, getProfile}

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainerComponent);