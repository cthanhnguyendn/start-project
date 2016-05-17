/**
 * Created by THANHBEO on 5/14/2016.
 */
import React,{PropTypes} from 'react';
import {reduxForm} from 'redux-form';
const fields = ["userName","password","repeatPassword"]
import {submitUser} from '../../reducers/users'
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
  render() {
      const { fields: { userName, password , repeatPassword }, error, resetForm, handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(submitUser)}>
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
                      <td><input placeholder="Password" {...password}/>
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
              <button type="button" disabled={submitting} onClick={resetForm} >cancel</button>
          </div>
      </form>
    );
  }
});

export default reduxForm({form:"addUserForm",fields,validate})(UserForm);
