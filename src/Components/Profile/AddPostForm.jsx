import style from "./AddPost.module.css";
import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../Common/FormsFields/FormsFields";

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.addPost}>
            <Field
                placeholder={"New post..."}
                name="newPostText"
                component={Textarea}
                validate={[required, maxLength10]}
            />
            {/*<textarea onChange={props.changePostText} value={props.newPostText}/>*/}
            <button>Отправить</button>
        </form>
    )
}

let ReduxPostFrom = reduxForm({
    form: 'post',
})(PostForm)

const AddPostForm = (props) => {
    let onSubmit = (values, dispatch) => {
        props.addPost(values.newPostText);
        dispatch(reset('post'));
    }
    return (
        <ReduxPostFrom onSubmit={onSubmit}/>
    )
}

export default AddPostForm;