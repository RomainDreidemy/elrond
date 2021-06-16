import React from 'react';
import Link from "../components/atomes/Link";
import Title from "../components/atomes/TItle";
import Text from "../components/atomes/Text";
import LeftSide from "../components/organisms/LeftSide";
import Container from "../components/atomes/Container";
import RightSide from "../components/atomes/RightSide";
import SignUpForm from "../components/organisms/SignupForm";

const LoginPage = () => {
    return (
        <Container>
            <LeftSide />
            <RightSide>
                <Title text={'Sign up to Elrond'} />
                <Text>Already have an account ?<Link to={'login'} value={'Login'} /></Text>

                <SignUpForm />
            </RightSide>
        </Container>
    );
};




export default LoginPage;
