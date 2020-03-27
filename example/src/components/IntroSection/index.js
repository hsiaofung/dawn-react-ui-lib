import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  padding: 15px;
  color: #333333;
  h3 {
    cursor: pointer;
    font-size: 14px;
  }
  ul {
    padding: 0;
  }
  li {
    font-size: 11px;
    margin: 0 -15px;
    padding: 5px 0 5px 25px;
    &:hover {
      background: #f4f4f4;
    }
  }
`;

class IntroSection extends Component {
  scroll = data => {
    var scrollOptions = {
      left: 0,
      top: this.props.titleList[data].offsetTop - 15,
      behavior: "smooth"
    };

    window.scrollTo(scrollOptions);
  };
  scrollToh1 = () => {
    var scrollOptions = {
      left: 0,
      top: 0,
      behavior: "smooth"
    };
    window.scrollTo(scrollOptions);
  };
  render() {
    const titleList = this.props.titleList
      ? Object.keys(this.props.titleList)
      : [];
    return (
      <Div>
        <h3 onClick={this.scrollToh1}>簡介</h3>
        <ul>
          {titleList.map((data, i) => (
            <li key={i} onClick={this.scroll.bind(this, data)}>
              {this.props.titleList[data].innerText}
            </li>
          ))}
        </ul>
      </Div>
    );
  }
}

export default IntroSection;
