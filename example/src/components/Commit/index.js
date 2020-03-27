import React, { Component } from "react";
import styled from "styled-components";

const Text = styled.span`
  padding-right: 5px;
  padding-left: 5px;
  background: rgba(198, 153, 103, 0.2);
`;

class Commit extends Component {
  render() {
    return <Text>{this.props.children}</Text>;
  }
}

export default Commit;
