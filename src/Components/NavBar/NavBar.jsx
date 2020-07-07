import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";
// import BurgerMenu from "../Common/BurgerMenu";

function NavBar() {
    return (
        <div className={style.NavBar}>
            {/*<BurgerMenu/>*/}
            <NavLink to='/' className={style.Logo}>Social Web</NavLink>
            <NavLink to="/profile" className={style.navItem}>Profile</NavLink>
            <NavLink to="/messages" className={style.navItem}>Messages</NavLink>
            <NavLink to="/users" className={style.navItem}>Users</NavLink>
        </div>
    );
}

export default NavBar;
