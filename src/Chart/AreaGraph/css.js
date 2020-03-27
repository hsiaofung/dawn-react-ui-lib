import styled from "styled-components";

export const Svg = styled.svg`
  path {
    &:hover {
      transform: translateY(-10px);
      transition: all 300ms;
    }
  }
`;

export const Tag = styled.div`
  position: absolute;
  padding: 5px 16px;
  font-size: 14px;
  background: white;
  border-radius: 5px;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.left}px`};
  transition: top 300ms;
  pointer-events: none;
  color: #333333;
  font-weight: bold;
  text-align: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  span {
    padding: 0 5px;
    font-size: 13px;
  }
`;

export const ScaleOutline = styled.div`
  position: relative;
  height: 20px;
`;

export const Scale = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Range = styled.div`
  width: 20%;
  height: 100%;
  background: ${props => (props.background ? props.background : "pink")};
  border-width: 1px 0 1px 1px;
  border-style: solid;
  border-color: #ffffff;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  font-size: 10px;
  color: #333333;
  position: relative;
  &:first-child {
    border-radius: 50px 0 0 50px;
  }
  &:last-child {
    border-width: 1px 1px 1px 1px;
    border-radius: 0 50px 50px 0;
  }
  &:hover div {
    opacity: 1;
    transform: translateY(0px);
  }
  div {
    font-size: 13px;
    position: absolute;
    width: 100%;
    background: #ffffff;
    padding: 8px 16px;
    text-align: center;
    top: -50px;
    left: 0;
    opacity: 0;
    border-radius: 5px;
    transition: all 300ms;
    border: 1px solid #e9e8e7;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-10px);
  }
`;
