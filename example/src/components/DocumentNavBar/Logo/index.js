import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  font-family: "Abel", sans-serif;
  color: #4a5c68;
  font-size: 23px;
  text-align: center;
  i {
    padding-right: 5px;
  }
`;

class Logo extends Component {
  render() {
    return (
      <Div>
        <i className="fas fa-gem" />
        ChowSangSang
      </Div>
    );
  }
}

export default Logo;
