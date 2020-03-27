import styled from "styled-components";

export const Form = styled.form`
  width: ${props => (props.width ? props.width : "300px")};
  border: ${props => (props.border ? props.border : "0")};
  border-radius: ${props => props.borderRadius && props.borderRadius};
`;
