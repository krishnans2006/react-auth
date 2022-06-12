import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux"
import FormElement from "../components/FormElement/FormElement";
import CustomizeForm from "../components/CustomizeForm";
import AntiFormElement from "../components/FormElement/AntiFormElement";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button/Button";
import AntiButton from "../components/Button/AntiButton";
import Null from "../components/Null";

export const userPlanContext = React.createContext();

const CoolForm = () => {
    const user = useSelector(state => state.user.value);
    let formElements = [
        CustomizeForm(FormElement, AntiFormElement),
        CustomizeForm(Button, AntiButton),
        CustomizeForm(Paragraph, Null)
    ]
    return (
        <div>
            <h1>Cool Form</h1>
            <userPlanContext.Provider value={user.plan}>
                {formElements}
            </userPlanContext.Provider>
        </div>
    )
}

export default CoolForm;
