import React from 'react';
import styled from "styled-components";
import {breakpoint} from "../../styles/Style";

const Title = ({text = ''}) => {
    return (
        <TitleStyle>{text}</TitleStyle>
    );
};

const TitleStyle = styled.h1`
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 20px;

  @media (max-width: ${breakpoint.small}){
    font-size: 28px;
  }
`;

export default Title;
