import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import CodeSection from "../../components/CodeSection";
import ComponentSection from "../../components/ComponentSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";

// UI component
import { Input } from "dawn-react-ui-lib";

class DocInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      inputValue: null
    };
  }
  componentDidMount() {
    this.setState({
      list: this.refs
    });
  }
  inputValue = input => {
    this.setState({ [input.name]: input.value });
    // fetch -> post api
  };
  render() {
    const { list } = this.state;
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={list}>
          <h1>Input</h1>
          <p>
            快速製作簡易input，
            <Commit>注意：字體有被裁剪的情況可以增加width。</Commit>
            <br />
            <span style={{ fontSize: "12px", color: "#bc937c" }}>
              *目前尚未支援RWD版面
            </span>
          </p>
          <h2 ref="title1">基本輸入欄位</h2>
          <p>只有input提示文字，沒有另外設定的基礎格式。</p>
          <ComponentSection>
            <div style={{ width: "20%" }}>
              <Input inputValue={this.inputValue} placeholder="基本輸入欄位" />
            </div>
          </ComponentSection>
          <CodeSection>
            {`
<Input
  inputValue={this.inputValue}
  placeholder="基本輸入欄位"
/>
              `}
          </CodeSection>
          <h2 ref="title2">自定義輸入欄位</h2>
          <p>可以更改成您想要的input樣式。</p>
          <ComponentSection>
            <div style={{ display: "flex" }}>
              <div style={{ width: "13%" }}>
                <Input
                  inputValue={this.inputValue}
                  placeholder="警示提示"
                  warning
                />
              </div>
              <div style={{ width: "9%" }}>
                <Input
                  inputValue={this.inputValue}
                  placeholder="寬度"
                  width="100px"
                />
              </div>
              <div style={{ width: "13%" }}>
                <Input
                  inputValue={this.inputValue}
                  placeholder="border"
                  border="1px dashed blue"
                />
              </div>
              <div style={{ width: "13%" }}>
                <Input
                  inputValue={this.inputValue}
                  placeholder="focusBorder"
                  focusBorder="1px solid #c69967"
                />
              </div>
              <div style={{ width: "13%" }}>
                <Input
                  inputValue={this.inputValue}
                  placeholder="padding"
                  padding="10px 45px"
                />
              </div>
            </div>
          </ComponentSection>
          <CodeSection>
            {`
<Input inputValue={this.inputValue} placeholder="警示提示" warning />
<Input inputValue={this.inputValue} placeholder="寬度" width="100px" />
<Input inputValue={this.inputValue} placeholder="border" border="1px dashed blue" />
<Input inputValue={this.inputValue} placeholder="focusBorder" focusBorder="1px solid #c69967" />
<Input inputValue={this.inputValue} placeholder="padding" padding="10px 45px" />
              `}
          </CodeSection>
          <h2 ref="title3">如何取出input資料</h2>
          <CodeSection>
            {`
import React, { Component } from "react";
import Input from "dawn-react-ui-lib";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  
  inputValue = input => {
    this.setState({ [input.name]: input.value });
    // fetch -> post api
  };

  render() {
    return (
      <Input
        inputValue={this.inputValue}
        placeholder="*姓名"
      />
    )
  }
}

export default Example;
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
              <td>type</td>
              <td>String</td>
              <td>"text"</td>
              <td>輸入的屬性</td>
            </tr>
            <tr>
              <td>width</td>
              <td>String</td>
              <td>"150px"</td>
              <td>input的寬度</td>
            </tr>
            <tr>
              <td>padding</td>
              <td>String</td>
              <td>"10px"</td>
              <td>input的padding</td>
            </tr>
            <tr>
              <td>border</td>
              <td>String</td>
              <td>"1px solid #e9e7e8"</td>
              <td>input的框線</td>
            </tr>
            <tr>
              <td>fontSize</td>
              <td>String</td>
              <td>16px</td>
              <td>設定提示文字大小</td>
            </tr>
            <tr>
              <td>focusBorder</td>
              <td>String</td>
              <td />
              <td>focus後的框線設定</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>String</td>
              <td />
              <td>input裡的提示文字</td>
            </tr>
            <tr>
              <td>warning</td>
              <td>Boolean</td>
              <td>false</td>
              <td>input警示預設設定，warning會出現紅邊線。</td>
            </tr>
            <tr>
              <td>inputValue</td>
              <td>Function</td>
              <td>{`inputValue={this.functionName}`}</td>
              <td>取出input輸入的value</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocInput;
