(this["webpackJsonpsocial-web"]=this["webpackJsonpsocial-web"]||[]).push([[0],{11:function(e,t,a){e.exports={Users:"Users_Users__1U0yd",usersArea:"Users_usersArea__Nugy0",User:"Users_User__3Tloc",userData:"Users_userData__1RDzu",userAvatarImg:"Users_userAvatarImg__1dRSf",followingButton:"Users_followingButton__Pmtvt",userName:"Users_userName__2hmsM",pages:"Users_pages__2YOIn",currentPage:"Users_currentPage__2Svw5",page:"Users_page__1t6E2",navs:"Users_navs__aVHZd",preloader:"Users_preloader__NmOsG"}},12:function(e,t,a){e.exports={NavBar:"NavBar_NavBar__L3TMF",navs:"NavBar_navs__oinLb",navItem:"NavBar_navItem__dV4mT",Logo:"NavBar_Logo__3oHk4",userStateWrapper:"NavBar_userStateWrapper__23ES8",logout:"NavBar_logout__19dEL",login:"NavBar_login__1eLI-",userState:"NavBar_userState__1qH3A",pushLogin:"NavBar_pushLogin__1cic6"}},127:function(e,t,a){e.exports={Post:"Post_Post__1mnBo"}},128:function(e,t,a){e.exports=a.p+"static/media/preloader.f066f360.svg"},129:function(e,t,a){e.exports={addPost:"AddPost_addPost__45hFV"}},133:function(e,t,a){e.exports=a.p+"static/media/git-profile.15f33404.jpg"},161:function(e,t,a){e.exports=a(290)},166:function(e,t,a){},167:function(e,t,a){},27:function(e,t,a){e.exports={Login:"Login_Login__2yd4K",loginArea:"Login_loginArea__2tLLM",btn:"Login_btn__3YNBA",Field:"Login_Field__fpsIq",Form:"Login_Form__1A8lK",controls:"Login_controls__2PIkA",rememberMe:"Login_rememberMe__8QirL"}},289:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(35),s=a.n(r),c=(a(166),a(15)),i=a(16),l=a(18),u=a(17),m=(a(167),a(9)),p=(a(38),a(13));var d=a(45),f=a(32),g=a.n(f),h=a(127),E=a.n(h),v=function(e){return o.a.createElement("div",{className:E.a.Post},e.post)},b=a(128),_=a.n(b);var O=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:_.a,alt:"preloader",style:e.style}))},I=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(e.status),i=Object(d.a)(c,2),l=i[0],u=i[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return o.a.createElement(o.a.Fragment,null,r?o.a.createElement("div",{onBlur:function(){s(!1),e.updateUserStatus(l)}},o.a.createElement("input",{type:"text",value:l,onChange:function(e){u(e.currentTarget.value)},autoFocus:!0})):e.myId===e.userId?o.a.createElement("div",{onClick:function(){s(!0)}},o.a.createElement("h3",null,l)):o.a.createElement("div",null,o.a.createElement("h3",null,l)))},N=a(129),P=a.n(N),j=a(124),L=a(125),y=a(41),F=function(e){if(!e)return"The field is required."},S=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols.")}},T=a(93),w=a(37),A=a.n(w),C=function(e){var t=e.input,a=e.meta,n=Object(T.a)(e,["input","meta"]),r=a.touched&&a.error;return o.a.createElement("div",{className:"".concat(A.a.formField," ").concat(r?A.a.error:"")},o.a.createElement("textarea",Object.assign({},t,n)),r&&o.a.createElement("div",null,a.error))},U=function(e){var t=e.input,a=e.meta,n=Object(T.a)(e,["input","meta"]),r=a.touched&&a.error;return o.a.createElement("div",{className:"".concat(A.a.formField," ").concat(r?A.a.error:"")},r&&o.a.createElement("div",null,a.error),o.a.createElement("input",Object.assign({},t,n)))},R=S(10),B=Object(L.a)({form:"post"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit,className:P.a.addPost},o.a.createElement(j.a,{placeholder:"New post...",name:"newPostText",component:C,validate:[F,R]}),o.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))})),k=function(e){return o.a.createElement(B,{onSubmit:function(t,a){e.addPost(t.newPostText),a(Object(y.a)("post"))}})},G=function(e){var t=e.avatarStyle;return o.a.createElement("div",null,null===e.profilePhoto?o.a.createElement("img",{src:"http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png",alt:"profile-ava",style:t&&Object.assign(t,{borderColor:e.color})}):o.a.createElement("img",{src:e.profilePhoto,alt:"profile-ava",style:t&&Object.assign(t,{borderRadius:"100%",borderColor:e.color,borderStyle:"solid"})}))},x=a(46),M=a.n(x),D=a(66),W=a(132),H=a.n(W),z=(o.a.Component,function(e){var t=function(){e.setVisible(!1)};return o.a.createElement("div",{className:"".concat(M.a.popup," ").concat(e.visible&&M.a.open)},o.a.createElement("div",{className:M.a.popupBody,onClick:t}),o.a.createElement("div",{className:M.a.popupInner,style:{background:"rgb("+e.RGB.r+", "+e.RGB.g+", "+e.RGB.b+")"}},e.myId===e.userId?o.a.createElement("input",{type:"file",onChange:function(t){t.target.files.length&&(e.updateUserAvatar(t.target.files[0]),e.refreshProfile(e.userId),e.setVisible(!1))}}):null,o.a.createElement(G,{profilePhoto:e.profilePhoto,avatarStyle:{width:"500px",height:"500px",margin:"30px"}}),o.a.createElement("div",{onClick:t,className:M.a.close},o.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/close-window.png",alt:"close-modal"}))))}),V=a(92),q=a(133),K=a.n(q),Y=function(e,t){t&&(t.photos.large?Object(V.a)(t.photos.large).then((function(t){e(t)})):Object(V.a)(K.a).then((function(t){e(t)})))},Z=a(56),J=a(2),Q=a(69),X=Q.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"75a2366b-2f8c-4059-8cc9-298369a0c793"}}),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return X.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},ee=function(e){return X.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(e)).then((function(e){return e.data}))},te=function(e){return X.post("follow/".concat(e)).then((function(e){return e.data}))},ae=function(e){return X.get("profile/".concat(e)).then((function(e){return e.data}))},ne=function(e){return X.get("profile/status/".concat(e)).then((function(e){return e.data}))},oe=function(e){return X.put("profile/status",{status:e}).then((function(e){return e}))},re=function(e){var t=new FormData;return t.append("image",e),X.put("/profile/photo",t,{headers:{"Content-type":"multipart/form-data"}}).then((function(e){return e}))},se=function(){return X.get("auth/me").then((function(e){return e.data}))},ce=function(e){return X.post("auth/login",e).then((function(e){return e.data}))},ie=function(){return X.delete("auth/login").then((function(e){return e.data}))},le=0,ue={posts:[{postId:"".concat(++le),post:"123"},{postId:"".concat(++le),post:"456"},{postId:"".concat(++le),post:"789"},{postId:"".concat(++le),post:"qwerty"},{postId:"".concat(++le),post:"zxcv"},{postId:"".concat(++le),post:"asdf"},{postId:"".concat(++le),post:"loool"}],profile:null,status:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441...",isFetching:!1},me=function(e){return{type:"SET-STATUS",status:e}},pe=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={postId:++le,post:t.newPostText};return Object(J.a)(Object(J.a)({},e),{},{posts:[].concat(Object(Z.a)(e.posts),[a])});case"SET-PROFILE":return Object(J.a)(Object(J.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(J.a)(Object(J.a)({},e),{},{status:t.status});case"SET-AVATAR":return Object(J.a)(Object(J.a)({},e),{},{profile:Object(J.a)(Object(J.a)({},e.profile),{},{photos:t.avatar})});case"TOGGLE-IS-FETCHING":return Object(J.a)(Object(J.a)({},e),{},{isFetching:t.isFetching});default:return e}};var fe=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)({r:0,g:0,b:0}),i=Object(d.a)(c,2),l=i[0],u=i[1];if(Object(n.useEffect)((function(){var t=e.profile;t&&Y(u,t)}),[e.profile]),console.log("123"),!e.profile){return o.a.createElement(O,{style:{marginTop:"calc(50vh - 10vh)",scale:"2"}})}var m=e.posts.map((function(e){return o.a.createElement(v,{key:e.postId,post:e.post})}));return o.a.createElement("div",{className:g.a.Profile},o.a.createElement("div",{className:g.a.profileArea},e.isFetching?o.a.createElement("div",{style:{marginBottom:"33vh",height:"38vh",display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement(O,{style:{transform:"scale(2)"}})):o.a.createElement("div",null,o.a.createElement("div",{id:"avatarArea",style:{height:"35vh",position:"relative",filter:"blur(10px)",background:"rgb("+l.r+", "+l.g+", "+l.b+")"}}),o.a.createElement("div",{className:g.a.avatar},o.a.createElement("div",{onClick:function(){s(!0)},className:g.a.ava},o.a.createElement(G,{profilePhoto:e.profile.photos.large,avatarStyle:{width:"200px",height:"200px",margin:"30px"}})),o.a.createElement("div",null,o.a.createElement("h1",null,e.profile.fullName))),o.a.createElement("div",{className:g.a.description},o.a.createElement(I,{status:e.status,updateUserStatus:e.updateUserStatus,myId:e.myId,userId:e.profile.userId})),o.a.createElement(z,{profilePhoto:e.profile.photos.large,avatarStyle:{width:"500px",height:"500px",margin:"30px"},visible:r,setVisible:s,RGB:l,updateUserAvatar:e.updateUserAvatar,myId:e.myId,userId:e.profile.userId,refreshProfile:e.getProfile})),e.myId===e.profile.userId?o.a.createElement("div",{className:g.a.posts,style:{marginTop:"-35vh"}},o.a.createElement(k,e),o.a.createElement("div",{className:g.a.postsArea},m.reverse())):null))},ge=a(10),he=function(e){return{isAuth:e.auth.isAuth}},Ee=function(e){var t=function(t){Object(l.a)(n,t);var a=Object(u.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(m.a,{to:"/login"})}}]),n}(o.a.Component);return Object(ge.b)(he)(t)},ve=a(8),be={addPost:function(e){return{type:"ADD-POST",newPostText:e}},getProfile:function(e){return function(t){t(pe(!0)),ae(e).then((function(e){t({type:"SET-PROFILE",profile:e}),t(pe(!1))})),ne(e).then((function(e){t(me(e)),t(pe(!1))}))}},updateUserStatus:function(e){return function(t){oe(e).then((function(e){0===e.resultCode&&t(me(e)),t(pe(!1))}))}},updateUserAvatar:function(e){return function(t){re(e).then((function(e){0===e.resultCode&&t(function(e){return{type:"SET-AVATAR",avatar:e}}(e.data.photos))}))}}},_e=Object(ve.d)(Ee,Object(ge.b)((function(e){return{posts:e.Profile.posts,profile:e.Profile.profile,status:e.Profile.status,isFetching:e.Profile.isFetching,myId:e.auth.data.id}}),be),m.g)((function(e){return Object(n.useEffect)((function(){!function(){var t=e.match.params.userId;t||(t=e.myId),e.getProfile(t)}()}),[e.match.params.userId]),o.a.createElement(fe,e)})),Oe=a(11),Ie=a.n(Oe),Ne={users:[],friends:[],count:10,totalCount:1,page:1,shortPages:[1,2,3,4,5,"..."],toLeftPage:!1,toRightPage:!0,isFetching:!1,followingInProcess:[]},Pe=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},je=function(e,t){return{type:"TOGGLE-FOLLOWING-PROCESS",isFetching:e,id:t}},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW-USER":return Object(J.a)(Object(J.a)({},e),{},{friends:[].concat(Object(Z.a)(e.friends),[t.id]),users:e.users.map((function(e){return e.id===t.id?Object(J.a)(Object(J.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW-USER":return Object(J.a)(Object(J.a)({},e),{},{friends:e.friends.filter((function(e){return e!==t.id})),users:e.users.map((function(e){return e.id===t.id?Object(J.a)(Object(J.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(J.a)(Object(J.a)({},e),{},{users:t.users});case"SET-PAGE":return Object(J.a)(Object(J.a)({},e),{},{page:t.page});case"SET-TOTAL-COUNT":return Object(J.a)(Object(J.a)({},e),{},{totalCount:t.totalCount});case"SET-SHORT-PAGES":return Object(J.a)(Object(J.a)({},e),{},{shortPages:t.shortPages});case"SWITCH-LEFT-PAGE":return Object(J.a)(Object(J.a)({},e),{},{toLeftPage:t.switchLeftPage});case"SWITCH-RIGHT-PAGE":return Object(J.a)(Object(J.a)({},e),{},{toRightPage:t.switchRightPage});case"TOGGLE-IS-FETCHING":return Object(J.a)(Object(J.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-FOLLOWING-PROCESS":return Object(J.a)(Object(J.a)({},e),{},{followingInProcess:t.isFetching?[].concat(Object(Z.a)(e.followingInProcess),[t.id]):e.followingInProcess.filter((function(e){return e!==t.id}))});default:return e}},ye=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t,a,n){e.props.setPage(t),1===t?e.props.switchLeftPage(!1):e.props.switchLeftPage(!0),t===a?e.props.switchRightPage(!1):e.props.switchRightPage(!0),e.props.requestUsers(t,e.props.count)},e.changePage=function(t,a,n){var o=e.props.page;if(o+=a,e.props.setPage(o),1===o?e.props.switchLeftPage(!1):e.props.switchLeftPage(!0),o===n?e.props.switchRightPage(!1):e.props.switchRightPage(!0),e.props.requestUsers(o,e.props.count),!t.includes(o)){e.props.toggleIsFetching(!0);for(var r=0;r<5;r++)t[r]=t[r]+a;e.props.toggleIsFetching(!1),e.props.setShortPages(t)}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.page,this.props.count)}},{key:"render",value:function(){var e=this,t=Math.ceil(this.props.totalCount/this.props.count),a=[],n=this.props.shortPages;if(1!==t)for(var r=1;r<=t;r++)a.push(r),r===t&&(n.push(a.length),n.splice(7,1));var s,c=function(a){return"..."===a.page?o.a.createElement("span",{key:a.page,style:{cursor:"pointer",margin:"5px",fontSize:"25px"}},a.page):o.a.createElement("span",{key:a.page,className:"\n                                ".concat(e.props.page===a.page&&Ie.a.currentPage,"\n                                ").concat(Ie.a.page),onClick:function(o){e.onPageChanged(a.page,t,n)}},a.page)};return o.a.createElement("div",{className:Ie.a.Users},o.a.createElement("div",{className:Ie.a.usersArea},this.props.isFetching?o.a.createElement(O,null):o.a.createElement("div",{className:Ie.a.pages},a.length>10?o.a.createElement("span",null,this.props.toLeftPage?o.a.createElement("span",null,o.a.createElement("span",{className:Ie.a.navs,onClick:function(){s=-10,e.changePage(n,s,t)}},"\u2af7"),o.a.createElement("span",{className:Ie.a.navs,onClick:function(){s=-1,e.changePage(n,s,t)}},"\u25c4")):null,o.a.createElement("span",null,this.props.shortPages.map((function(e){return o.a.createElement(c,{page:e,key:e})}))),this.props.toRightPage?o.a.createElement("span",null,o.a.createElement("span",{className:Ie.a.navs,onClick:function(){s=1,e.changePage(n,s,t)}},"\u25ba"),o.a.createElement("span",{className:Ie.a.navs,onClick:function(){s=10,e.changePage(n,s,t)}},"\u2af8")):null):a.map((function(e){return o.a.createElement(c,{page:e})}))),this.props.users.map((function(t){return o.a.createElement("div",{className:Ie.a.User,key:t.id},o.a.createElement("div",{className:Ie.a.userAvatar},o.a.createElement(p.b,{to:"/profile/".concat(t.id)},null===t.photos.small?o.a.createElement("img",{src:"http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png",alt:"user-avatar",className:Ie.a.userAvatarImg}):o.a.createElement("img",{src:t.photos.small,alt:"user-avatar",className:Ie.a.userAvatarImg,style:{borderRadius:"100%"}}))),o.a.createElement("div",{className:Ie.a.userData},o.a.createElement("div",null,o.a.createElement(p.b,{to:"/profile/".concat(t.id),className:Ie.a.userName},o.a.createElement("h2",null,t.name)),o.a.createElement("div",{className:Ie.a.userDescription},t.status)),o.a.createElement("div",{className:Ie.a.followingButton},t.followed?e.props.followingInProcess.some((function(e){return e===t.id}))?o.a.createElement("div",{className:Ie.a.preloader},o.a.createElement(O,null)):o.a.createElement("button",{disabled:e.props.followingInProcess.some((function(e){return e===t.id})),onClick:function(){e.props.unfollow(t.id)}},"Unfollow"):e.props.followingInProcess.some((function(e){return e===t.id}))?o.a.createElement("div",{className:Ie.a.preloader},o.a.createElement(O,null)):o.a.createElement("button",{disabled:e.props.followingInProcess.some((function(e){return e===t.id})),onClick:function(){e.props.follow(t.id)}},"Follow"))))}))))}}]),a}(o.a.Component),Fe=a(134),Se=Object(Fe.a)((function(e){return e.Users.users}),(function(e){return e})),Te=function(e){return e.Users.count},we=function(e){return e.Users.totalCount},Ae=function(e){return e.Users.page},Ce=function(e){return e.Users.shortPages},Ue=function(e){return e.Users.isFetching},Re=function(e){return e.Users.followingInProcess},Be={setPage:function(e){return{type:"SET-PAGE",page:e}},setShortPages:function(e){return{type:"SET-SHORT-PAGES",shortPages:e}},switchLeftPage:function(e){return{type:"SWITCH-LEFT-PAGE",switchLeftPage:e}},switchRightPage:function(e){return{type:"SWITCH-RIGHT-PAGE",switchRightPage:e}},requestUsers:function(e,t){return function(a){a(Pe(!0)),$(e,t).then((function(e){a({type:"SET-USERS",users:e.items}),a({type:"SET-TOTAL-COUNT",totalCount:e.totalCount}),a(Pe(!1))}))}},follow:function(e){return function(t){t(je(!0,e)),te(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"FOLLOW-USER",id:e}}(e)),t(je(!1,e))}))}},unfollow:function(e){return function(t){t(je(!0,e)),ee(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"UNFOLLOW-USER",id:e}}(e)),t(je(!1,e))}))}}},ke=Object(ve.d)(Object(ge.b)((function(e){return{users:Se(e),count:Te(e),totalCount:we(e),page:Ae(e),shortPages:Ce(e),toLeftPage:e.Users.toLeftPage,toRightPage:e.Users.toRightPage,isFetching:Ue(e),followingInProcess:Re(e)}}),Be),Ee)(ye),Ge=a(12),xe=a.n(Ge);var Me,De=function(e){return o.a.createElement("div",{className:xe.a.NavBar},o.a.createElement(p.b,{to:"/",className:xe.a.Logo},"Social Web"),e.isAuth?o.a.createElement("div",{className:xe.a.navs,style:{gridTemplateColumns:"repeat(4, 1fr)"}},o.a.createElement(p.b,{to:"/profile",className:xe.a.navItem},"Profile"),o.a.createElement(p.b,{to:"/friends",className:xe.a.navItem},"Friends"),o.a.createElement(p.b,{to:"/users",className:xe.a.navItem},"Users"),o.a.createElement("div",{className:xe.a.navItem},o.a.createElement("div",{className:"".concat(xe.a.userStateWrapper," ").concat(xe.a.logout)},o.a.createElement("div",{className:xe.a.userState,onClick:e.logout},o.a.createElement("div",null,"Logout"),o.a.createElement("div",{className:xe.a.userDataImage},o.a.createElement("img",{src:"http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png",alt:"profile-image"}))),o.a.createElement(o.a.Fragment,null)))):o.a.createElement("div",{className:xe.a.navs,style:{gridTemplateColumns:"3fr 1fr"}},o.a.createElement("div",{className:xe.a.navItem}),o.a.createElement("div",{className:xe.a.navItem},o.a.createElement("div",{className:"".concat(xe.a.userStateWrapper," ").concat(xe.a.login)},o.a.createElement("div",{className:xe.a.userState},o.a.createElement(p.b,{to:"/login"},o.a.createElement("div",null,"Login")),o.a.createElement("div",{className:xe.a.userDataImage},o.a.createElement("img",{src:"http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png",alt:"profile-image"}))),o.a.createElement(o.a.Fragment,null)))))},We={data:{id:null,email:null,login:null},isFetching:!1,isAuth:!1},He=function(e,t){return{type:"SET-USER-DATA",payload:{data:e,isAuth:t}}},ze=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},Ve=function(){return function(e){return e(ze(!0)),se().then((function(t){0===t.resultCode&&e(He(t.data,!0)),e(ze(!1))}))}},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(J.a)(Object(J.a)({},e),t.payload);case"TOGGLE-IS-FETCHING":return Object(J.a)(Object(J.a)({},e),{},{isFetching:t.isFetching});default:return e}},Ke=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(De,this.props)}}]),a}(o.a.Component),Ye={logout:function(){return function(e){e(ze(!0)),ie().then((function(t){0===t.resultCode&&e(He(null,!1)),e(ze(!1))}))}}},Ze=Object(ge.b)((function(e){return{isAuth:e.auth.isAuth,isFetching:e.auth.isFetching,login:e.auth.login}}),Ye)(Ke),Je=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=[];this.props.friends.map((function(t){Q.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(t)).then((function(t){e.push(t.data.fullName)}))}))}},{key:"render",value:function(){return console.log(this.name),o.a.createElement("div",null,this.name)}}]),a}(o.a.Component),Qe={friends:[],count:100,totalCount:1,page:1,isFetching:!1},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UNFOLLOW-FRIEND":return Object(J.a)(Object(J.a)({},e),{},{users:e.friends.map((function(e){return e.id===t.id?Object(J.a)(Object(J.a)({},e),{},{followed:!1}):e}))});case"SET-FRIENDS":return Object(J.a)(Object(J.a)({},e),{},{friends:t.friends});case"SET-PAGE":return Object(J.a)(Object(J.a)({},e),{},{page:t.page});case"SET-TOTAL-COUNT":return Object(J.a)(Object(J.a)({},e),{},{totalCount:t.totalCount});case"TOGGLE-IS-FETCHING":return Object(J.a)(Object(J.a)({},e),{},{isFetching:t.isFetching});default:return e}},$e=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(Je,this.props)}}]),a}(o.a.Component),et={unfollowFriend:function(e){return{type:"UNFOLLOW-FRIEND",id:e}},setFriends:function(e){return{type:"SET-FRIENDS",friends:e}},setPage:function(e){return{type:"SET-PAGE",page:e}},setTotalCount:function(e){return{type:"SET-TOTAL-COUNT",totalCount:e}},toggleIsFetching:function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}}},tt=Object(ge.b)((function(e){return{friends:e.Users.friends,count:e.Friends.count,totalCount:e.Friends.totalCount,page:e.Friends.page,isFetching:e.Users.isFetching}}),et)($e),at=a(27),nt=a.n(at),ot=S(30),rt=(Me=8,function(e){if(e&&e.length<Me)return"Min length is ".concat(Me," symbols.")}),st=Object(L.a)({form:"login"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit,className:nt.a.Form},o.a.createElement("div",null,o.a.createElement(j.a,{className:nt.a.Field,type:"text",placeholder:"Email",name:"email",component:U,validate:[F,ot]})),o.a.createElement("div",null,o.a.createElement(j.a,{className:nt.a.Field,type:"password",placeholder:"Password",name:"password",component:U,validate:[F,rt]})),e.error&&o.a.createElement("div",{className:A.a.commonError},e.error),o.a.createElement("div",{className:nt.a.controls},o.a.createElement("div",{style:{color:"#0e1d27",fontWeigh:"bolder",fontSize:"1em"}},o.a.createElement(j.a,{className:nt.a.rememberMe,type:"checkbox",name:"rememberMe",component:"input"}),"Remember me"),o.a.createElement("button",{className:nt.a.btn},"Login")))})),ct=Object(ge.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e){return function(t){t(ze(!0)),ce(e).then((function(e){if(0===e.resultCode)t(Ve());else if(1===e.resultCode){var a=e.messages.length>0?e.messages[0]:"Some error.",n=Object(y.b)("login",{_error:a});t(n)}t(ze(!1))}))}}})((function(e){return e.isAuth?o.a.createElement(m.a,{to:"/profile"}):o.a.createElement("div",{className:nt.a.Login},o.a.createElement("div",{className:nt.a.loginArea},o.a.createElement("h1",null,"LOGIN"),o.a.createElement(st,{onSubmit:function(t){e.login(t)}})))})),it={initialized:!1},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED-SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{initialized:!0});default:return e}},ut=(a(289),function(e){return o.a.createElement("div",null,o.a.createElement("div",{id:"bg"}),o.a.createElement("div",{id:"world"},o.a.createElement("div",{id:"mooseRotator"},o.a.createElement("div",{id:"mooseTranslator"},o.a.createElement("div",{id:"mooseShadow"}),o.a.createElement("div",{id:"moose"},o.a.createElement("div",{id:"mooseBody"},o.a.createElement("div",{id:"mooseFront"},o.a.createElement("div",{id:"mooseFront_a",className:"mooseFrontItem"}),o.a.createElement("div",{id:"mooseFront_b",className:"mooseFrontItem"}),o.a.createElement("div",{id:"mooseFront_c",className:"mooseFrontItem"}),o.a.createElement("div",{id:"mooseFront_d",className:"mooseFrontItem"}),o.a.createElement("div",{id:"mooseFront_e",className:"mooseFrontItem"}),o.a.createElement("div",{id:"mooseFront_f",className:"mooseFrontItem"})),o.a.createElement("div",{id:"mooseBack"},o.a.createElement("div",{id:"mooseBack_a",className:"mooseBackItem"}),o.a.createElement("div",{id:"mooseBack_b",className:"mooseBackItem"}),o.a.createElement("div",{id:"mooseBack_c",className:"mooseBackItem"}),o.a.createElement("div",{id:"mooseBack_d",className:"mooseBackItem"}),o.a.createElement("div",{id:"mooseBack_e",className:"mooseBackItem"}),o.a.createElement("div",{id:"mooseBack_f",className:"mooseBackItem"})),o.a.createElement("div",{id:"mooseLeft"},o.a.createElement("div",{id:"mooseLeft_a",className:"mooseLeftItem"}),o.a.createElement("div",{id:"mooseLeft_b",className:"mooseLeftItem"}),o.a.createElement("div",{id:"mooseLeft_c",className:"mooseLeftItem"}),o.a.createElement("div",{id:"mooseLeft_d",className:"mooseLeftItem"})),o.a.createElement("div",{id:"mooseRight"},o.a.createElement("div",{id:"mooseRight_a",className:"mooseRightItem"}),o.a.createElement("div",{id:"mooseRight_b",className:"mooseRightItem"}),o.a.createElement("div",{id:"mooseRight_c",className:"mooseRightItem"}),o.a.createElement("div",{id:"mooseRight_d",className:"mooseRightItem"})),o.a.createElement("div",{id:"mooseTop"},o.a.createElement("div",{id:"mooseTop_a",className:"mooseTopItem"}),o.a.createElement("div",{id:"mooseTop_b",className:"mooseTopItem"}),o.a.createElement("div",{id:"mooseTop_c",className:"mooseTopItem"}),o.a.createElement("div",{id:"mooseTop_d",className:"mooseTopItem"})),o.a.createElement("div",{id:"mooseBottom"},o.a.createElement("div",{id:"mooseBottom_a",className:"mooseBottomItem"}),o.a.createElement("div",{id:"mooseBottom_b",className:"mooseBottomItem"}),o.a.createElement("div",{id:"mooseBottom_c",className:"mooseBottomItem"}),o.a.createElement("div",{id:"mooseBottom_d",className:"mooseBottomItem"}))),o.a.createElement("div",{id:"mooseLegLeft"},o.a.createElement("div",{id:"mooseLegLeft_a",className:"mooseLegLeftItem mooseBottomItem"}),o.a.createElement("div",{id:"mooseLegLeft_b",className:"mooseLegLeftItem mooseLeftItem"}),o.a.createElement("div",{id:"mooseLegLeft_c",className:"mooseLegLeftItem mooseRightItem"}),o.a.createElement("div",{id:"mooseLegLeft_d",className:"mooseLegLeftItem mooseFrontItem"}),o.a.createElement("div",{id:"mooseLegLeft_e",className:"mooseLegLeftItem mooseBackItem"}),o.a.createElement("div",{id:"mooseLegLeft_f",className:"mooseLegLeftItem mooseTopItem"})),o.a.createElement("div",{id:"mooseLegRight"},o.a.createElement("div",{id:"mooseLegRight_a",className:"mooseLegRightItem mooseBottomItem"}),o.a.createElement("div",{id:"mooseLegRight_b",className:"mooseLegRightItem mooseLeftItem"}),o.a.createElement("div",{id:"mooseLegRight_c",className:"mooseLegRightItem mooseRightItem"}),o.a.createElement("div",{id:"mooseLegRight_d",className:"mooseLegRightItem mooseFrontItem"}),o.a.createElement("div",{id:"mooseLegRight_e",className:"mooseLegRightItem mooseBackItem"}),o.a.createElement("div",{id:"mooseLegRight_f",className:"mooseLegRightItem mooseTopItem"})))))))}),mt=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?o.a.createElement("div",{className:"App"},o.a.createElement(Ze,null),o.a.createElement(m.d,null,o.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return o.a.createElement(_e,null)}}),o.a.createElement(m.b,{path:"/friends",render:function(){return o.a.createElement(tt,null)}}),o.a.createElement(m.b,{path:"/users",render:function(){return o.a.createElement(ke,null)}}),o.a.createElement(m.b,{path:"/login",render:function(){return o.a.createElement(ct,null)}}))):o.a.createElement(ut,null)}}]),a}(o.a.Component),pt=Object(ve.d)(m.g,Object(ge.b)((function(e){return{initialized:e.App.initialized}}),{initializeApp:function(){return function(e){var t=e(Ve());Promise.all([t]).then((function(){e({type:"INITIALIZED-SUCCESS"})}))}}}))(mt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var dt=a(135),ft=a(126),gt=Object(ve.c)({Profile:de,Users:Le,auth:qe,Friends:Xe,form:ft.a,App:lt}),ht=Object(ve.e)(gt,Object(ve.a)(dt.a));window.store=ht;var Et=ht;s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p.a,null,o.a.createElement(ge.a,{store:Et},o.a.createElement(pt,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,a){e.exports={Profile:"Profile_Profile__31unx",profileArea:"Profile_profileArea__1TzQu",avatar:"Profile_avatar__3mjQw",ava:"Profile_ava__2sW2w",posts:"Profile_posts__KKBI1",description:"Profile_description__1gsND"}},37:function(e,t,a){e.exports={formField:"FormsFields_formField__1ioKc",error:"FormsFields_error__ywANb",commonError:"FormsFields_commonError__34Xk3"}},38:function(e,t,a){e.exports={Messages:"Messages_Messages__fNY0P",messagesArea:"Messages_messagesArea__ugZXV",Users:"Messages_Users__11ljE",userName:"Messages_userName__dgv7v",userMessages:"Messages_userMessages__1_5e2",Message:"Messages_Message__2_UUp"}},46:function(e,t,a){e.exports={popup:"Popup_popup__1FENy",popupBody:"Popup_popupBody__1TKoh",popupInner:"Popup_popupInner__2Jb_P",close:"Popup_close__7D4_f",open:"Popup_open__1zFTy"}}},[[161,1,2]]]);
//# sourceMappingURL=main.d341895b.chunk.js.map