import React, { Component } from "react";
import Prism from "prismjs";

class CodeSection extends Component {
  componentDidMount = () => {
    Prism.highlightAll();
  };
  render() {
    return (
      <pre className="language-jsx">
        <code>{this.props.children}</code>
      </pre>
    );
  }
}

export default CodeSection;
