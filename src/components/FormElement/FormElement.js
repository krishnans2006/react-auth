import React, { useState, useEffect, useId } from "react";

const FormElement = () => {
    const id = useId();
    return (
        <div>
            <input type="text" id={id} placeholder="Cool thing" />
        </div>
    )
}

export default FormElement;
