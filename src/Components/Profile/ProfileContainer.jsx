import Profile from "./Profile";
import {addPost, getProfile, updateUserStatus} from "../../Redux/profile-reducer";
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

    render() {
        return (

            <Profile {...this.props}/>

        )
    }

}

let mapStateToProps = (state) => {
    return {
        posts: state.Profile.posts,
        profile: state.Profile.profile,
        status: state.Profile.status,
        isFetching: state.Profile.isFetching,
    }
}

let mapDispatchToProps = {addPost, getProfile, updateUserStatus}

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