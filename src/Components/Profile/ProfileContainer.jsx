import Profile from "./Profile";
import {addPost, changePostText, getProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
        isFetching: state.Profile.isFetching,
    }
}

let mapDispatchToProps = {addPost, changePostText, getProfile}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

// let authRedirectContainer = withAuthRedirect(ProfileContainer);
//
// let WithURLDataContainerComponent = withRouter(authRedirectContainer);
//
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainerComponent);