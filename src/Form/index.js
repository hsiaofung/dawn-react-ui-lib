import React, { Component } from "react";
import * as Style from "./css";

export class Form extends Component {
  render() {
    const {
      id,
      className,
      name,
      action,
      method,
      width,
      border,
      borderRadius,
      children
    } = this.props;
    return (
      <Style.Form
        action={action}
        method={method}
        id={id}
        className={className}
        name={name}
        width={width}
        border={border}
        borderRadius={borderRadius}
      >
        {children}
      </Style.Form>
    );
  }
}

export default Form;
