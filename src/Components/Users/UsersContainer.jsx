import Users from "./Users";
import {connect} from "react-redux";
import {followUser, setPage, setShortPages, setTotalCount, setUsers, unfollowUser, switchLeftPage, switchRightPage} from "../../Redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.Users.users,
        count: state.Users.count,
        totalCount: state.Users.totalCount,
        page: state.Users.page,
        shortPages: state.Users.shortPages,
        toLeftPage: state.Users.toLeftPage,
        toRightPage: state.Users.toRightPage
    }
}

let mapDispatchToProps = {followUser, unfollowUser, setUsers, setPage, setTotalCount, setShortPages, switchLeftPage, switchRightPage}

export default connect(mapStateToProps, mapDispatchToProps)(Users);