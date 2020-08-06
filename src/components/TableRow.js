import React from 'react';
import { Link } from "react-router-dom";

const TableRow = ({index,download_url,author,id}) => {
    return (
        <tr>
            <th scope="row">
                {index}
            </th>
            <td>
                <img src={download_url} alt="" />
            </td>
            <td>
                <strong>
                    {author}
                </strong>
            </td>
            <td>
                <Link to={`/details/${id}`} className="btn btn-primary btn-sm">
                    Details
                </Link>
            </td>
        </tr>      
    )
}

export default TableRow;