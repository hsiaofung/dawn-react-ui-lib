import React, { Component } from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "微軟正黑體",
    "Courier New";
  margin-bottom: 35px;
  border-collapse: collapse;
  border-radius: 5px;
  border-style: hidden;
  box-shadow: 0 0 0 1px #ccc;
  overflow: hidden;
  margin-left: 1px;

  tr:nth-child(even) {
    background: #f4f4f4;
    margin: 0;
  }

  th {
    text-align: left;
    font-weight: bold;
    margin: 0;
    font-size: 20px;
    padding: 16px;
    border-right: 1px solid #ccc;
  }
  td {
    margin: 0;
    padding: 16px;
    border-right: 1px solid #ccc;
    border: 1px solid #ccc;
  }
`;

class TableSection extends Component {
  render() {
    return (
      <Table>
        <tbody>
          {this.props.children}
        </tbody>
      </Table>
    );
  }
}

export default TableSection;
