import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: ${props => (props.width ? props.width : "100%")};
  padding-right: 15px;
`;

class Col extends Component {
  render() {
    return <Div width={this.props.width}>{this.props.children}</Div>;
  }
}

export default Col;
