import Users from "./Users";
import {connect} from "react-redux";
import {followUser, setUsers, unfollowUser} from "../../Redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.Users.users
    }
}

let mapDispatchToProps = {followUser, unfollowUser, setUsers}

export default connect(mapStateToProps, mapDispatchToProps)(Users);