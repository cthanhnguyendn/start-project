import React, { Component ,PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router'
import {login} from '../../reducers/authentication';

const submit = (values, dispatch) => {
    const { username, password } = values;
    return new Promise((resolve, reject) => {
        if(!username){
            reject({username:"Nhập User Name",_error: 'Login failed!'});
        }else if(!password){
            reject({password:"Nhập Password",_error: 'Login failed!'});
        }else {
            dispatch(login(username, password));
            resolve()
        }
    })
}
const fields =["username","password"]
class LoginForm extends Component {
  render() {
      const { fields: { username, password }, error, resetForm, handleSubmit, submitting } = this.props
    return (
      <div>
          <div className="middle-box text-center loginscreen animated fadeInDown">
              <div>
                  <h3>Welcome to IN+</h3>
                  <p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.
                  </p>
                  <p>Login in. To see it in action.</p>
                  <form onSubmit={handleSubmit(submit)} onSubmit={handleSubmit(submit)} className="pure-form pure-form-aligned">
                      <div className={username.touched && username.error?"form-group has-error":"form-group"}>
                          <input className="form-control" type="text" placeholder="Username" {...username}/>
                          {username.touched && username.error &&  <label className="error">{username.error}</label>}
                      </div>
                      <div className={password.touched && password.error?"form-group has-error":"form-group"}>
                          <input className="form-control" type="password" placeholder="Password" {...password}/>
                          {password.touched && password.error &&  <label className="error">{password.error}</label>}
                      </div>
                      {error && <label className="error">{error}</label>}
                      <button disabled={submitting} type="submit" className="btn btn-primary block full-width m-b">{submitting ? <i/> : <i/>}Login</button>
                      <button disabled={submitting} type="submit" className="btn btn-primary block full-width m-b"  onClick={resetForm}>{submitting ? <i/> : <i/>}Reset</button>
                      <a href="#"><small>Forgot password?</small></a>
                      <p className="text-muted text-center"><small>Do not have an account?</small></p>
                      <Link to="/register" className="btn btn-sm btn-white btn-block" disabled={submitting}>Create an account</Link>
                  </form>
                  <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 © 2014</small> </p>
              </div>
          </div>
      </div>
    );
  }
}
LoginForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
}
export default reduxForm({form:"loginForm",fields},
    (state)=>{state.users})(LoginForm);
