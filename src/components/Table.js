import React from 'react';

class Table extends React.Component {
    render() {
        return(
            <div>
                <table>
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
                    </thead>
                </table>
          </div>
        );
    }
}

export default Table;