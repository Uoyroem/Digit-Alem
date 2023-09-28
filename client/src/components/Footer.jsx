import "./Footer.scss";
import ContactUs from "./ContactUs";
import Container from "./Container";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <ContactUs />
            </Container>
        </footer>
    );
}

export default Footer;