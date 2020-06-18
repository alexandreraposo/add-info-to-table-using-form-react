import React from 'react';

import "./style.css";

export const InputTechnology = (props) => {
    return(
        <>
        <label className="label-tech" htmlFor="technology">Tecnologia:</label>
          <br />
          <input
            className="input-tech"
            name="technology"
            type="text"
            value={props.value}
            onChange={props.onChange}
          />
        </>
    );
};