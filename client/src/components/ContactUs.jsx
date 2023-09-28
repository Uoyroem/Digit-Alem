import React from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import "./ContactUs.scss";

function ContactUs() {
    return (
        <div className="contact">
            <h4>Связаться с нами</h4>
            <form method="post">
                <Input className="contact__input" placeholder="Имя" required/>
                <Input className="contact__input" placeholder="Почта" type="email" required/>
                <Input className="contact__input" placeholder="Телефон" required/>
                <Button>Отправить</Button>
            </form>
        </div>
    );
}

export default ContactUs;