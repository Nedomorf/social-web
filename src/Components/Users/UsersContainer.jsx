import Users from "./Users";
import {connect} from "react-redux";
import {
    setPage,
    setShortPages,
    switchLeftPage,
    switchRightPage, getUsers, follow, unfollow
} from "../../Redux/users-reducer";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        users: state.Users.users,
        count: state.Users.count,
        totalCount: state.Users.totalCount,
        page: state.Users.page,
        shortPages: state.Users.shortPages,
        toLeftPage: state.Users.toLeftPage,
        toRightPage: state.Users.toRightPage,
        isFetching: state.Users.isFetching,
        followingInProcess: state.Users.followingInProcess,
    }
}

let mapDispatchToProps = {
    setPage,
    setShortPages,
    switchLeftPage,
    switchRightPage,
    getUsers,
    follow,
    unfollow
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Users)

// let authRedirectComponent = withAuthRedirect(Users);
//
// export default connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);