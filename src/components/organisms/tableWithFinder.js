import React from 'react'
import ReactTable from 'react-table'

const TableWithFinder = ({ headerFindersDesc, headerFindersValue, btnFind, data, columns }) => {
    return (
        <div style={{ padding: 10 }}>
            <div style={{ padding: 10, overflowX: 'auto' }}>
                <table>
                    <thead>
                        <tr>
                            {headerFindersDesc.map((header) => (
                                <th scope="col">{header.value}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>{headerFindersValue.map((finder) => (
                            <th scope="row">{finder.value}</th>
                        ))}
                            <th scope="row">
                                {btnFind}
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <ReactTable
                    data={data}
                    columns={columns}
                />
            </div>
        </div>
    )
};

export default TableWithFinder