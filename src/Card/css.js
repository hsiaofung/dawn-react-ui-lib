import styled from "styled-components";

export const Div = styled.div`
  width: ${props => (props.width ? props.width : "100%")};
  text-align: center;
  display: ${props => (props.displayInline ? "inline-block" : "flex")};
  margin:${props => (props.margin ? props.margin : "5px")};
`;

export const Wrapper = styled.div`
  width: 100%;
  background-image: url(${props => (props.hoverImg ? props.hoverImg : "")});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  cursor: pointer;
  margin-bottom: 10px;
  position: relative;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  &:hover {
    img {
      opacity: ${props => (props.hoverImg ? "0" : "1")};
    }
  }
  img {
    width: 100%;
    max-width: 100%;
    transition: all 300ms;
    float: left;
  }
`;

export const Tag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 11px;
  z-index: 5;
  border: 1px solid #e9e7e8;
  padding: 3px 6px;
  color: #95989a;
  background: #ffffff;
`;
