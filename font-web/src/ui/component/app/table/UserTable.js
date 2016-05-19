/**
 * Created by THANHBEO on 5/19/2016.
 */
import React from 'react';

const UserTable = React.createClass({
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Created Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.data.map((item)=> {
                        return (
                            <tr>
                                <td>{item.userName}</td>
                                <td>{item.email}</td>
                                <td>{item.createdDate}</td>
                            </tr>)
                    })
                }
                </tbody>
            </table>
        );
    }
});

export default UserTable;
