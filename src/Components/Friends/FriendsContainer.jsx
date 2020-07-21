import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import * as axios from "axios";
import {setFriends, setPage, setTotalCount, toggleIsFetching, unfollowFriend} from "../../Redux/friends-reducer";


class FriendsContainer extends React.Component {

    // componentDidMount() {
    //
    //     this.props.toggleIsFetching(true)
    //
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users`, {
    //         withCredentials: true
    //     })
    //         .then(res => {
    //             this.props.setTotalCount(res.data.totalCount);
    //             let pagesCount = Math.ceil(res.data.totalCount / this.props.count);
    //             console.log(pagesCount)
    //
    //             for (let i = this.props.page; i <= pagesCount; i++) {
    //
    //                 axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`, {
    //                     withCredentials: true
    //                 })
    //                     .then(res => {
    //
    //                         let users = []
    //                         users.push(res.data.items)
    //
    //                         this.props.setFriends(users);
    //                         this.props.toggleIsFetching(false)
    //                         console.log(users)
    //                     })
    //
    //                 this.props.setPage(i)
    //
    //             }
    //
    //         })
    //
    //
    // }

    render() {
        return <Friends {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    friends: state.Friends.friends,
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

