import styled from "styled-components";
import arrowImage from "./next.png";

export const Div = styled.div`
  background: ${props => (props.show ? "#fafafa" : "white")};
  margin: 5px -27px 5px -15px;
  transition: all 300ms;
`;

export const Button = styled.div`
  font-size: 13px;
  line-height: 1.8;
  display: block;
  padding: 8px 0 8px 24px;
  border-radius: 5px;
  cursor: pointer;
  color: #969696;
  position: relative;
`;

export const Icon = styled.span`
  padding: 0 8px;
`;

export const ChartUl = styled.ul`
  max-height: ${props => (props.show ? `${props.totalNum * 50}px` : "0px")};
  overflow: hidden;
  transition: all 300ms linear;
  padding-left: 40px;
  li {
    margin: 0;
    font-size: 12px;
    padding-top: 6px;
    &:last-child {
      padding-bottom: 10px;
    }
  }
  a {
    display: block;
    padding: 0;
    border-radius: 5px;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  right: 35px;
  top: 40%;
  transform: ${props => (props.show ? "rotate(90deg) " : "")};
  width: 8px;
  height: 8px;
  background: url(${arrowImage}) no-repeat center center;
  background-size: contain;
  transition: all 300ms;
  transform-origin: center;
`;
