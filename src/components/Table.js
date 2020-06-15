import React from 'react';

export const Table = (props) => {
    return(
        <div className="container-table">
            <table className="table">
                <thead>
                    <tr>
                        {props.myColumn}
                    </tr>
                </thead>
                <tbody>
                    {props.myRow}
                </tbody>
            </table>
        </div>
    );
};