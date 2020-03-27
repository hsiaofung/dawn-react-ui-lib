import React, { Component } from "react";
import styled from "styled-components";

const Searching = styled.input`
  height: 100%;
  background: transparent;
  padding: 0 5px;
  box-shadow: 0 0 0;
  border: 0;
  outline: 0;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Montserrat", "微軟正黑體",
    sans-serif;
  &::placeholder {
    color: #d9c0b3;
  }
`;

class Search extends Component {
  render() {
    return <Searching type="text" placeholder="Type for search..." />;
  }
}

export default Search;
