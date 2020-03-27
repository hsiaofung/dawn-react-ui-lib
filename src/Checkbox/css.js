import styled from "styled-components";
import img from "./ui-radio.png";

export const CheckboxLabel = styled.label`
  &:before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    position: absolute;
    left: 0;
    top: 2px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 32px 16px;
    background-position: 0px 0px;
    opacity: 0.8;
  }
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  margin-right: 15px;
  font-weight: 400;
  max-width: 100%;
  margin-bottom: 5px;
`;
export const CheckboxInput = styled.input`
  display: none;
  &:checked + ${CheckboxLabel}:before {
    background-position: -16px 0px;
  }
`;
