/**
 * Created by THANHBEO on 5/14/2016.
 */
import React,{PropTypes} from 'react';
import {reduxForm} from 'redux-form';
const fields = ["userName","password","repeatPassword"]
import {submitUser,innitForm} from '../../reducers/users'
const validate = values => {
    const errors = {}
    if(values.password!=values.repeatPassword){
        errors.repeatPassword = "Repeat Password is not match"
    }
    return errors
}
const UserForm = React.createClass({
    propTypes:{
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        error: PropTypes.string,
        resetForm: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired
    },
    componentDidMount() {
      this.props.dispatch(innitForm());
    },

  render() {
      const { fields: { userName, password , repeatPassword }, error, resetForm, handleSubmit, submitting } = this.props
    return (
        <fieldset>
            <div className="ibox">
                <div className="ibox-title">
                    <h5>Create new User</h5>
                </div>
                <div className="ibox-content">
                    <form className="form-horizontal" onSubmit={handleSubmit(submitUser)}>
                        <div className={userName.touched && userName.error?"form-group has-error":"form-group"}>
                            <label className="col-sm-2">User Name:</label>
                            <div className="col-sm-10">
                                <input className="form-control" placeholder="User Name" {...userName} />
                                {userName.touched && userName.error && <label className="error">{userName.error}</label>}
                            </div>
                        </div>
                        <div className={password.touched && password.error?"form-group has-error":"form-group"}>
                            <label className="col-sm-2">Password:</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="password" placeholder="Password" {...password}/>
                                {password.touched && password.error && <label className="error">{password.error}</label>}
                            </div>
                        </div>
                        <div className={repeatPassword.touched && repeatPassword.error?"form-group has-error":"form-group"}>
                            <label className="col-sm-2">Repeat Password:</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="password" placeholder="Repeat Password" {...repeatPassword}/>
                                {repeatPassword.touched && repeatPassword.error && <label className="error">{repeatPassword.error}</label>}
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary" disabled={submitting}>
                                {submitting?<div className="sk-circle11 sk-circle"></div>:undefined}
                                Submit
                            </button>
                            <button className="btn btn-default" type="button" disabled={submitting} onClick={resetForm} >cancel</button>
                        </div>
                    </form>
                </div>

            </div>

        </fieldset>

    );
  }
});

export default reduxForm({form:"addUserForm",fields,validate})(UserForm);
