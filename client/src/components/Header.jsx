import "./Header.scss";
import Container from "./Container";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


function Header({ className, ...props }) {

    return (
        <header {...props} className={"header " + (className || "")}>
            <Container>
                <div className="header__inner">
                    <Link href={"/"}>
                        <img className="header__logo" src={logo} alt="" />
                    </Link>
                    <nav className="nav">
                        <a href="#about-section" className="nav__item">О компаний</a>
                        <a href="#news-section" className="nav__item">Новости</a>
                        <a href="#portfolio-section" className="nav__item">Портфолио</a>
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export default Header;

