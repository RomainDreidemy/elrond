import React from 'react';
import styled from "styled-components";
import {colors} from "../../styles/Style";

const Submit = ({value = 'Send'}) => {
    return (
        <Input value={value} type={'submit'} disabled={false} />
    );
};

const Input = styled.input`
  border-radius: 10px;
  height: 52px;
  width: 100%;
  border: none;
  margin: 20px 0;
  cursor: pointer;
  
  background: ${colors.primary.dark};
  color: ${colors.neutral.white};

  font-weight: 500;
  font-size: 16px;
  
  &:hover{
    background: ${colors.primary.light};
  }
  
  &:disabled{
    background: ${colors.neutral.grey_light};
    color: ${colors.neutral.grey_dark};
  }
`;

export default Submit;
