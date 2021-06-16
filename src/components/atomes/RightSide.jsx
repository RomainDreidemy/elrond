import React from 'react';
import styled from "styled-components";
import {breakpoint} from "../../styles/Style";

const RightSide = (props) => {
    return (
        <RightSideStyle>
            {props.children}
        </RightSideStyle>
    );
};

const RightSideStyle = styled.div`
  width: 70%;
  padding: 100px;

  @media (max-width: ${breakpoint.medium}){
    width: 80%;
    margin: 0 auto;
    padding:  100px 0;
  }

  @media (max-width: ${breakpoint.small}){
    width: 95%;
  }
`;

export default RightSide;
