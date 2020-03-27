import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: ${props => (props.width ? props.width : "100%")};
  // max-width: 1230px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;

  @media only screen and (max-width: 991px) {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 60px;
  }
`;
const Layout = (Header, Component, Footer, state) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = state;
    }

    render() {
      return (
        <Div>
          <Header />
          <Component {...this.props} {...this.state} />
          <Footer />
        </Div>
      );
    }
  };

export default Layout;
