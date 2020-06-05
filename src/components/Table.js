import React from 'react';

export class Table extends React.Component {
    render() {
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
                        {this.props.myRow}
                    </thead>
                </table>
          </div>
        );
    }
}