import React from 'react';

import "./style.css";

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