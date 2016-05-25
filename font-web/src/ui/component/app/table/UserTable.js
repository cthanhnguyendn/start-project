/**
 * Created by THANHBEO on 5/19/2016.
 */
import React,{PropTypes} from 'react';

const UserTable = React.createClass({
    propTypes:{
        innitForm:PropTypes.func.isRequired
    },
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Created Date</th>
                    <th>Action</th>
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
                                <td>
                                    <a href="#" onClick={(e)=>{
                                        e.preventDefault();
                                        this.props.innitForm({pojo:item})
                                    }}><i className="fa fa-edit"></i></a>
                                </td>
                            </tr>)
                    })
                }
                </tbody>
            </table>
        );
    }
});

export default UserTable;
