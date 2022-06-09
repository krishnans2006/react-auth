import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux"

const Profile = () => {
    const planKey = {"-1": "", 0: "Basic", 1: "Pro", 2: "Premium"}
    const user = useSelector(state => state.user.value)
    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Plan: {planKey[user.plan]}</p>
        </div>
    )
}

export default Profile;
