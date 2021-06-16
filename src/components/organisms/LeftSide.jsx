import React from 'react';
import styled from "styled-components";
import LeftSideBg from "../../assets/images/left-side-bg.png";
import Text from "../atomes/Text";
import Logo from "./../../assets/images/logo.png"
import {breakpoint, colors} from "../../styles/Style";

const LeftSide = () => {
    return (
        <LeftSideStyle>
            <img src={Logo}/>
            <Title>The Internet Scale Blockchain Is Live!</Title>

            <Description>A highly scalable, fast and secure blockchain platform for distributed apps, enterprise use cases and the new internet economy.</Description>

        </LeftSideStyle>
    );
};

const LeftSideStyle = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 30%;
  background-image: url(${LeftSideBg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 15px;

  @media (max-width: ${breakpoint.medium}){
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  color: ${colors.neutral.white};
  
  width: 85%;
  margin: 100px auto 30px auto;
`;

const Description = styled.p`
  text-align: center;
  color: ${colors.neutral.white};
  width: 80%;
  margin: 0 auto;
`;

export default LeftSide;
