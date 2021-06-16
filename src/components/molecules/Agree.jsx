import React from 'react';
import Text from "../atomes/Text";
import Link from "../atomes/Link";
import styled from "styled-components";

const Agree = () => {
    return (
        <AgreeStyle>
            <CheckBox type={'checkbox'} id={'agree'} name={'agree'}/>
            <label for={'agree'}><Text>I agree to the<Link to={'/'} value={'Termes & Conditions'} /></Text></label>
        </AgreeStyle>
    );
};

const CheckBox = styled.input`
  margin-right: 5px;
`;

const AgreeStyle = styled.div`
  display: flex;
  align-items: center;
`;

export default Agree;
