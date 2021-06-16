import React from 'react';
import Input from "../atomes/Input";
import Agree from "../molecules/Agree";
import Submit from "../atomes/Submit";
import Form from "../atomes/Form";
import Link from "../atomes/Link";

const LoginForm = () => {
    return (
        <Form>
            <Input
                label={'Email adress'}
                name={'email'}
                type={'text'}
            />

            <Input
                label={'Password'}
                name={'password'}
                type={'password'}
            />

            <Link to={'/password-reset'} value={'Forgotten password ?'} />

            <Submit value={'Log in'} />
        </Form>
    );
};

export default LoginForm;
