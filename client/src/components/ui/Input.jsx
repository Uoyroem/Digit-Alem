import React from "react";
import "./Input.scss";


function Input({ className = "", ...props }) {
    return (
        <input {...props} className={`input ${className}`} />
    );
}

export default Input;