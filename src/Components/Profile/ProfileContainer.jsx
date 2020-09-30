import Profile from "./Profile";
import {addPost, getProfile, updateUserAvatar, updateUserStatus} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const ProfileContainer = (props) => {

    let refreshProfile = function () {
        // let userId = this.props.match.params.userId;
        // if (!userId) userId = this.props.myId;
        // this.props.getProfile(userId);
        let userId = props.match.params.userId;
        if (!userId) userId = props.myId;
        props.getProfile(userId);
    }

    useEffect(() => {
        refreshProfile()
    }, [props.match.params.userId])

    // componentDidMount() {
    //     this.refreshProfile()
    // };
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     // if (this.props.profile && prevProps.profile) {
    //     if (this.props.match.params.userId !== prevProps.match.params.userId) {
    //         debugger
    //         this.refreshProfile()
    //     }
    //     if (this.props.profile && prevProps.profile) {
    //         debugger
    //         if (this.props.profile.photos.large !== prevProps.profile.photos.large) {
    //             this.refreshProfile();
    //         }
    //     }
    //     // }
    // }

        return (

            <Profile {...props}/>

        )


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

let mapDispatchToProps = {addPost, getProfile, updateUserStatus, updateUserAvatar}

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