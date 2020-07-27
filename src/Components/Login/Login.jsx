import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder="Login" name={"login"} component={"input"}/>
            </div>
            <div>
                <Field type="password" placeholder="Password" name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={"input"}/>Remember me
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {

    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onsubmit}/>
        </div>
    )
}



export default Login;