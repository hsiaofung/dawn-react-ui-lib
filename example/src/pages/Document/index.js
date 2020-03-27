import React, { Component } from "./node_modules/react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";

class Document extends Component {
  render() {
    return (
      <div>
        <DocumentNavBar />
        <MainContent>
          <h1>Document</h1>
        </MainContent>
      </div>
    );
  }
}

export default Document;
