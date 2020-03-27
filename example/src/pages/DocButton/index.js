import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import CodeSection from "../../components/CodeSection";
import ComponentSection from "../../components/ComponentSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";

// UI component
import { Button } from "dawn-react-ui-lib";

class DocButton extends Component {
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
          <h1>Button 按鈕</h1>
          <p>
            按鈕{`<Button>`}應用相當的廣泛，主要功能目的為傳送資料的互動元件。
            <br />
            除了做為表單的送出之外，還可透用JavaScript的事件觸發更多的功能，結合參數設定快速製作簡易按鈕，讓傳統陽春的按鈕更加美化。
          </p>
          <h2 ref="title1">基本按鈕</h2>
          <p>基礎格式的按鈕。</p>
          <ComponentSection>
            <div style={{ width: "12%" }}>
              <Button text="送出" padding="16px" />
            </div>
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import Button from "dawn-react-ui-lib";

class Example extends Component{
  render(){
    return(
      <Button text="送出" />
    )
  }
}

export default Example;`}</CodeSection>

          <h2 ref="title2">自定義按鈕</h2>
          <p>自定義按鈕，提供使用者參數設定，更改樣式。</p>
          <ComponentSection>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "15px" }}>
                <Button
                  text="登入"
                  textColor="#ffffff"
                  backgroundColor="#4a5c68"
                  padding="16px 32px"
                />
              </div>
              <div style={{ marginRight: "15px" }}>
                <Button
                  text="立即註冊"
                  textColor="#ffffff"
                  backgroundColor="#bc937c"
                  padding="16px 32px"
                />
              </div>
              <div style={{ marginRight: "15px" }}>
                <Button
                  text="繼續挑選"
                  textColor="#000000"
                  backgroundColor="#E9E7E8"
                  padding="16px 32px"
                />
              </div>
              <div style={{ marginRight: "15px" }}>
                <Button
                  text="加入購物袋"
                  textColor="#FFFFFF"
                  backgroundColor="#111111"
                  padding="16px 32px"
                />
              </div>
            </div>
          </ComponentSection>
          <CodeSection>{`
import React, { Component } from "react";
import Button from "dawn-react-ui-lib";

class Example extends Component{
  render(){
    return(
      <Button text="登入" textColor="#ffffff" backgroundColor="#4a5c68"/>
      <Button text="立即註冊" textColor="#ffffff" backgroundColor="#bc937c"/>
      <Button text="繼續挑選" textColor="#000000" backgroundColor="#E9E7E8"/>
      <Button text="加入購物袋" textColor="#FFFFFF" backgroundColor="#111111"/>
    )
  }
}

export default Example;
`}</CodeSection>
          <h2 ref="title3">如何執行fetch api function事件</h2>
          <CodeSection>
            {`
import React, { Component } from "react";
import Button from "dawn-react-ui-lib";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state:{},
      data: { key1: "value1", key2: "value2" }
    };
  }
  get = () => {
    fetch("api").then(res => res.json)
      .then(data => this.setState({ state: data }));
  }
  send = () => {
    fetch("api", {
      method: "POST", // PUT PATCH
      body: JSON.stringify({ key: this.state.data }),
      mode: "cors",
      headers: {
        "content-type": "application/json"
      }
    });
  };
  render() {
    return (
      <div>
        <Button text="接收" onClick={this.get}/>
        <Button text="送出" onClick={this.send}/>
      </div>
    );
  }
}

export default Example
              `}
          </CodeSection>
          <h2 ref="title4">參數設定</h2>
          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>text</td>
              <td>String</td>
              <td />
              <td>按鈕的文字內容</td>
            </tr>
            <tr>
              <td>type</td>
              <td>String</td>
              <td />
              <td>
                模式：預設空值，要另用下列
                <Commit>onClick</Commit>
                屬性串接api
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 設定submit，用{`<form>`}串接api，
                <Commit>要另外設value屬性="Submit"</Commit>
              </td>
            </tr>
            <tr>
              <td>onClick</td>
              <td>Function</td>
              <td>false</td>
              <td>執行fetch api function的事件</td>
            </tr>
            <tr>
              <td>textColor</td>
              <td>String</td>
              <td>#000000</td>
              <td>按鈕的文字顏色</td>
            </tr>
            <tr>
              <td>backgroundColor</td>
              <td>String</td>
              <td>rgb(221, 221, 221)</td>
              <td>按鈕的背景顏色</td>
            </tr>
            <tr>
              <td>fontSize</td>
              <td>String</td>
              <td>14px</td>
              <td>按鈕的字體大小</td>
            </tr>
            <tr>
              <td>fontWeight</td>
              <td>String</td>
              <td>0</td>
              <td>按鈕的字體粗細</td>
            </tr>
            <tr>
              <td>border</td>
              <td>String</td>
              <td>0</td>
              <td>按鈕的邊框線條樣式</td>
            </tr>
            <tr>
              <td>borderRadius</td>
              <td>String</td>
              <td>0</td>
              <td>設定按鈕圓角</td>
            </tr>
            <tr>
              <td>width</td>
              <td>String</td>
              <td>100%</td>
              <td>設定按鈕寬度</td>
            </tr>
            <tr>
              <td>margin</td>
              <td>String</td>
              <td>"5px 5px"</td>
              <td>設定按鈕margin</td>
            </tr>
            <tr>
              <td>padding</td>
              <td>String</td>
              <td>0</td>
              <td>設定按鈕padding</td>
            </tr>
            <tr>
              <td>form</td>
              <td>String</td>
              <td />
              <td>使用form接api時候，要設定form屬性對應form的id</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocButton;
