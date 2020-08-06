import React from 'react';
import TableHead from './TableHead';

const Table = ({children}) => {
    return (
        <table className="table table-striped">
            <TableHead />
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default Table;