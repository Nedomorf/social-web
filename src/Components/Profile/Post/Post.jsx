import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.Post}>
            {props.post}
        </div>
    )
}

export default Post;