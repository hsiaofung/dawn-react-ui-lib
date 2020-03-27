import styled from "styled-components";

export const Div = styled.div`
  max-width: 220px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-right: 1px solid #ececec;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const Content = styled.div`
  width: calc(100% + 20px);
  height: 100%;
  overflow-y: scroll;
  padding: 15px;
  padding-right: 35px;
  padding-bottom: 35px;
`;

export const NavText = styled.div`
  font-size: 13px;
  line-height: 1.8;
  margin: 5px 0;
  cursor: pointer;
  a {
    display: block;
    padding: 8px;
    border-radius: 5px;
  }
`;

export const NavText2 = styled.div`
  font-size: 13px;
  line-height: 1.8;
  cursor: pointer;
  padding: 8px;
  padding-left: 23px;
  color: #969696;
  position: relative;
  margin-left: -15px;
  margin-right: -21px;
  background: ${props => (props.show ? "#fafafa" : "")};
  transition: all 300ms ease-in;
  a {
    display: block;
    padding: 0;
    border-radius: 5px;
  }
  li {
    margin: 0;
    font-size: 12px;
    padding-top: 3px;
  }
`;

export const ChartUl = styled.ul`
  max-height: ${props => (props.show ? "500px" : "0px")};
  overflow: hidden;
  transition: all 300ms ease-in;
`;
