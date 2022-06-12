import React, { useState, useEffect, useId } from "react";

const AntiFormElement = (props) => {
    const id = useId();
    return (
        <div>
            <input type="text" id={id} placeholder="Cool thing" disabled />
        </div>
    )
}

export default AntiFormElement;
