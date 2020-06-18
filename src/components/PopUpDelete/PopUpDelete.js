import React from 'react';

import "./style.css";

export const PopUpDelete = (props) => {
  return(
    <div className="pop-up-container">
      <div className="pop-up-delete">
        <button className="close" onClick={props.closePopUpDelete}>x</button>
        <h3 className="text-delete">Deseja mesmo eliminar essa tecnologia?</h3>
        <button className="btn-delete" type="submit" onClick={props.removePopUpDelete}>Delete</button>
        <button className="btn-cancel" type="submit" onClick={props.closePopUpDelete}>Cancel</button>
      </div>
    </div>
  );
};