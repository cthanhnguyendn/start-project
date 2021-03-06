/**
 * Created by THANHBEO on 5/12/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import {loadUser,submitUser,innitForm} from '../../../reducers/users'
import UserForm from '../../component/UserForm'
import UserTable from '../../component/Common/DataTable'

var UserManagementPage = React.createClass({
    componentDidMount() {
        this.props.loadUser({});
    },
    render() {
        return (
            <div className="wrapper wrapper-content  animated fadeInRight">
                <div className="row">
                    <div className="ibox">
                        <div className="ibox-content">
                            <UserTable list={this.props.content} {...this.props}/>
                            <UserForm loadUser={this.props.loadUser}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default connect(state=>state.users, {loadUser,innitForm})(UserManagementPage)
