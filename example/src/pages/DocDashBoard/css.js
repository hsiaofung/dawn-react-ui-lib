import styled from "styled-components";

export const NetworkBoard = styled.div`
  width: 100%;
  background: white;
  border-radius: 5px;
  padding: 35px;
  color: #533a31;
  overflow: hidden;
  h2 {
    color: #533a31;
  }
  p {
    margin: 0;
    line-height: 1;
  }
`;

export const SmallTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #533a31;
  margin: 0;
  margin-bottom: 10px !important;
`;
export const Number = styled.h2`
  font-size: 48px;
  position: relative;
  margin: 0;
  line-height: 0.6;
  span {
    font-size: 13px;
    position: absolute;
    top: 0;
    margin-left: 5px;
  }
`;

export const RightContent = styled.div`
  width: 100%;
  background: ${props => (props.background ? props.background : "white")};
  padding: 15px;
  min-height: 220px;
  border-radius: 5px;
  color: white;
  overflow: hidden;
  position: relative;
  h3 {
    margin: 0;
    font-size: 16px;
    i {
      padding-right: 5px;
    }
  }
`;

export const MoreEvent = styled.div`
  position: absolute;
  margin-top: 5px;
  font-size: 13px;
  width: 90%;
  div {
    display: flex;
    justify-content: space-between;
    p {
      margin: 0;
      font-size: 13px;
      letter-spacing: 1px;
    }
  }
`;

export const MaxinPeople = styled.p`
  font-size: 13px;
  margin-top: 5px !important;
  span {
    font-size: 15px;
  }
  i {
    font-size: 18px;
  }
`;

export const WebNumber = styled.h2`
  font-size: 32px;
  position: relative;
  span {
    font-size: 13px;
    position: absolute;
    top: 0;
    margin-left: 5px;
  }
`;

export const PercentDiv = styled.div`
  font-size: 13px;
`;

export const PercentDivTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PercentColor = styled.div`
  width: 100%;
  height: 5px;
  background: #e9e8e7;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  margin-top: 5px;
`;

export const PercentWidth = styled.div`
  width: ${props => (props.percent ? props.percent : "50%")};
  height: 100%;
  position: absolute;
  background: ${props => (props.background ? props.background : "#647D9B")};
  top: 0;
  left: 0;
`;

export const FansContent = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  min-height: 150px;
`;

export const StoreScore = styled.div`
  text-align: center;
  color: #533a31;
  h2 {
    font-size: 60px;
    margin: 0;
    margin-top: 12px;
  }
  p {
    margin: 0;
    font-size: 13px;
  }
`;

export const StoreScore2 = styled.div`
  text-align: center;
  button {
    font-size: 13px;
    background: #eb9093;
    border-radius: 5px;
    padding: 8px 16px;
    color: white;
    border: 0;
    outline: 0;
    cursor: pointer;
    &:hover {
      background: #e7787b;
    }
  }
  p {
    margin: 0;
    font-size: 13px;
    border-bottom: 1px solid #e9e8e7;
    padding-bottom: 10px;
    margin-top: 5px;
  }
`;

export const StoreScore3 = styled.div`
  margin-top: 5px;
  h3 {
    font-size: 18px;
    margin: 0;
    color: #647d9b;
  }
  span {
    font-size: 10px;
    color: #ccc;
  }
`;

export const File = styled.div`
  width: 100%;
  background: ${props => (props.background ? props.background : "pink")};
  border-radius: 5px;
  padding: 15px;
  color: white;
  display: flex;
  i {
    font-size: 40px;
  }
`;

export const FileImage = styled.div`
  margin: 0 15px;
`;

export const FileNumber = styled.div`
  margin: 0 15px;
  p {
    margin: 0;
    font-size: 28px;
    line-height: 1;
  }
  span {
    font-size: 13px;
  }
`;

export const TaiwanSection = styled.div`
  width: 100%;
  border-radius: 5px;
  background: white;
  padding: 35px;
  position: relative;
`;

export const LineSvg = styled.div`
  svg {
    transform: translate(-86px, 30px);
    position: absolute;
  }
`;

export const PeopleSection = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  pointer-events: none;
`;

export const PeopleDes = styled.div`
  position: absolute;
  right: 27px;
  bottom: 40px;
`;

export const PeopleDesGender = styled.p`
  margin: 0;
  font-size: 13px;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${props => (props.background ? props.background : "#e9e8e7")};
    top: 7px;
    left: -15px;
    border-radius: 50%;
  }
`;
