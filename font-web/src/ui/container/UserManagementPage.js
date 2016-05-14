/**
 * Created by THANHBEO on 5/12/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import {loadUser} from '../../reducers/users'

var UserManagementPage = React.createClass({
    componentDidMount() {
        this.props.dispatch(loadUser({}));
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
                    {this.props.listUser.map((item)=>{
                        return(<tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.password}</td>
                            </tr>)
                    })}
                    </tbody>
                </table>

            </div>

        );
    }
});

export default connect(state=>state.users)(UserManagementPage)
