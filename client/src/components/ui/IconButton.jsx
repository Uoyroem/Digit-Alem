import "./IconButton.scss";


function IconButton({ children, className = "", ...props }) {
    return (
        <button {...props} className={"icon-button " + className}><span className="material-icons">{children}</span></button>
    );
}

export default IconButton;