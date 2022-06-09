import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Redirect, useHistory} from "react-router-dom";

import Login from "./pages/Login.js";
import CoolForm from "./pages/CoolForm.js";
import Profile from "./pages/Profile.js";
import Home from "./pages/Home";
import {logout} from "./features/user";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <Router>
            <a href="/"><h1>React project!</h1></a>
            <p><a href="/login">Login</a>, <a href="/coolform">Cool Form</a>, <a onClick={() => {dispatch(logout()); history.push("/login")}}>Logout</a>, <a href="/profile">Profile</a></p>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/coolform">
                    <CoolForm />
                </Route>

                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
