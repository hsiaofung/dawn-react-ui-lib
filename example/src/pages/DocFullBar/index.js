import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import CodeSection from "../../components/CodeSection";
import ComponentSection from "../../components/ComponentSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";

//
import { FullBar, Button } from "dawn-react-ui-lib";
//
import close from "./close.svg";
import styled from "styled-components";

const CloseDiv = styled.span`
  width: 24px;
  height: 24px;

  &::before {
    background-image: url(${close});
    content: " ";
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    width: inherit;
    height: inherit;
  }
`;

class ContentComponent extends Component {
  render() {
    return (
      <div style={{ textTransform: "uppercase" }}>
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid #f4f4f6"
          }}
        >
          <div
            onClick={() => this.props.closeFullBar()}
            style={{
              position: "absolute",
              width: "60px",
              height: "45px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              zIndex: "1",
              cursor: "pointer"
            }}
          >
            <CloseDiv />
          </div>
          <div
            style={{
              position: "relative",
              paddingLeft: "60px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              height: "45px",
              top: "0",
              left: "0"
            }}
          >
            <span style={{ fontSize: "20px" }}>SHOPPING BAG</span>
          </div>
          <div
            style={{
              position: "absolute",
              right: "5%",
              top: "1.1%",
              fontSize: " 20px"
            }}
          >
            <i className="fas fa-shopping-cart" />
            <span style={{ fontSize: "16px", marginLeft: "5px" }}>0</span>
          </div>
        </div>
        <div style={{ margin: "3em auto 0", textAlign: "center" }}>
          <i
            className="fas fa-shopping-cart"
            style={{
              color: "gray",
              fontSize: "50px",
              opacity: ".5"
            }}
          />
          <p>You do not have any items in your Shopping Bag</p>
        </div>
      </div>
    );
  }
}
export class DocFullBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      open: false
    };
  }
  componentDidMount() {
    this.setState({
      list: this.refs
    });
  }
  openFullBar = () => {
    this.setState({
      open: true
    });
  };
  closeFullBar = () => {
    this.setState({
      open: false
    });
  };
  render() {
    const { list, open } = this.state;
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={list}>
          <h1>FullBar</h1>
          <p>製作滿版導覽列樣式</p>
          <h2 ref="title1">基本導覽列樣式</h2>
          <p>
            最基本只要有open設定即可打開導覽列
            <Commit>注意：open屬性必須要有</Commit>
          </p>
          <ComponentSection>
            <div style={{ width: "12%" }}>
              <Button
                text="OPEN"
                padding="16px"
                textColor="#FFFFFF"
                backgroundColor="#111111"
                onClick={this.openFullBar}
              />
            </div>

            <FullBar
              open={open}
              content={<ContentComponent closeFullBar={this.closeFullBar} />}
            />
          </ComponentSection>
          <CodeSection>
            {`
            import React, { Component } from "react";
            import { FullBar,Button } from "dawn-react-ui-lib";

            class Example extends Component {
                constructor(props) {
                    super(props);
                    this.state = {
                      open: false
                    };
                  }
                  openFullBar = () => {
                    this.setState({
                      open: true
                    });
                  };
                  closeFullBar = () => {
                    this.setState({
                      open: false
                    });
                  };
                render() {
                  return (
                  <div>
                  <div style={{ width: "12%" }}>
                  <Button
                    text="OPEN"
                    padding="16px"
                    textColor="#FFFFFF"
                    backgroundColor="#111111"
                    onClick={this.openFullBar}
                  />
                </div>
                  <FullBar
                    open={open}
                    content={<ContentComponent closeFullBar={this.closeFullBar} />}   
                  />
                </div>
                  )
                }
              }
              
              export default Example;
              

            `}
          </CodeSection>
          <h2 ref="title2">參數設定</h2>
          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>open</td>
              <td>bool</td>
              <td>false</td>
              <td>開啟FullBar開關狀態</td>
            </tr>
            <tr>
              <td>content</td>
              <td>Object</td>
              <td />
              <td>內容</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocFullBar;
