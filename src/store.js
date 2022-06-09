import React, { useReducer } from "react";
import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import userReducer from './features/user.js';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export default configureStore({
    reducer: {
        user: persistedReducer,
    },
});
