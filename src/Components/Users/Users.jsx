import React from 'react';
import style from './Users.module.css';
// import User from "./User/User";
import * as axios from "axios";
import {NavLink} from "react-router-dom";

class Users extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalCount(res.data.totalCount);
            })
    };


    // userItem = this.props.users.map(user =>
    //
    //     <div className={style.User}>
    //         <div className={style.userAvatar}>
    //             <img src={user.photos.small} alt="user-avatar" className={style.userAvatarImg}/>
    //         </div>
    //         <div className={style.userData}>
    //             <div>
    //                 <div className={style.userName}><h2>{user.name}</h2></div>
    //                 <div className={style.userDescription}>{user.status}</div>
    //             </div>
    //             <div className={style.isFollowedButton}>
    //                 {
    //                     user.followed
    //                         ? <button onClick={
    //                             () => {
    //                                 this.props.unfollowUser(user.id)
    //                             }
    //                         }>Unfollow</button>
    //
    //                         : <button onClick={
    //                             () => {
    //                                 this.props.followUser(user.id)
    //                             }
    //                         }>Follow</button>
    //                 }
    //             </div>
    //         </div>
    //     </div>
    // )


    onPageChanged = (page, pagesCount, shortPages) => {
        this.props.setPage(page);
        if (page === 1) {
            this.props.switchLeftPage(false)
        } else {
            this.props.switchLeftPage(true)
        }
        if (page === pagesCount) {
            this.props.switchRightPage(false)
        } else {
            this.props.switchRightPage(true)
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`)
            .then(res => {
                this.props.setUsers(res.data.items);
            })

        // let pages = [pagesCount-4, pagesCount-3, pagesCount-2, pagesCount-1, pagesCount]
        // console.log(pages)
        // if (pages.includes(page)) {
        //     shortPages = [1, '...'];
        //     for (let i = 2; i > 6; i++) {
        //         shortPages[i] = pages[i-2];
        //     }
        //     console.log(shortPages)
        //     this.props.setShortPages(shortPages);
        // }
    }

    changePage = (shortPages, num, pagesCount) => {
        let page = this.props.page;
        page = page + num;
        this.props.setPage(page);

        page === 1
            ? this.props.switchLeftPage(false)
            : this.props.switchLeftPage(true)

        page === pagesCount
            ? this.props.switchRightPage(false)
            : this.props.switchRightPage(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`)
            .then(res => {
                this.props.setUsers(res.data.items);
            })

        if (shortPages.includes(page) === false) {
            for (let i = 0; i < 5; i++) {
                shortPages[i] = shortPages[i] + num;
            }
            this.props.setShortPages(shortPages);
        }

        // if (page === pagesCount-4) {
        //     shortPages = [1, '...']
        //     for (let i = 2; i < 7; i--) {
        //         shortPages[i] = pagesCount-4 - (i-1);
        //     }
        //     this.props.setShortPages(shortPages);
        // }

    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.count);

        let pages = [];

        let shortPages = this.props.shortPages;

        if (pagesCount !== 1) {

            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i);
                if (i === pagesCount) {
                    shortPages.push(pages.length);
                    shortPages.splice(7, 1);

                }

            }
            // shortPages.push(pages.length);


        }


        // let Page = (page) => {
        //     return (
        //         <span className={`
        //         ${this.props.page === page && style.currentPage}
        //         ${style.page}`}
        //               onClick={
        //                   (e) => {
        //                       this.onPageChanged(page)
        //                   }
        //
        //               }>{page}</span>
        //     )
        //
        //
        // }

        let Page = (props) => {

            if (props.page === '...') {
                return <span key={props.page}
                             style={{cursor: 'pointer', margin: 5 + 'px', fontSize: 25 + 'px'}}>{props.page}</span>
            } else {
                return (
                    <span key={props.page} className={`
                                ${this.props.page === props.page && style.currentPage}
                                ${style.page}`}
                          onClick={
                              (e) => {
                                  this.onPageChanged(props.page, pagesCount, shortPages)
                              }

                          }>{props.page}</span>
                )
            }

        }

        let num;


        return (
            <div className={style.Users}>
                <div className={style.usersArea}>
                    <div className={style.pages}>

                        {
                            pages.length > 10
                                ?
                                <span>

                                    {
                                        this.props.toLeftPage
                                            ? <span>
                                                <span className={style.navs} onClick={() => {
                                                    num = -10;
                                                    this.changePage(shortPages, num, pagesCount)
                                                }}>⫷</span>
                                                <span className={style.navs} onClick={() => {
                                                    num = -1;
                                                    this.changePage(shortPages, num, pagesCount)
                                                }}>◄</span>
                                            </span>
                                            : null
                                    }
                                    <span>
                                        {this.props.shortPages.map(page => <Page page={page}/>)}
                                    </span>
                                    {
                                        this.props.toRightPage
                                            ? <span>
                                                <span className={style.navs} onClick={() => {
                                                    num = 1;
                                                    this.changePage(shortPages, num, pagesCount)
                                                }}>►</span>
                                                <span className={style.navs} onClick={() => {
                                                    num = 10;
                                                    this.changePage(shortPages, num, pagesCount)
                                                }}>⫸</span>
                                            </span>
                                            : null
                                    }

                                </span>

                                : pages.map(page => <Page page={page}/>)

                        }

                        {/*{*/}
                        {/*    pages.map(page => <Page page={page} /> )*/}
                        {/*}*/}

                    </div>
                    {
                        this.props.users.map(user =>

                            <div className={style.User} key={user.id}>
                                <div className={style.userAvatar}>

                                    <NavLink to={`/users/${user.id}`}>

                                        {
                                            user.photos.small === null
                                                ? <img src="https://zurlz.xyz/img/userb.png" alt="user-avatar"
                                                       className={style.userAvatarImg}/>
                                                : <img src={user.photos.small} alt="user-avatar"
                                                       className={style.userAvatarImg}/>
                                        }

                                    </NavLink>

                                    {/*<img src={user.photos.small} alt="user-avatar" className={style.userAvatarImg}/>*/}
                                </div>
                                <div className={style.userData}>
                                    <div>
                                        <NavLink to={`/users/${user.id}`} className={style.userName}>
                                            <h2>{user.name}</h2></NavLink>
                                        <div className={style.userDescription}>{user.status}</div>
                                    </div>
                                    <div className={style.isFollowedButton}>
                                        {
                                            user.followed
                                                ? <button onClick={
                                                    () => {
                                                        this.props.unfollowUser(user.id)
                                                    }
                                                }>Unfollow</button>

                                                : <button onClick={
                                                    () => {
                                                        this.props.followUser(user.id)
                                                    }
                                                }>Follow</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );

    }


}

export default Users;