import React, { useState, useEffect, useId } from "react";

const Button = () => {
    const id = useId();
    return (
        <div>
            <button disabled>Cool button</button>
        </div>
    )
}

export default Button;
