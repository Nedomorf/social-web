import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {setFriends, setPage, setTotalCount, toggleIsFetching, unfollowFriend} from "../../Redux/friends-reducer";

class FriendsContainer extends React.Component {

    render() {
        return <Friends {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    friends: state.Users.friends,
    count: state.Friends.count,
    totalCount: state.Friends.totalCount,
    page: state.Friends.page,
    isFetching: state.Users.isFetching
})

let mapDispatchToProps = ({
    unfollowFriend,
    setFriends,
    setPage,
    setTotalCount,
    toggleIsFetching
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);

