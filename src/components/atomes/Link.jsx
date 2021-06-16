import React from 'react';
import styled from "styled-components";
import {colors} from "../../styles/Style";
import {Link as ReactLink} from "react-router-dom";

const Link = ({selected = false, to= '/', value= ''}) => {
    return (
        <LinkStyle selected={selected} to={to}>{value}</LinkStyle>
    );
};

const LinkStyle = styled(ReactLink)`
  font-size: 16px;
  color: ${colors.primary.dark};
  padding: 5px;
  
  &:hover {
    text-decoration: underline;
  }
  
  ${props => props.selected && `
    border: 1px solid ${colors.primary.dark};
    border-radius: 10px
  `}
`;

export default Link;
