import React from 'react';
import Input from "../atomes/Input";
import Agree from "../molecules/Agree";
import Submit from "../atomes/Submit";
import Form from "../atomes/Form";

const SignUpForm = () => {
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

            <Agree />

            <Submit value={'Sign up'} />
        </Form>
    );
};

export default SignUpForm;
