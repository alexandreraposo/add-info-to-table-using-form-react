import React from 'react';

import "./ButtonAdd.css";

export const ButtonAdd = (props) => {
    return(
        <>
        <button
            className="btn-addInfo"
            type="submit"
            onClick={props.onClick}
        >ADD
        </button>
        </>
    );
};