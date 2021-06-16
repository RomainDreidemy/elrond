import React from 'react';
import styled from "styled-components";

const Container = (props) => {
    return (
        <ContainerStyle>{props.children}</ContainerStyle>
    );
};

const ContainerStyle = styled.div`
  display: flex;
`;

export default Container;
