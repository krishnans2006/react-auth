import React, { useState, useEffect } from "react";
import FormElement  from "./FormElement";

import {useSelector, useDispatch} from "react-redux";

const planMappings = {
    "-1": [],
    0: ["Upload"],
    1: ["Upload", "Subtitles"],
    2: ["Upload", "Subtitles", "Transcription"]
}

const CustomizeForm = (Component, props) => {
    const plan = useSelector(state => state.user.value).plan;
    const componentName = props.name;
    if (planMappings[plan.toString()].includes(componentName)) {
        props.disabled = false;
    } else {
        props.disabled = true;
    }
    return <Component {...props} />;
};

export default CustomizeForm;
