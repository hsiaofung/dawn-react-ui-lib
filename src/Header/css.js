import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  background: ${props => (props.background ? props.background : "#f4f4f4")};
  width: 100%;
  height: ${props => (props.height ? props.height : "70px")};
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
`;

export const LeftSection = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

export const RightSection = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;
