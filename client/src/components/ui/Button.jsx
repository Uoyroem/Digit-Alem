import React from "react";
import "./Button.scss";


function Button({ children, ...props }) {
    return (
        <button {...props} className="button">{children}</button>
    );
}

export default Button;