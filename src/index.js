import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
import './index.css'
import { StateProvider } from "./StateProvider";
import reducer from "./reducer";
import {initialState}  from "./reducer";
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer = {reducer} >
            <App/>
        </StateProvider>
    </React.StrictMode>
)
