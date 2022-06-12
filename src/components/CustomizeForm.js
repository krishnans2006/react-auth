import React, { useState, useEffect } from "react";
import FormElement  from "./FormElement/FormElement";

import {useSelector, useDispatch} from "react-redux";
import Button from "./Button/Button";
import Paragraph from "./Paragraph";

const planMappings = {
    "-1": [],
    0: [FormElement],
    1: [FormElement, Button],
    2: [FormElement, Button, Paragraph]
}

const CustomizeForm = (Component, Replacement) => {
    const plan = useSelector(state => state.user.value).plan;
    if (planMappings[plan.toString()].includes(Component)) {
        return <Component />;
    } else {
        return <Replacement />;
    }
};

export default CustomizeForm;
