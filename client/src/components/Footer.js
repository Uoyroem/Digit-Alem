import "./Footer.scss";
import ContactUs from "./ContactUs";
import Section from "./Section";


function Footer() {
    return (
        <footer className="footer">
            <Section>
                <ContactUs />
            </Section>
        </footer>
    );
}

export default Footer;