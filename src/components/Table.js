import React from 'react';

export const Table = (props) => {
    return(
        <div className="container-table">
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Tecnologia
                        </th>
                        <th>
                            Experiência
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                    {props.myRow}
                </thead>
            </table>
        </div>
    );
};