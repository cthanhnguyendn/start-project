/**
 * Created by THANHBEO on 5/17/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
const fields = ["userName", "password", "repeatPassword"]
import {register} from '../../../reducers/users'
const validate = values => {
    const errors = {}
    if (values.password != values.repeatPassword) {
        errors.repeatPassword = "Repeat Password is not match"
    }
    return errors
}
const RegisterPage = React.createClass({

    render() {
        const { fields: { userName, password , repeatPassword }, error, resetForm, handleSubmit, submitting } = this.props
        return (
            <div className="middle-box text-center loginscreen   animated fadeInDown">
                <form onSubmit={handleSubmit(register)}>
                <div>
                    <div>

                    </div>
                    <h3>Register to IN+</h3>
                    <p>Create account to see it in action.</p>
                    <form className="m-t" role="form" action="http://webapplayers.com/inspinia_admin-v2.3/login.html">
                        <div className={userName.touched && username.error?"form-group has-error":"form-group"}>
                            <input type="text" className="form-control" placeholder="Name" required="" {...userName}/>
                            {userName.touched && username.error &&  <label className="error">{userName.error}</label>}
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required="" {...password}/>
                            {password.touched && password.error &&  <label className="error">{password.error}</label>}
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required="" {...repeatPassword}/>
                            {repeatPassword.touched && repeatPassword.error &&  <label className="error">{repeatPassword.error}</label>}
                        </div>
                        <button disabled={submitting} type="submit" className="btn btn-primary block full-width m-b">Register</button>
                        <button className="btn btn-primary block full-width m-b" type="button" disabled={submitting} onClick={resetForm}>cancel</button>

                        <p className="text-muted text-center"><small>Already have an account?</small></p>
                        <a className="btn btn-sm btn-white btn-block" href="login.html">Login</a>
                    </form>
                    <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 © 2014</small> </p>
                </div>
                </form>
            </div>
        );
    }
});

export default reduxForm({form: "RegisterUserForm", fields, validate})(RegisterPage);
