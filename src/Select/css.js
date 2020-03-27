import styled from "styled-components";

export const Select = styled.select`
  width: ${props => (props.width ? props.width : "150px")};
  height: ${props => (props.height ? props.height : "40px")};
  border: none;
  border-radius: 0;
  font-size: ${props => (props.fontSize ? props.fontSize : "14px")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "0")};
  padding: ${props => (props.padding ? props.padding : "0 0 0 7px")};
  &:focus {
    outline: 0;
  }
  appearance: none;
`;

export const Text = styled.span`
  width: ${props => (props.titleWidth ? props.titleWidth : "100px")};
  line-height: ${props => (props.height ? props.height : "40px")};
  height: ${props => (props.height ? props.height : "40px")};
  padding: ${props => (props.padding ? props.padding : "0")}
  font-size: ${props => (props.titleFontSize ? props.titleFontSize : "14px")};
  vertical-align: baseline;
  text-align: center;
  position: relative;
`;
