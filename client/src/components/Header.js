import styles from "./Header.module.scss";
import Container from "./Container";
import logo from "../logo.png";


function Header({className, ...props}) {
    return (
        <header {...props} className={`${styles.header} ${className}`}>
            <Container>
                <div className={styles.header__inner}>
                    <img className={styles.logo} src={logo} alt=""/>
                    <nav className={styles.nav}>
                        <a href="#slider-section" className={styles.nav__item}>Главная</a>
                        <a href="#news-section" className={styles.nav__item}>Новости</a>
                        <a href="#portfolio-section" className={styles.nav__item}>Портфолио</a>
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export default Header;

