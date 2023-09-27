import "./Header.scss";
import Container from "./Container";
import logo from "../assets/logo.png";


function Header({ className, ...props }) {
    return (
        <header {...props} className={"header " + (className || "")}>
            <Container>
                <div className="header__inner">
                    <img className="header__logo" src={logo} alt="" />
                    <nav className="nav">
                        <a href="#slider-section" className="nav__item">Главная</a>
                        <a href="#news-section" className="nav__item">Новости</a>
                        <a href="#portfolio-section" className="nav__item">Портфолио</a>
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export default Header;

