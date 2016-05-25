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
            <form onSubmit={handleSubmit(register)}>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td>User Name:</td>
                            <td><input placeholder="User Name" {...userName} />
                                {userName.touched && userName.error && <div>{userName.error}</div>}</td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td><input type="password" placeholder="Password" {...password}/>
                                {password.touched && password.error && <div>{password.error}</div>}
                            </td>
                        </tr>
                        <tr>
                            <td>Repeat Password:</td>
                            <td><input type="password" placeholder="Repeat Password" {...repeatPassword}/>
                                {repeatPassword.touched && repeatPassword.error && <div>{repeatPassword.error}</div>}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button disabled={submitting}>Submit</button>
                    <button type="button" disabled={submitting} onClick={resetForm}>cancel</button>
                </div>
            </form>
        );
    }
});

export default reduxForm({form: "RegisterUserForm", fields, validate})(RegisterPage);
