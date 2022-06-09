import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux"
import FormElement from "../components/FormElement";

export const userPlanContext = React.createContext();

const CoolForm = () => {
    const user = useSelector(state => state.user.value);

    return (
        <div>
            <h1>Cool Form</h1>
            <userPlanContext.Provider value={user.plan}>
                <FormElement />
            </userPlanContext.Provider>
        </div>
    )
}

export default CoolForm;
