import React, { Component } from "react";
import menuImage from "./menu.png";
import styled from "styled-components";

const OutDiv = styled.div`
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

const Div = styled.div`
  float: right;
  width: 30px;
  margin-top: 14px;
`;

const Content = styled.div`
  position: fixed;
  width: 100%;
  height: calc(100vh - 70px);
  background: white;
  top: ${props => (props.show ? "70px" : "100%")};
  left: 0;
  transition: all 300ms;
  padding: 15px;
  z-index: 99;
`;

class MobileMenu extends Component {
  state = {
    show: false
  };
  showMenu = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <OutDiv>
        <Div onClick={this.showMenu}>
          <img src={menuImage} alt="" />
        </Div>
        <Content show={this.state.show}>MenuConent</Content>
      </OutDiv>
    );
  }
}

export default MobileMenu;
