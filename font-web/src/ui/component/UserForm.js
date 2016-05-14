/**
 * Created by THANHBEO on 5/14/2016.
 */
import React from 'react';
import {reduxForm} from 'redux-form';
const fields = ["name","password"]
const UserForm = React.createClass({
  render() {
    return (
      <form>
          <div>
              <table>
                  <tr>
                      <td>User Name:</td>
                      <td><input placeholder="User Name"/></td>
                  </tr>
                  <tr>
                      <td>Password:</td>
                      <td><input placeholder="Password"/></td>
                  </tr>
                  <tr>
                      <td>Repeat Password:</td>
                      <td><input placeholder="Repeat Password"/></td>
                  </tr>
              </table>
              <button>Submit</button>
              <button type="button">cancel</button>
          </div>
      </form>
    );
  }
});

export default ReduxForm({form:"addUserForm",fields})(UserForm);
