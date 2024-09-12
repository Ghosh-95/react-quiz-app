import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoanApp from "./challenge/LoanApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <LoanApp />
    </React.StrictMode>
)