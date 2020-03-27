import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  margin-right: -15px;
  display: flex;
`;

class Row extends Component {
  render() {
    return <Div>{this.props.children}</Div>;
  }
}

export default Row;
