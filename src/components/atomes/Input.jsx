import React from 'react';
import styled from "styled-components";
import {colors} from "../../styles/Style";

const Input = ({label, name, type}) => {
    return (
        <Group>
            <Label for={name}>{label}</Label>
            <InputStyle id={name} type={type}></InputStyle>
        </Group>
    );
};

const Group = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 12px;
`;

const InputStyle = styled.input`
  border: 1px solid ${colors.neutral.grey_dark};
  box-sizing: border-box;
  border-radius: 10px;
  height: 44px;
  width: 100%;
  padding: 0 10px;
  margin-top: 5px;
`;

export default Input;
