import React from 'react';
import {userProfileAPI} from "../../api/api";
import * as axios from "axios";

class Friends extends React.Component {

    componentDidMount() {

        let name = [];

        this.props.friends.map(friend => {

            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${friend}`)
                .then(res => {
                    name.push(res.data.fullName)
                })

        })

    }

    render() {
        console.log(this.name)
        debugger
        return (
            <div>{this.name}</div>
        )
    }
}

export default Friends;