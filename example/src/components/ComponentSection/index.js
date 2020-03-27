import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  max-width: 100%;
  padding: 15px;
  border-width: 1px 1px 0px 1px;
  border-color: #ccc;
  border-radius: 5px 5px 0 0;
  border-style: solid;
`;

class ComponentSection extends Component {
  render() {
    return <Div>{this.props.children}</Div>;
  }
}

export default ComponentSection;
