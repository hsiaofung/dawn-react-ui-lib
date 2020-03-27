import styled from "styled-components";
import logoimg from "./logo.png";

export const Head = styled.header`
  width: calc(100% - 220px);
  height: 60px;
  background: #bc937c;
  padding: 8px 15px;
  margin-left: 220px;
  @media screen and (max-width: 991px) {
    padding: 8px 15px;
    margin-left: 0;
    width: 100%;
  }
`;

export const Logo = styled.div`
  width: 85px;
  height: 37px;
  background: url(${logoimg}) no-repeat;
  background-size: 240px 85px;
  background-position: top left;
  display: inline-block;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    margin-top: 10px;
  }
`;

export const Left = styled.div`
  height: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.div`
  height: 100%;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 13px;
  letter-spacing: 2px;
  i {
    font-size: 20px;
    margin-left: 25px;
    cursor: pointer;
    &:hover {
      color: #f4f4f4;
    }
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
