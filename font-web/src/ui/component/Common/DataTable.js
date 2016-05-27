/**
 * Created by THANHBEO on 5/19/2016.
 */
import React,{Component,PropTypes} from 'react'
import {AutoSizer,FlexTable,FlexColumn} from 'react-virtualized'
import styles from './FlexTable.example.css'



class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex:undefined
        }
        this._rowClassName = this._rowClassName.bind(this);
        this._onRowClick = this._onRowClick.bind(this);
    }
    _rowClassName ({ index }) {
        if (index < 0) {
            return "headerRow"
        } else {
            return ((index==this.state.selectedIndex?"selected ":"")+(index % 2 === 0 ? "evenRow" : "oddRow"))
        }
    }
    _onRowClick({index}){
        this.setState({selectedIndex:index})
    }

    render() {
        const {list} = this.props
        return (
            <AutoSizer disableHeight>
                {({ width }) => (
                    <FlexTable
                        width={width}
                        height={300}
                        headerHeight={40}
                        rowHeight={40}
                        rowCount={list.length}
                        rowGetter={({index}) => list[index]}
                        rowClassName={this._rowClassName}
                        onRowClick={this._onRowClick}
                    >
                        <FlexColumn
                            label='userName'
                            dataKey='userName'
                            width={100}
                            cellRenderer={
                            ({ cellData, columnData, dataKey, rowData, rowIndex }) =>
                                {
                                    return(<div>{rowData.userName}</div>)
                                }
                        }
                        />
                        <FlexColumn
                            width={200}
                            label='Description'
                            dataKey='description'
                            flexGrow={1}
                            cellRenderer={
                            ({ cellData, columnData, dataKey, rowData, rowIndex }) =>
                                (<div><a href="#" onClick={(e)=>{
                                        e.preventDefault();
                                        this.props.innitForm({pojo:rowData.userId})
                                    }}><i className="fa fa-edit"></i></a></div>)
                            }
                        />
                    </FlexTable>
                )}
            </AutoSizer>)
    }
}

export default DataTable;