import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";

// import BurgerMenu from "../Common/BurgerMenu";

function NavBar(props) {
    return (
        <div className={style.NavBar}>
            {/*<BurgerMenu/>*/}
            <NavLink to='/' className={style.Logo}>Social Web</NavLink>
            {
                props.isAuth
                    ?
                    <div className={style.navs} style={{gridTemplateColumns: `repeat(4, 1fr)`}}>
                        <NavLink to="/profile" className={style.navItem}>Profile</NavLink>
                        {/*<NavLink to="/messages" className={style.navItem}>Messages</NavLink>*/}
                        <NavLink to="/friends" className={style.navItem}>Friends</NavLink>
                        <NavLink to="/users" className={style.navItem}>Users</NavLink>
                        <div className={style.navItem}>
                            <div className={`${style.userStateWrapper} ${style.logout}`}>
                                <div className={style.userState} onClick={props.logout}>
                                    <div>Logout</div>
                                    <div className={style.userDataImage}>
                                        <img src="http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png"
                                             alt="profile-image"/>
                                    </div>
                                </div>
                                <></>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={style.navs} style={{gridTemplateColumns: `3fr 1fr`}}>
                        <div className={style.navItem}></div>
                        <div className={style.navItem}>
                            <div className={`${style.userStateWrapper} ${style.login}`}>
                                <div className={style.userState}>
                                    <NavLink to='/login'>
                                        <div>Login</div>
                                    </NavLink>
                                    <div className={style.userDataImage}>
                                        <img src="http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png"
                                             alt="profile-image"/>
                                    </div>
                                </div>
                                <></>
                            </div>
                        </div>
                    </div>
            }
            {/*<div className={style.pushLogin}>Welcome, {props.login}!</div>*/}
        </div>
    );
}

export default NavBar;
