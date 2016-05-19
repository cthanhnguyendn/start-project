/**
 * Created by THANHBEO on 5/19/2016.
 */
import React from 'react'
import BasicTable from 'BasicTable'



class DataTable extends BasicTable {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <table className="table table-bordered">
                <thead>

                </thead>
                <tbody>

                </tbody>
            </table>)
    }
}

export default DataTable;