import React, { Component } from "react";
import * as Style from "./css";

export class Button extends Component {
  onClick = e => {
    const { onClick } = this.props;
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };
  render() {
    const {
      id,
      className,
      name,
      text,
      textColor,
      backgroundColor,
      width,
      margin,
      padding,
      type,
      fontSize,
      fontWeight,
      border,
      borderRadius,
      value,
      form
    } = this.props;
    return (
      <div
        style={{
          width: width ? width : "100%",
          margin: margin ? margin : "5px"
        }}
      >
        <Style.Button
          name={name}
          id={id}
          calss={className}
          type={type}
          textColor={textColor}
          backgroundColor={backgroundColor}
          fontSize={fontSize}
          fontWeight={fontWeight}
          border={border}
          padding={padding}
          borderRadius={borderRadius}
          value={value}
          form={form}
          onClick={this.onClick}
        >
          {text}
        </Style.Button>
      </div>
    );
  }
}

export default Button;
