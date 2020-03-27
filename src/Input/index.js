import React, { Component } from "react";
import * as Style from "./css";
export class Input extends Component {
  onChange = e => {
    const { inputValue } = this.props;
    if (inputValue) {
      inputValue(e.target);
    }
  };
  render() {
    const {
      id,
      className,
      name,
      val,
      placeholder,
      warning,
      width,
      border,
      focusBorder,
      margin,
      padding,
      fontSize,
      type
    } = this.props;
    return (
      <div
        style={{
          margin: margin ? margin : "5px"
        }}
      >
        <Style.Input
          name={name}
          id={id}
          calss={className}
          type={type ? type : "text"}
          width={width}
          padding={padding}
          border={border}
          fontSize={fontSize}
          focusBorder={focusBorder}
          placeholder={placeholder}
          value={val}
          onChange={this.onChange}
          warning={warning}
        />
      </div>
    );
  }
}

export default Input;
