import styled, { keyframes, css } from "styled-components";
import closeBtn from "./close.svg";
import backBtn from "./back.png";

const slowlyBigger = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const Button = styled.button`
  padding: ${props => (props.buttonPadding ? props.buttonPadding : "16px")};
  color: ${props => (props.buttonColor ? props.buttonColor : "black")};
  background: ${props =>
    props.buttonBackground ? props.buttonBackground : "white"};
  border: ${props =>
    props.buttonBorder ? props.buttonBorder : "1px solid black"};
  border-radius: 0;
  outline: 0;
  cursor: pointer;
`;

export const DialogBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  opacity: ${props => (props.show ? "1" : "0")};
  pointer-events: ${props => (props.show ? "" : "none")};
  transition: all 300ms;
  display: ${props => (props.scrollBar ? "" : "flex")};
  justify-content: ${props => (props.scrollBar ? "" : "center")};
  align-items: ${props => (props.scrollBar ? "" : "center")};
  overflow-y: ${props => (props.scrollBar ? "scroll" : "")};
  z-index: 99;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const contentAnimation = css`
  animation: ${slowlyBigger} 300ms ease-out forwards;
`;

export const DialogContent = styled.div`
  width: ${props => (props.width ? props.width : "60%")};
  margin: ${props => (props.scrollBar ? "15vh auto" : "")};
  min-height: ${props => (props.scrollBar ? "700px" : "")};
  background: white;
  border-radius: 5px;
  text-align: center;
  padding: 15px;
  position: relative;
  ${props => (props.animation ? contentAnimation : "")};
  h2 {
    font-size: 36px;
    font-weight: bolder;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
  }
  @media screen and (max-width: 760px) {
    width: 85%;
  }
`;

export const CloseButton = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: url(${closeBtn}) no-repeat center center;
  background-size: contain;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  @media screen and (max-width: 760px) {
    width: 15px;
    height: 15px;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CancelButton = styled.button`
  min-width: 200px;
  padding: 16px;
  margin: 0 5px;
  background: #e9e8e7;
  color: #000000;
  border: 0;
  outline: 0;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    width: 100%;
    margin: 10px 0 0 0;
  }
`;

export const AgreeButton = styled(CancelButton)`
  background: #000000;
  color: #ffffff;
`;

export const MobileDialog = styled.div`
  position: fixed;
  z-index: 99;
  background: #ffffff;
  top: 0;
  right: ${props => (props.show ? "0" : "-105%")};
  width: 100%;
  height: 100vh;
  transition: all 300ms;
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

export const MobileDialogHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackArrow = styled.div`
  position: absolute;
  left: 0;
  width: 40px;
  height: 120px;
  background: url(${backBtn}) no-repeat center center;
  background-size: 15px 15px;
`;

export const MobileDialogBody = styled.div`
  padding: 135px 15px 15px 15px;
  overflow-y: scroll;
  height: 100%;
  text-align: center;
`;

export const ContentBody = styled.div`
  min-height: ${props => (props.scrollBar ? "550px" : "")};
`;
