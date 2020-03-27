import styled from "styled-components";

export const Input = styled.input`
  width: ${props => (props.width ? props.width : "150px")};
  padding: ${props => (props.padding ? props.padding : "10px")};
  border: ${props =>
    props.warning
      ? "1px solid red"
      : props.border
      ? props.border
      : "1px solid #e9e7e8"};
  transition: all 0.5s;
  border-radius: 0;
  outline: 0;
  font-size: ${props => (props.fontSize ? props.fontSize : "16px")};
  &:focus {
    outline: 0;
    border: ${props => props.focusBorder && props.focusBorder};
  }
`;
