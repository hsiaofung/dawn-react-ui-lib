import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
`;

export const List = styled.div`
  width: ${props => (props.listWidth ? props.listWidth : "160px")};
  margin: 10px 0 0 0;
`;

export const Headline = styled.h3`
  font-weight: ${props =>
    props.headlineSetup && props.headlineSetup.fontWeight
      ? props.headlineSetup.fontWeight
      : "700"}
  margin:${props =>
    props.headlineSetup && props.headlineSetup.margin
      ? props.headlineSetup.margin
      : "0 0 30px 0"}
`;

export const Li = styled.li`
  margin: ${props =>
    props.subtitleStep && props.subtitleStep.margin
      ? props.subtitleStep.margin
      : "8px 0 0 0"}
  font-size: ${props =>
    props.subtitleStep && props.subtitleStep.fontSize
      ? props.subtitleStep.fontSize
      : "14px"}
  font-weight: ${props =>
    props.subtitleStep && props.subtitleStep.fontWeight
      ? props.subtitleStep.fontWeight
      : "0"}
  color: ${props =>
    props.subtitleStep && props.subtitleStep.color
      ? props.subtitleStep.color
      : "#000"}
    
`;

export const Img = styled.div`
  width: ${props => (props.imgWidth ? props.imgWidth : "240px")};
`;
