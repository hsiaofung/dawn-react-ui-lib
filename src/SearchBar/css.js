import styled from "styled-components";
import closeBtn from "./times-solid.svg";
import searchBtn from "./search-solid.svg";

export const searchBarMainDiv = styled.div`
  display: inline-block;
`;
export const searchBar = styled.div`
  display: inline-block;
  position: relative;
  @media only screen and (min-width: 992px) and (max-width: 1300px) {
    .searchBar {
      width: 160px;
    }
  }
  @media only screen and (min-width: 1px) and (max-width: 991px) {
    margin-left: 0px;
    margin-top: 0px;
    width: 100%;
    display:${props => (props.show ? "block" : "none")}
    position: ${props => (props.show ? "fixed" : "none")};
    z-index: ${props => (props.show ? "99999" : "1")};
    height: ${props => (props.show ? "100vh" : "auto")};
    background: ${props => (props.show ? "gainsboro" : "transparent")};
    top: ${props => (props.show ? "0" : "")};
    left: ${props => (props.show ? "0" : "")};
  }
`;

export const searchBarSecDiv = styled.div`
  border: 1px solid black;
  padding: 5px;
  margin-top: 5px;
  position: relative;
  @media only screen and (min-width: 1px) and (max-width: 991px) {
    border: none;
    margin-top: ${props => (props.show ? "0px" : "5px")};
    border-top: ${props => (props.show ? "none" : "1px solid black")};
    border-bottom: ${props => (props.show ? "none" : "1px solid black")};
    background: ${props => (props.show ? "white" : "transparent")};
  }
`;

export const btnIcon = styled.div`
  vertical-align: middle;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 6px;
  left: 3px;
  color: black;
  width: 30px;
  height: 25px;
  background: url(${searchBtn}) no-repeat center center;
  @media only screen and (min-width: 1px) and (max-width: 991px) {
    display: none;
    width: 14px;
    height: 14px;
    right: 5px;
    text-align: center;
    line-height: 35px;
    top: 3px;
  }
  i {
    font-size: 25px;
    @media only screen and (max-width: 991px) {
      font-size: 14px;
    }
  }
`;

export const searchInput = styled.input`
  width: 100%;
  height: 30px;
  background: none;
  border-radius: 0;
  outline: 0 !important;
  padding-left: 30px;
  padding-right: 25px;

  @media only screen and (min-width: 1px) and (max-width: 991px) {
    height: ${props => (props.show ? "60px" : "30px")};
    padding-left: 15px;
  }
`;

export const suggestSearch = styled.div`
  display:${props => (props.show ? "block" : "none")}
  position: absolute;
  width: 260px;
  height: auto;
  max-height: 480px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  background: white;
  color: #454545 !important;
  border: 1px solid #e9e7e8;
  z-index: 100;

  @media only screen and (max-width: 991px) {
    width: 100%;
    border: 0px solid black;
    padding: 0 15px;
  }
`;
export const resultSuggestListTable = styled.table`
  width: 100%;
`;

export const searchHD = styled.div`
  font-weight: bold;
  font-size: 11px;
  float: left;
  line-height: 30px;

  @media only screen and (max-width: 991px) {
    font-size: 14px;
  }
`;

export const btnCloseSearch = styled.span`
  float: right;
  margin-top: -7px;
  font-size: 20px;
  width: 15px;
  height: 20px;
  background: url(${closeBtn}) no-repeat center center;
  display: ${props => (props.displayBtnCloseSearch ? "block" : "none")};
  @media only screen and (max-width: 991px) {
    display: block;
    position: fixed;
    right: 15px;
    width: 25px;
    height: 25px;
    text-align: center;
    top: ${props => (props.needContent ? "6%" : "1.5%")};
  }
  i {
    @media only screen and (max-width: 991px) {
      font-size: 25px;
    }
  }
`;

export const resultSuggestList = styled.div`
  line-height: 22px;
  font-size: 11px;
  a {
    text-decoration: none;
  }
`;

export const resultSuggestName = styled.a`
  width: 50%;
  float: left;
  max-width: 110px;
  margin: 0 0 5px 5px;
  coloe: color: rgb(69, 69, 69);
  &:hover {
    color: #c69967;
  }
  @media only screen and (max-width: 991px) {
    max-width: 150px;
    font-size: 14px;
  }
`;

export const searchText = styled.div`
  font-weight: bold;
  font-size: 11px;
`;

export const IconDivForMobile = styled.div`
  display: none;
  font-size: 20px;
  z-index: 2;
  color: black;
  width: 15px;
  height: 20px;
  background: url(${searchBtn}) no-repeat center center;
  @media only screen and (max-width: 991px) {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
`;
