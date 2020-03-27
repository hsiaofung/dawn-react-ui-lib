import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : "rgb(221, 221, 221)"};
  color: ${props => (props.textColor ? props.textColor : "#000000")};
  font-size: ${props => (props.fontSize ? props.fontSize : "14px")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "0")};
  border: ${props => (props.border ? props.border : "0")};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "0")};
  padding: ${props => (props.padding ? props.padding : "0")};
  cursor: pointer;
  outline: 0;
`;
