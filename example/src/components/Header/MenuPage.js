import React, { Component } from "react";
import { HOME_PAGE, DOC } from "../../constants";
import styled, { keyframes, css } from "styled-components";

const dropDown = keyframes`
    from{
        transform: translateY(-15px);
    }
    to{
        transform: translateY(0px);
    }
`;

const dropUp = keyframes`from{
    transform: translateY(0px);
}
to{
    transform: translateY(15px);
}`;

const Div = styled.div`
  position: relative;
  height: 100%;
  padding: 13px 13px 13px 0;
  cursor: pointer;
  .fa-th-large {
    font-size: 20px;
    color: white;
    &:hover {
      color: #f4f4f4;
    }
  }
`;

const contentAnimation = css`
  animation: ${dropDown} 300ms ease-out forwards;
`;

const contentAnimation2 = css`
  animation: ${dropUp} 300ms ease-out forwards;
`;

const Content = styled.div`
  position: absolute;
  z-index: 99;
  padding: 15px;
  top: 40px;
  left: -15px;
  width: calc(100vw - 225px);
  height: 300px;
  background: white;
  opacity: ${props => (props.show ? "1" : "0")};
  pointer-events: ${props => (props.show ? "" : "none")};
  transition: all 300ms;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.05);
  display: flex;
  ${props => (props.show ? contentAnimation : contentAnimation2)};
`;

const Pages = styled.div`
  width: 25%;
  i {
    color: #4a5c68;
    font-size: 20px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    padding: 5px 20px;
    margin: 0;
    font-size: 13px;
    a {
      display: block;
      color: #4a5c68;
    }
    &:hover {
      background: #f4f4f4;
    }
  }
`;

const Title = styled.span`
  font-size: 13px;
  color: #4a5c68;
  font-weight: bold;
  padding: 0 5px;
`;

class MenuPage extends Component {
  state = {
    show: false
  };
  openContent = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <Div onClick={this.openContent}>
        <i className="fas fa-th-large" />
        <Content show={this.state.show}>
          <Pages>
            <i className="far fa-file" />
            <Title>PAGES</Title>
            <ul>
              <li>
                <a href={`${HOME_PAGE}`}>Getting Started</a>
              </li>
              <li>
                <a href={`${HOME_PAGE}/${DOC}/alert`}>Document</a>
              </li>
            </ul>
          </Pages>
          <Pages>
            <i className="far fa-calendar-alt" />
            <Title>NEWS</Title>
          </Pages>
          <Pages>
            <i className="far fa-compass" />
            <Title>LOCATION</Title>
          </Pages>
        </Content>
      </Div>
    );
  }
}

export default MenuPage;
