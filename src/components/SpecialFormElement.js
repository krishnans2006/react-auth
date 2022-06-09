import React, { useState, useEffect, useId } from "react";

const SpecialFormElement = (props) => {
    const id = useId();
    return (
        <div>
            <label for={id}>{props.name}</label>
            <input type="text" id={id} placeholder={"Enter " + props.name} disabled={props.disabled} />
            {props.disabled && <span>This feature is not available for your plan</span>}
            {!props.disabled && <span>This feature is available for your plan! </span>}
        </div>
    )
}

export default SpecialFormElement;
