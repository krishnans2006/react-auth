import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux"
import FormElement from "../components/FormElement";
import CustomizeForm from "../components/CustomizeForm";
import SpecialFormElement from "../components/SpecialFormElement";

export const userPlanContext = React.createContext();

const CoolForm = () => {
    const user = useSelector(state => state.user.value);
    let formElements = [
        CustomizeForm(FormElement, {name: "Upload"}),
        CustomizeForm(SpecialFormElement, {name: "Subtitles"}),
        CustomizeForm(FormElement, {name: "Transcription"})
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
