import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import {Provider } from "react-redux";
import {createStore} from 'redux';
import reducer from './reducer';
 
ReactDOM.render(
    <Provider store={createStore(reducer)}>
    <App />
    </Provider>,
     document.getElementById("root")
);
