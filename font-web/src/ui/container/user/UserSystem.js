/**
 * Created by THANHBEO on 5/19/2016.
 */
import React from 'react';

const UserSystem = React.createClass({
  render() {
    return (
        <div className="container">
            <div className="row wrapper wrapper-content border-bottom white-bg page-heading">
                <div className="">
                    <div className="col-lg-8">
                        <h2>User System</h2>
                        <ol className="breadcrumb">
                            <li>
                                <a href="index-2.html">Home</a>
                            </li>
                            <li>
                                Other Pages
                            </li>
                            <li className="active">
                                <strong>Invoice</strong>
                            </li>
                        </ol>
                    </div>
                    <div className="col-lg-4">
                        <div className="title-action">
                            <a href="#" className="btn btn-white"><i className="fa fa-pencil"></i> Edit </a>
                            <a href="#" className="btn btn-white"><i className="fa fa-check "></i> Save </a>
                            <a href="invoice_print.html" target="_blank" className="btn btn-primary"><i className="fa fa-print"></i> Print Invoice </a>
                        </div>
                    </div>
                </div>

            </div>
            {this.props.children}
        </div>
    );
  }
});

export default UserSystem;
