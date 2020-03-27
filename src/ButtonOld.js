import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import styles from "./styles.css";

const StyledButton = styled.button(props => ({
  fontWeight: "500",
  fontSize: (props.xs && "1.5em") || (props.lg && "6.0em"),
  marginBottom: "10px",
  lineHeight: "1",
  color: "yellow"
}));

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text } = this.props;

    return <StyledButton lg>{text}</StyledButton>;
  }
}
