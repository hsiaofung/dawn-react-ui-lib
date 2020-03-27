import React, { Component } from "react";
import * as Style from "./css";
import PropTypes from "prop-types";

export class Header extends Component {
  render() {
    const { backgroundColor, height } = this.props;
    return (
      <Style.Header backgroundColor={backgroundColor} height={height}>
        <Style.LeftSection>{this.props.leftSection}</Style.LeftSection>
        {this.props.centerSection}
        {this.props.children}
        <Style.RightSection>{this.props.rightSection}</Style.RightSection>
      </Style.Header>
    );
  }
}
Header.propTypes = {
  children: PropTypes.object,
  leftSection: PropTypes.object,
  rightSection: PropTypes.object,
  centerSection: PropTypes.object,
  backgroundColor: PropTypes.string,
  height: PropTypes.string
};
export default Header;
