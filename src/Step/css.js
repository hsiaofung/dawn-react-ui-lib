import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
`;

export const Step = styled.div`
  width: ${props => (props.stepWidth ? props.stepWidth : "400px")};
  border-bottom: ${props =>
    props.stepBorderBottom
      ? props.stepBorderBottom
      : "1px solid rgb(152, 152, 152)"};
  padding: 30px 0;
`;

export const Number = styled.span`
  width: ${props =>
    typeof props.numberStep === "object" && props.numberStep.numberSize
      ? props.numberStep.numberSize
      : "40px"};
  height: ${props =>
    typeof props.numberStep === "object" && props.numberStep.numberSize
      ? props.numberStep.numberSize
      : "40px"};
  margin-right: 0.25em;
  font-size: ${props =>
    typeof props.numberStep === "object" && props.numberStep.numberFontSize
      ? props.numberStep.numberFontSize
      : "30px"};
  border: ${props =>
    typeof props.numberStep === "object" && props.numberStep.numberBorder
      ? props.numberStep.numberBorder
      : "1px solid rgb(152, 152, 152)"};
  color: ${props => (props.color ? props.color : "#000")};
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;

export const Title = styled.span`
  font-size: 30px;
  border: ${props => (props.titleBorder ? props.titleBorder : "0")};
  color: ${props => (props.color ? props.color : "#000")};
  display: inline-block;
  vertical-align: middle;
`;

export const Content = styled.div`
  max-height: ${props => (props.maxHeight ? "5000px" : "0")};
  height: auto;
  overflow: hidden;
  transform-origin: top;
  transition: max-height 0.2s;
`;

export const loadingContent = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2147483647;
  opacity: 0.8;
`;

export const loadingCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;
