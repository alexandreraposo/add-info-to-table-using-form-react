import React from 'react';

import "./InputExperience.css";

export const InputExperience = (props) => {
    return(
        <>
        <label className="label-exp" htmlFor="experience">Experiência:</label>
          <br />
          <input
            className="input-exp"
            name="experience"
            type="text"
            value={props.value}
            onChange={props.onChange}
          />
        </>
    );
};