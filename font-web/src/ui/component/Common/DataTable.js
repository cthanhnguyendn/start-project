/**
 * Created by THANHBEO on 5/19/2016.
 */
import React from 'react'
import BasicTable from 'BasicTable'
import {FlexTable,AutoSizer,FlexColumn} from 'react-virtualized'



class DataTable extends BasicTable {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <AutoSizer disableHeight>
                {({ width }) => (
                    <FlexTable
                        ref='Table'
                        headerHeight={50}
                        height={100}
                        rowClassName={::this._rowClassName}
                        rowHeight={useDynamicRowHeight ? this._getRowHeight : rowHeight}
                        rowGetter={rowGetter}
                        rowCount={rowCount}
                        scrollToIndex={scrollToIndex}
                        sort={this._sort}
                        sortBy={sortBy}
                        sortDirection={sortDirection}
                        width={width}
                    >
                        {!hideIndexRow &&
                        <FlexColumn
                            label='Index'
                            cellDataGetter={
                      ({ columnData, dataKey, rowData }) => rowData.index
                    }
                            dataKey='index'
                            disableSort={!this._isSortEnabled()}
                            width={60}
                        />
                        }
                        <FlexColumn
                            dataKey='name'
                            disableSort={!this._isSortEnabled()}
                            headerRenderer={this._headerRenderer}
                            width={90}
                        />
                        <FlexColumn
                            width={210}
                            disableSort
                            label='The description label is really long so that it will be truncated'
                            dataKey='random'
                            className={styles.exampleColumn}
                            cellRenderer={
                    ({ cellData, columnData, dataKey, rowData, rowIndex }) => <div><span>test</span> {cellData}</div>
                  }
                            flexGrow={1}
                        />
                    </FlexTable>
                )}
            </AutoSizer>)
    }
}

export default DataTable;