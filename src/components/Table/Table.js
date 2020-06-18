import React from 'react';

import "./style.css";

export const Table = (props) => {
    const myColumn = props.tableColumn.map((column) => <th key={column}>{column}</th>);

    const myRow = props.roles.map((role, index) => (
        <tr key={role.tech}>
          <td>{role.tech}</td>
          <td>{role.exp}</td>
          <td>
            <button
              className="btn-removeInfo"
              type="submit"
              onClick={() => props.removePopUpDelete(index)}
            >
              Delete
            </button>
          </td>
        </tr>
      ));

    return(
        <div className="container-table">
            <table className="table">
                <thead>
                    <tr>
                        {myColumn}
                    </tr>
                </thead>
                <tbody>
                    {myRow}
                </tbody>
            </table>
        </div>
    );
};