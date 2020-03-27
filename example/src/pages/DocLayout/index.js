import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
import ComponentSection from "../../components/ComponentSection";
import ExampleOne from "./ExampleOne";
// UI component

class DocLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {}
    };
  }
  componentDidMount() {
    this.setState({
      list: this.refs
    });
  }
  render() {
    const { list } = this.state;
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={list}>
          <h1>Layout</h1>
          <p>用於佈置UI component項目的組件和選項</p>
          <h2 ref="title1">Layout樣式</h2>
          <ComponentSection>
            <ExampleOne />
          </ComponentSection>
          <CodeSection>{`
import React from "react";

import { Layout, Footer, Header } from "dawn-react-ui-lib";

const copyRight = "© 2019周生生集團國際有限公司";

const subTitleGroup = [
  {
    title: "關於我們",
    content: [
      { text: "聯絡我們", link: "" },
      { text: "分店位置", link: "" },
      { text: "願景及品牌理念", link: "" },
      { text: "歷史傳承與里程碑", link: "" },
      { text: "珠寶品質與工藝", link: "" },
      { text: "周生生集團", link: "" }
    ]
  },
  {
    title: "客戶服務",
    content: [
      { text: "服務", link: "" },
      { text: "貨品配送", link: "" },
      { text: "退貨及換貨", link: "" },
      { text: "幫助", link: "" }
    ]
  }
];

const HeaderContent = () => (
    
  <Header backgroundColor="#e9e8e7">
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      }}
    >
      <h6 style={{ marginLeft: "10px" }}>TW/NT($)</h6>
      <h6 style={{ marginLeft: "10px" }}>願望清單</h6>
      <h1 style={{ margin: "0 10px" }}>LOGO</h1>
      <h6 style={{ marginLeft: "10px" }}>購物車</h6>
      <h6 style={{ marginLeft: "10px" }}>悅享錢</h6>
      <h6 style={{ marginLeft: "10px" }}>登入/註冊</h6>
    </div>
  </Header>
);

const FooterContent = () => {
  return <Footer copyRight={copyRight} subTitleGroup={subTitleGroup} />;
};

const exampleOne = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>EXAMPLE ONE</h2>
    </div>
  );
};

export default Layout(HeaderContent, exampleOne, FooterContent);



              `}</CodeSection>
          <h2 ref="title3">參數設定</h2>
          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>Layout(Header, Component, Footer, state)</td>
              <td>Object</td>
              <td />
              <td>
                Header為頁面Headercomponent/Component為頁面代入的內容/Footer為頁面Footercomponent/state為Component傳入state
              </td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocLayout;
