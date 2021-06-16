import React from 'react';
import styled from "styled-components";
import {breakpoint} from "../../styles/Style";

const Form = (props) => {
    return (
        <FormStyle>
            {props.children}
        </FormStyle>
    );
};


const FormStyle = styled.form`
  width: 525px;
  margin-top: 30px;

  @media (max-width: ${breakpoint.medium}){
    width: 100%;
    margin: 30px auto 0 auto;
  }
`;

export default Form;
