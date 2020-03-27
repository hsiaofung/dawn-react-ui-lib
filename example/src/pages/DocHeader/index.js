import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
//
import heartImage from "./heart.png";
import bagImage from "./shopping-bag.png";
import logoimg from "./logo.png";
import styled from "styled-components";
// UI component

import { Header, SearchBar } from "dawn-react-ui-lib";

const Logo = styled.div`
  width: 85px;
  height: 37px;
  background: url(${logoimg}) no-repeat;
  background-size: 250px 67px;
  background-position: bottom left;
  display: inline-block;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    margin-top: 10px;
  }
`;

export class DocHeader extends Component {
  state = {
    titleList: {},
    searchText: ""
  };
  componentDidMount = () => {
    this.setState({
      titleList: this.refs
    });
  };
  searchText = data => {
    this.setState({
      searchText: data
    });
  };
  render() {
    const RightSide = () => {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <h6 style={{ marginLeft: "10px" }}>登入/註冊</h6>
          <img
            src={heartImage}
            alt=""
            style={{
              width: "28px",
              height: "28px",
              margin: "0 10px"
            }}
          />
          <img
            src={bagImage}
            alt=""
            style={{ width: "31px", height: "28px" }}
          />
        </div>
      );
    };
    const LeftSide = () => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          }}
        >
          <h6 style={{ margin: "0 10px" }}>TW/NT($)</h6>
          <SearchBar
            placeholder="搜索"
            handleSearch={this.searchText}
            searchText={this.state.searchText}
          />
        </div>
      );
    };
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={this.state.titleList}>
          <h1>Header</h1>
          <p>
            Header{`<Header>`}
            <br />
            <span style={{ fontSize: "12px", color: "#bc937c" }}>
              *目前尚未支援RWD版面
            </span>
          </p>
          <h2 ref="title1">基本樣式</h2>
          <ComponentSection>
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
          </ComponentSection>
          <CodeSection>{`import React, { Component } from 'React';
import { Header } from "dawn-react-ui-lib";

class Example extends Component{
    render(){
        return(  
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
        )
    }
}
export default Example;`}</CodeSection>
          <h2 ref="title2">自訂義樣式</h2>
          <ComponentSection>
            <Header
              backgroundColor="#e9e8e7"
              height="100px"
              leftSection={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer"
                  }}
                >
                  <h6 style={{ margin: "0 10px" }}>TW/NT($)</h6>
                  <SearchBar
                    placeholder="搜索"
                    handleSearch={this.searchText}
                    searchText={this.state.searchText}
                  />
                </div>
              }
              centerSection={<Logo />}
              rightSection={<RightSide />}
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from 'React';
import { Header } from "dawn-react-ui-lib";
import LeftSide from './LeftSide';
import Logo from './Logo';
import RightSide from './RightSide';



class Example extends Component{
    render(){
        return(  
          <Header
          backgroundColor="#e9e8e7"
          height="100px"
          leftSection={<LeftSide />}
              centerSection={<Logo />}
              rightSection={<RightSide />}
        />
        )
    }
}
export default Example;`}</CodeSection>
          <h2 ref="title3">參數設定</h2>
          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>backgroundColor</td>
              <td>String</td>
              <td>#FFFFFF</td>
              <td>背景顏色</td>
            </tr>
            <tr>
              <td>height</td>
              <td>String</td>
              <td>70px</td>
              <td>導覽列高度，此參數必須給予單位值</td>
            </tr>
            <tr>
              <td>leftSection</td>
              <td>Object</td>
              <td />
              <td>導覽列左側的區塊。</td>
            </tr>
            <tr>
              <td>centerSection</td>
              <td>Object</td>
              <td />
              <td>導覽列中間的區塊。</td>
            </tr>
            <tr>
              <td>rightSection</td>
              <td>Object</td>
              <td />
              <td>導覽列右側的區塊。</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocHeader;
