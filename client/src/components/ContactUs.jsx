import React from "react";
import {Button, Stack, TextField} from "@mui/material";


function ContactUs() {
    return (
        <form>
            <Stack spacing={2} maxWidth={470} margin="auto">
                <Stack direction="row" justifyContent="space-between">
                    <TextField required label="Введите ваше имя"/>
                    <TextField required type="email" label="Введите ваш email"/>
                </Stack>
                <TextField required label="Введите сообщение"/>
                <Button variant="contained">Отправить</Button>
            </Stack>
        </form>
    );
}

export default ContactUs;