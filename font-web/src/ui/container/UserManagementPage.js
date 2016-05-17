/**
 * Created by THANHBEO on 5/12/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import {loadUser,submitUser} from '../../reducers/users'
import UserForm from '../component/UserForm'

var UserManagementPage = React.createClass({
    componentDidMount() {
        this.props.loadUser({});
    },
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.content.map((item)=>{
                        return(<tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.password}</td>
                            </tr>)
                    })}
                    </tbody>
                </table>
                <UserForm loadUser={this.props.loadUser}/>
            </div>

        );
    }
});

export default connect(state=>state.users,{loadUser})(UserManagementPage)
