import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import 'material-icons/iconfont/material-icons.css';

import "./index.scss";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

