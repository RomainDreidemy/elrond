import React from 'react';
import LeftSide from "../components/organisms/LeftSide";
import RightSide from "../components/atomes/RightSide";
import Title from "../components/atomes/TItle";
import Text from "../components/atomes/Text";
import Link from "../components/atomes/Link";
import SignUpForm from "../components/organisms/SignupForm";
import Container from "../components/atomes/Container";
import LoginForm from "../components/organisms/LoginForm";

const LoginPage = () => {
    return (
        <Container>
            <LeftSide />
            <RightSide>
                <Title text={'Log in to Elrond'} />
                <Text>Don't have an account ?<Link to={'/signup'} value={'Sign up'} /></Text>

                <LoginForm />
            </RightSide>
        </Container>
    );
};

export default LoginPage;
