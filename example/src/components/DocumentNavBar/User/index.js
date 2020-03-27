import React, { Component } from "react";
import styled from "styled-components";
import image from "./man.png";

const Div = styled.div`
  text-align: center;
  margin: 30px 0;
  img {
    width: 80px;
  }
  p {
    color: #4a5c68;
    margin: 0;
  }
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 13px;
`;

const Email = styled.p`
  opacity: 0.7;
  font-size: 13px;
  line-height: 0.5;
`;

class User extends Component {
  render() {
    return (
      <Div>
        <img src={image} alt="" />
        <Name>Front End</Name>
        <Email>frontend@emphasis.com</Email>
      </Div>
    );
  }
}

export default User;
