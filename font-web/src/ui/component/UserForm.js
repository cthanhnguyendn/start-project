/**
 * Created by THANHBEO on 5/14/2016.
 */
import React from 'react';
import {reduxForm} from 'redux-form';
const fields = ["userName","password","repeatPassword"]
import {submitUser} from '../../reducers/users'
const UserForm = React.createClass({
  submit(){
      return new Promise((resolve, reject) => {
          if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
              reject({ username: 'User does not exist', _error: 'Login failed!' })
          } else if (values.password !== 'redux-form') {
              reject({ password: 'Wrong password', _error: 'Login failed!' })
          } else {
              dispatch(showResults(values))
              resolve()
          }
      })
  },
  render() {
      const { fields: { username, password , repeatPassword }, error, resetForm, handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(submitUser)}>
          <div>
              <table>
                  <tbody>
                  <tr>
                      <td>User Name:</td>
                      <td><input placeholder="User Name" {...username} /></td>
                  </tr>
                  <tr>
                      <td>Password:</td>
                      <td><input placeholder="Password" {...password}/></td>
                  </tr>
                  <tr>
                      <td>Repeat Password:</td>
                      <td><input placeholder="Repeat Password" {...repeatPassword}/></td>
                  </tr>
                  </tbody>

              </table>
              <button disabled={submitting}>Submit</button>
              <button type="button">cancel</button>
          </div>
      </form>
    );
  }
});

export default reduxForm({form:"addUserForm",fields})(UserForm);
