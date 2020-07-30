import React from 'react';
import style from './Login.module.css';
import errorStyle from '../Common/FormsFields/FormsFields.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsFields/FormsFields";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLength30 = maxLengthCreator(30);
const minLength8 = minLengthCreator(8);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.Form}>
            <div>
                <Field
                    className={style.Field}
                    type="text"
                    placeholder="Email"
                    name={"email"}
                    component={Input}
                    validate={[required, maxLength30]}
                />
            </div>
            <div>
                <Field
                    className={style.Field}
                    type="password"
                    placeholder="Password"
                    name={"password"}
                    component={Input}
                    validate={[required, minLength8]}
                />
            </div>
            {
                props.error &&
                <div className={errorStyle.commonError}>
                    {props.error}
                </div>
            }
            <div className={style.controls}>
                <div style={{color: `#0e1d27`, fontWeigh: `bolder`, fontSize: `1em`}}>
                    <Field className={style.rememberMe}
                           type="checkbox"
                           name={"rememberMe"}
                           component={"input"}
                    />
                    Remember me
                </div>
                <button className={style.btn}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData);
    }

    if (props.isAuth) return <Redirect to={"/profile"}/>

    return (
        <div className={style.Login}>
            <div className={style.loginArea}>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);