import React, { useState, useEffect } from "react";

import {useSelector, useDispatch} from "react-redux"

const Home = () => {
    const user = useSelector(state => state.user.value);
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )

}

export default Home;
