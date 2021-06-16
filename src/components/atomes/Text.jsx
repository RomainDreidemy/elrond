import React from 'react';
import styled from "styled-components";

const Text = (props) => {
    return (
        <TextStyle>{props.children}</TextStyle>
    );
};

const TextStyle = styled.p`
  font-size: 16px;
`;

export default Text;
