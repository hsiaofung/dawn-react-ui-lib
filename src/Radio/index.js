import React, { Component } from "react";
import styled from "styled-components";

const Label = styled.label`
  min-width: ${props => (props.width ? props.width : "46px")};
  padding: ${props => (props.padding ? props.padding : "12px 16px")};
  margin: 0 5px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  text-align: center;
  input {
    display: none;
  }
  input[type="radio"]:checked ~ span {
    background: ${props =>
      props.checkedBackground
        ? props.checkedBackground
        : "rgba(198, 153, 103, 0.2)"};
    border: ${props =>
      props.checkedBorder
        ? props.checkedBorder
        : "1px solid rgba(198, 153, 103, 0.6)"};
  }
  input[type="radio"]:checked ~ p {
    color: ${props => (props.checkedColor ? props.checkedColor : "#00000")};
  }
  p {
    margin: 0;
    height: 100%;
    line-height: 1.2;
    color: ${props => (props.color ? props.color : "#00000")};
    z-index: 2;
    position: relative;
    pointer-events: none;
  }
  span {
    border: ${props => (props.border ? props.border : "1px solid #e9e7e8")};
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const LabelDisable = styled(Label)`
  cursor: pointer;
  p {
    color: ${props => (props.color ? props.color : "#000000")};
  }
  span {
    background: ${props => (props.background ? props.background : "#e9e8e7")};
    border: ${props => (props.border ? props.border : "1px solid #ccc")};
  }
`;

class Radio extends Component {
  render() {
    return this.props.disable ? (
      <LabelDisable
        color={this.props.color}
        border={this.props.border}
        padding={this.props.padding}
        background={this.props.background}
        width={this.props.width}
        checkedBackground={this.props.checkedBackground}
        checkedBorder={this.props.checkedBorder}
        checkedColor={this.props.checkedColor}
      >
        <input
          type="radio"
          name={this.props.radioName}
          defaultChecked={this.props.defaultChecked}
          value={this.props.text}
          disabled
        />
        <p>{this.props.text}</p>
        <span />
      </LabelDisable>
    ) : (
      <Label
        color={this.props.color}
        border={this.props.border}
        padding={this.props.padding}
        width={this.props.width}
        checkedBackground={this.props.checkedBackground}
        checkedBorder={this.props.checkedBorder}
        checkedColor={this.props.checkedColor}
      >
        <input
          type="radio"
          name={this.props.radioName}
          defaultChecked={this.props.defaultChecked}
          value={this.props.text}
        />
        <p>{this.props.text}</p>
        <span />
      </Label>
    );
  }
}

export default Radio;
