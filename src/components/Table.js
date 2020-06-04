import React from 'react';

class Table extends React.Component {
    render() {
        return(
            <div>
                <table border="1">
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
                        {this.props.myRow}
                    </thead>
                </table>
          </div>
        );
    }
}

export default Table;