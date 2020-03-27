import React, { Component } from "react";
import * as Style from "./css";

export class FullBar extends Component {
  componentDidUpdate() {
    const { open } = this.props;
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
  render() {
    return (
      <Style.Bg open={this.props.open}>
        <Style.Content open={this.props.open}>
          {this.props.content}
        </Style.Content>
      </Style.Bg>
    );
  }
}

export default FullBar;
