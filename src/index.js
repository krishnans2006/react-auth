import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import store from './store';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>
);
