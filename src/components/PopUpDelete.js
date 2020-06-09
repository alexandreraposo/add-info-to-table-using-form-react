import React from 'react';

export class PopUpDelete extends React.Component {
    render() {
        return(
            <div className="pop-up-container">
                <div className="pop-up-delete">
                  <button className="close" onClick={this.props.popUpDelete}>x</button>
                  <h3 className="text-delete">Deseja mesmo eliminar essa tecnologia?</h3>
                  <button className="btn-delete" type="submit" onClick={this.props.popUpDelete}>Delete</button>
                  <button className="btn-cancel" type="submit" onClick={this.props.popUpDelete}>Cancel</button>
                </div>
              </div>
        );
    }
}