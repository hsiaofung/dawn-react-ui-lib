import React, { Component } from "react";
import styled from "styled-components";

const Tag = styled.a`
  font-size: 14px;
  cursor: pointer;
  margin: 0 15px;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    color: black;
  }
`;

class Nav extends Component {
  render() {
    return <Tag href={this.props.href}>{this.props.title}</Tag>;
  }
}

export default Nav;
