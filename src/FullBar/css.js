import styled from "styled-components";

export const Bg = styled.div`
  position: fixed;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 100vw;
  bottom:0
  transition: transform 0s ease 0.5s, -webkit-transform 0s ease 0.5s;
  transform: ${props =>
    props.open ? `translate3d(-100%, 0, 0);` : `translate3d(0, 0, 0)`};
  transition-delay: ${props => (props.open ? `0s;` : ``)};
  z-index: 100;
`;
export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 100vw;
  bottom: 0;
  width: 95%;
  max-width: 500px;
  transform: ${props =>
    props.open ? `translate3d(-100%, 0, 0);` : `translate3d(0, 0, 0)`};
  background: #fff;
  transition: transform 0.5s ease, -webkit-transform 0.5s ease;
`;
