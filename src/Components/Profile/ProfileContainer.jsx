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

        if (!userId) userId = this.props.myId

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
        myId: state.auth.data.id
    }
}

let mapDispatchToProps = {addPost, getProfile, updateUserStatus}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileContainer)

// let authRedirectContainer = withAuthRedirect(ProfileContainer);
//
// let WithURLDataContainerComponent = withRouter(authRedirectContainer);
//
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainerComponent);