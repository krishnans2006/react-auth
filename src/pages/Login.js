import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";

import {useDispatch} from "react-redux";

import {login} from "../features/user";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const users = {
        "krishnans2006@gmail.com": {
            name: "Krishnan",
            plan: 0,
            password: "krishnan"
        },
        "krishy@gmail.com": {
            name: "Krishy",
            plan: 1,
            password: "krishy"
        },
        "fishy@gmail.com": {
            name: "Fishy",
            plan: 2,
            password: "fishy"
        }
    }
    const processForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (users[email] && users[email].password === password) {
            dispatch(login({
                "name": users[email].name,
                "email": email,
                "plan": users[email].plan
            }));
        }
        history.push("/profile");
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={processForm}>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;
