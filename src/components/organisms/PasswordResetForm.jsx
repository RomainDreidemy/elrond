import React from 'react';
import Input from "../atomes/Input";
import Agree from "../molecules/Agree";
import Submit from "../atomes/Submit";
import Form from "../atomes/Form";
import Link from "../atomes/Link";

const PasswordResetForm = () => {
    return (
        <Form>
            <Input
                label={'Email adress'}
                name={'email'}
                type={'text'}
            />

            <Submit value={'Sign up'} />

            <Link to={'/login'} value={'Back top login page'} />
        </Form>
    );
};

export default PasswordResetForm;
