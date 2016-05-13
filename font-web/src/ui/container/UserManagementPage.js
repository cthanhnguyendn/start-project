/**
 * Created by THANHBEO on 5/12/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import {loadUser} from '../../reducers/users'

const UserManagementPage = React.createClass({
    componentDidMount() {
        this.props.loadUser();
    },
    render() {


        return (
            <div>User Management</div>
        );
    }
});

export default connect((state)=>(state.users),(loadUser))(UserManagementPage)
