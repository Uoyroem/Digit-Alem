import React from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

function ContactUs() {
    return (
        <div>
            <h4>Связаться с нами</h4>
            <form method="post">
                <Input placeholder="Имя" required />
                <Input placeholder="Почта" type="email" required />
                <Input placeholder="Телефон" required />
                <Button>Отправить</Button>
            </form>
        </div>
    );
}

export default ContactUs;