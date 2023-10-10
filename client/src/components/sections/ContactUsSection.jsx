import React from "react";
import {SectionWithHeader} from "./Section";
import ContactUs from "../ContactUs";

function ContactUsSection(props) {
    return (
        <SectionWithHeader id="contact-us-section" title="Связаться с нами">
            <ContactUs/>
        </SectionWithHeader>
    );
}

export default ContactUsSection;