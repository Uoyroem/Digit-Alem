import styles from "./Footer.module.scss";
import ContactUs from "./ContactUs";
import Section from "./Section";


function Footer() {
    return (
        <footer className={styles.footer}>
            <Section>
                <ContactUs/>
            </Section>

        </footer>
    );
}

export default Footer;