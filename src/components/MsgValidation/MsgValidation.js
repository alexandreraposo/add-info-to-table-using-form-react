import React from 'react';

import "./style.css";

export const MsgValidation = (props) => {
    return (
        <>
            <p className="msg-empty">{props.msgEmpty}</p>
            <p className="msg-empty-technology">{props.msgEmptyTech}</p>
            <p className="msg-technology-exist">{props.msgTechExist}</p>
            <p className="msg-empty-experience">{props.msgEmptyExp}</p>
        </>
    );
};