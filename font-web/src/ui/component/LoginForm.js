import React, { Component ,PropTypes} from 'react';
import Translate from 'react-translate-component';
import {reduxForm} from 'redux-form';
import {login} from '../../reducers/authentication';

const LabeledInput = (props) => (
  <div className="pure-control-group">
    <Label value={props.label} position="before">
      <TextInput {...props}/>
    </Label>
  </div>
);

const ErrorPanel = ({messageKey}) => (
  <p className="error-panel">
    <Translate content={messageKey} />
  </p>
);
const submit = (values, dispatch) => {
    const { username, password } = values;
    return new Promise((resolve, reject) => {
        if(!username){
            reject({username:"Nhập User Name",_error: 'Login failed!'});
        }else if(!password){
            reject({password:"Nhập Password",_error: 'Login failed!'});
        }else {
            dispatch(login(username, password));
        }
    })
}
const fields =["username","password"]
class LoginForm extends Component {

  render() {
      const { fields: { username, password }, error, resetForm, handleSubmit, submitting } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(submit)} className="pure-form pure-form-aligned">
            <div>
                <label>Username</label>
                <div>
                    <input type="text" placeholder="Username" {...username}/>
                </div>
                {username.touched && username.error && <div>{username.error}</div>}
            </div>
            <div>
                <label>Password</label>
                <div>
                    <input type="password" placeholder="Password" {...password}/>
                </div>
                {password.touched && password.error && <div>{password.error}</div>}
            </div>
            {error && <div>{error}</div>}
            <div>
                <button type="submit" disabled={submitting}>
                    {submitting ? <i/> : <i/>} Log In
                </button>
                <button type="button" disabled={submitting} onClick={resetForm}>
                    Clear Values
                </button>
            </div>
        </form>
      </div>
    );
  }

  handleSubmit(formData) {

  }

}
LoginForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
}
export default reduxForm("loginForm",fields,LoginForm);
