import React, { Component } from "react";
import styled from "styled-components";
import arrowImage from "./down-arrow.png";

const Tag = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin: 0 15px;
  padding: 25px 0;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    color: black;
  }
`;

const ColumnContent = styled.div`
  position: absolute;
  padding: 35px;
  /* text-align: center; */
  top: 70px;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  opacity: ${props => (props.showColumnContent ? "1" : "0")};
  pointer-events: ${props => (props.showColumnContent ? "" : "none")};
  transition: all 300ms;
  color: black;
`;

const DownArrow = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 2px;
  background: url(${arrowImage}) no-repeat center center;
  background-size: contain;
`;

class NavWithColumn extends Component {
  state = {
    showColumnContent: false
  };

  // 顯示欄位區塊
  show = () => {
    this.setState({
      showColumnContent: true
    });
  };

  unshow = () => {
    this.setState({
      showColumnContent: false
    });
  };

  render() {
    return (
      <Tag onMouseMove={this.show} onMouseLeave={this.unshow}>
        {this.props.title}
        <DownArrow />
        <ColumnContent showColumnContent={this.state.showColumnContent}>
          {this.props.children}
        </ColumnContent>
      </Tag>
    );
  }
}

export default NavWithColumn;
