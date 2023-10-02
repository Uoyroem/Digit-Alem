import "./IconButton.scss";


function IconButton({ children, iconType, className = "", ...props }) {
    return (
        <button {...props} className={"icon-button " + className}><span className={"material-icons" + (iconType ? "-" + iconType : "")}>{children}</span></button>
    );
}

export default IconButton;