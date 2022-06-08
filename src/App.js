import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Profile from "./pages/Profile.js";

function App() {
    return (
        <Router>
            <h1>camb.ai React project!</h1>
            <Switch>
                <Route exact path="/">
                    <div>
                        <h1>Home Page</h1>
                        <a href="/Login.js">Login</a> or <a href="/Signup.js">Signup</a>
                    </div>
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/signup">
                    <Signup />
                </Route>

                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
