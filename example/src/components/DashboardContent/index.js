import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  padding-left: 220px;
`;

const WelcomeContent = styled.div`
  text-align: center;
  background: #bc937c;
  padding: 25px 50px 85px 50px;
  color: #ffffff;
  h2 {
    font-weight: bold;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 13px;
  }
`;

const ChildrenContent = styled.div`
  min-height: 100vh;
  background: #eae8e3;
  padding: 15px 25px 35px 25px;
`;

class DashboardContent extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <Div>
        <WelcomeContent>
          <h2>Welcome back to the Dashboard.</h2>
          <p>
            Scroll down to see quick links and overviews of your Server, To do
            list, Order status or get some Help using Nifty.
          </p>
        </WelcomeContent>
        <ChildrenContent>{this.props.children}</ChildrenContent>
      </Div>
    );
  }
}

export default DashboardContent;
