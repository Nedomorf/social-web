import React from 'react';
import NavBar from "./NavBar";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth-reducer";

class NavBarContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setUserData(res.data.data)
                }
            })
    }

    render() {
        return (
            <NavBar {...this.props} />
        );
    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

let mapDispatchToProps = ({
    setUserData
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
