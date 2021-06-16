import React from 'react';
import LeftSide from "../components/organisms/LeftSide";
import RightSide from "../components/atomes/RightSide";
import Title from "../components/atomes/TItle";
import Text from "../components/atomes/Text";
import Link from "../components/atomes/Link";
import SignUpForm from "../components/organisms/SignupForm";
import Container from "../components/atomes/Container";
import PasswordResetForm from "../components/organisms/PasswordResetForm";

const LoginPage = () => {
    return (
        <Container>
            <LeftSide />
            <RightSide>
                <Title text={'Reset your password'} />
                <Text>Please provide us the email you used to register. We will send you a password reset link.</Text>

                <PasswordResetForm />
            </RightSide>
        </Container>
    );
};

export default LoginPage;
