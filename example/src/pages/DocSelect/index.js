import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import CodeSection from "../../components/CodeSection";
import ComponentSection from "../../components/ComponentSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";

// UI component
import { Select } from "dawn-react-ui-lib";

class DocCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      selectValue: "台北市"
    };
  }
  componentDidMount() {
    this.setState({
      list: this.refs
    });
  }
  selectValue = select => {
    this.setState({ [select.name]: select.value });
    // fetch -> post api
  };
  render() {
    const { list } = this.state;
    const dataList = [
      { option: "台北市" },
      { option: "新北市" },
      { option: "桃園市" }
    ];
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={list}>
          <h1>Select</h1>
          <p>
            快速製作簡易select，
            <Commit>注意：字體有被裁剪的情況可以增加width。</Commit>
          </p>
          <h2 ref="title1">基本選單欄位</h2>
          <p>只有select提示文字，沒有另外設定的基礎格式。</p>
          <ComponentSection>
            <div style={{ width: "20%" }}>
              <Select selectValue={this.selectValue} dataList={dataList} />
            </div>
          </ComponentSection>
          <CodeSection>
            {`
const dataList = [
  { option: "台北市" },
  { option: "新北市" },
  { option: "桃園市" }
];

<Select
  selectValue={this.selectValue}
  dataList={dataList}
/>
            `}
          </CodeSection>
          <h2 ref="title2">附有標題選單欄位</h2>
          <p>另外加有標題文字的select基本樣式。</p>
          <ComponentSection>
            <div style={{ width: "25%" }}>
              <Select
                selectValue={this.selectValue}
                dataList={dataList}
                title="城市"
              />
            </div>
          </ComponentSection>
          <CodeSection>
            {`
const dataList = [
  { option: "台北市" },
  { option: "新北市" },
  { option: "桃園市" }
];

<Select
  selectValue={this.selectValue}
  dataList={dataList}
  title="城市"
/>
            `}
          </CodeSection>
          <h2 ref="title3">自定義選單欄位</h2>
          <p>
            可以更改成您想要的select樣式，
            <span style={{ color: "red" }}>
              注意：titleWidth要延展的同時，width也要"稍微"延展。
            </span>
          </p>
          <ComponentSection>
            <div style={{ display: "flex" }}>
              <div style={{ width: "18.5%" }}>
                <Select
                  selectValue={this.selectValue}
                  dataList={dataList}
                  title="標題寬度設定"
                  width="220px"
                  titleWidth="200px"
                />
              </div>
              <div style={{ width: "17%" }}>
                <Select
                  selectValue={this.selectValue}
                  dataList={dataList}
                  title="警示提示"
                  width="200px"
                  titleWidth="150px"
                  warning
                />
              </div>
              <div style={{ width: "21%" }}>
                <Select
                  selectValue={this.selectValue}
                  dataList={dataList}
                  title="字體粗細"
                  width="250px"
                  titleWidth="150px"
                  fontWeight="700"
                  titleFontWeight="700"
                />
              </div>
              <div style={{ width: "25%" }}>
                <Select
                  selectValue={this.selectValue}
                  dataList={dataList}
                  title="字體大小"
                  width="300px"
                  titleWidth="150px"
                  fontSize="20px"
                  titleFontSize="20px"
                />
              </div>
            </div>
          </ComponentSection>
          <CodeSection>
            {`
const dataList = [
  { option: "台北市" },
  { option: "新北市" },
  { option: "桃園市" }
];

<Select
  selectValue={this.selectValue}
  dataList={dataList}
  title="標題寬度設定"
  width="300px"
  titleWidth="200px"
/>

<Select
  selectValue={this.selectValue}
  dataList={dataList}
  title="警示提示"
  width="200px"
  titleWidth="150px"
  warning
/>

<Select
  selectValue={this.selectValue}
  dataList={dataList}
  title="字體粗細"
  width="250px"
  titleWidth="150px"
  fontWeight="700"
  titleFontWeight="700"
/>

<Select
  selectValue={this.selectValue}
  dataList={dataList}
  title="字體大小"
  width="300px"
  titleWidth="150px"
  fontSize="20px"
  titleFontSize="20px"
/>
            `}
          </CodeSection>
          <h2 ref="title4">如何取出select資料</h2>
          <CodeSection>
            {`
import React, { Component } from "react";
import { Select } from "dawn-react-ui-lib";
            
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "台北市"
    };
  }

  selectValue = select => {
    this.setState({ [select.name]: select.value });
    // fetch -> post api
  };

  render() {
    const dataList = [
      { option: "台北市" },
      { option: "新北市" },
      { option: "桃園市" }
    ];
    return (
      <Select
        selectValue={this.selectValue}
        dataList={dataList}
        warning
      />
    )
  }
}

export default Example;
            `}
          </CodeSection>
          <h2 ref="title5">參數設定</h2>
          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>width</td>
              <td>String</td>
              <td>
                有標題的狀態寬度預設值是150px
                <br />
                無標題的狀態寬度預設值是100px
              </td>
              <td>設定select寬度</td>
            </tr>
            <tr>
              <td>height</td>
              <td>String</td>
              <td>40px</td>
              <td>設定select高度</td>
            </tr>
            <tr>
              <td>padding</td>
              <td>String</td>
              <td>"0 0 0 7px"</td>
              <td>設定select padding</td>
            </tr>
            <tr>
              <td>fontSize</td>
              <td>String</td>
              <td>14px</td>
              <td>設定select字體大小</td>
            </tr>
            <tr>
              <td>fontWeight</td>
              <td>String</td>
              <td>0</td>
              <td>設定select字體粗細</td>
            </tr>
            <tr>
              <td>titleWidth</td>
              <td>String</td>
              <td>100px</td>
              <td>設定title寬度</td>
            </tr>
            <tr>
              <td>titleFontSize</td>
              <td>String</td>
              <td>14px</td>
              <td>設定title字體大小</td>
            </tr>
            <tr>
              <td>titleFontWeight</td>
              <td>String</td>
              <td>0</td>
              <td>設定title字體粗細</td>
            </tr>
            <tr>
              <td>warning</td>
              <td>Boolean</td>
              <td>false</td>
              <td>select警示預設設定，warning會出現紅邊線。</td>
            </tr>
            <tr>
              <td>title</td>
              <td>String</td>
              <td />
              <td>可以為select設定標題</td>
            </tr>
            <tr>
              <td>dataList</td>
              <td>Array</td>
              <td>{"[{option:option1},{option:option2}]"}</td>
              <td>要代入的資料</td>
            </tr>
            <tr>
              <td>selectValue</td>
              <td>Function</td>
              <td>{"selectValue={this.functionName}"}</td>
              <td>取出選取select的value，取的是 dataList[option]的value</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocCheckbox;
