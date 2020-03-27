import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
import ComponentSection from "../../components/ComponentSection";
import Commit from "../../components/Commit";

// UI component
import { Checkbox } from "dawn-react-ui-lib";

class DocCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      data: null
    };
  }
  componentDidMount() {
    this.setState({
      list: this.refs
    });
  }
  checkboxValue = checkboxValue => {
    this.setState({ [checkboxValue.id]: checkboxValue.value });
    // fetch -> post api
  };
  render() {
    const { list } = this.state;
    const dataList = [
      { text: "一", id: "a1", checkbox: "0", type: "radio", name: "radio1" },
      { text: "二", id: "a2", checkbox: "1", type: "radio", name: "radio1" },
      { text: "三", id: "a3", checkbox: "2", type: "radio", name: "radio2" },
      { text: "四", id: "a4", checkbox: "3", type: "radio", name: "radio2" }
    ];
    const dataList2 = [
      { text: "一", id: "b1", checkbox: "0", type: "checkbox" },
      { text: "二", id: "b2", checkbox: "1", type: "checkbox" },
      { text: "三", id: "b3", checkbox: "2", type: "checkbox" },
      { text: "四", id: "b4", checkbox: "3", type: "checkbox", disabled: true }
    ];
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={list}>
          <h1>Checkbox</h1>
          <p>
            checkbox目前採用直立排序，如果要採用橫向排序請用{`<div>`} &
            display=flex，
            <br />
            <Commit>
              注意：同一個page中Array裡面的id不能重複、有設定cbDefault要記得也要設定checkbox的基礎value。
            </Commit>
            <br />
            <Commit>
              注意：name屬性用於單選分組( type : radio )，同一個name分作一組。{" "}
            </Commit>
          </p>
          <h2 ref="title1">checkbox樣式</h2>
          <p>
            type：radio，擁有radio type屬性的所有checkbox中只能單選一個，
            <br />
            type：checkbox，可以複選。
          </p>
          <ComponentSection>
            <div style={{ display: "flex" }}>
              <div style={{ width: "50%", marginTop: "-10px" }}>
                <p style={{ marginLeft: "8px" }}>直排</p>
                <Checkbox
                  checkboxValue={this.checkboxValue}
                  dataList={dataList}
                  cbDefault
                />
              </div>
              <div>
                <p style={{ marginLeft: "8px" }}>橫排</p>
                <div
                  style={{ width: "50%", marginTop: "-10px", display: "flex" }}
                >
                  <Checkbox
                    checkboxValue={this.checkboxValue}
                    dataList={dataList2}
                    cbDefault="三"
                  />
                </div>
              </div>
            </div>
          </ComponentSection>
          <CodeSection>{`
const dataList = [
  { text: "一", id: "a1", checkbox: "0", type: "radio", name: "radio1" },
  { text: "二", id: "a2", checkbox: "1", type: "radio", name: "radio1" },
  { text: "三", id: "a3", checkbox: "2", type: "radio", name: "radio2" },
  { text: "四", id: "a4", checkbox: "3", type: "radio", name: "radio2" }
];
// 左邊範例
<Checkbox
  checkboxValue={this.checkboxValue}
  dataList={dataList}
  cbDefault
/>

const dataList2 = [
  { text: "一", id: "b1", checkbox: "0", type: "checkbox" },
  { text: "二", id: "b2", checkbox: "1", type: "checkbox" },
  { text: "三", id: "b3", checkbox: "2", type: "checkbox" },
  { text: "四", id: "b4", checkbox: "3", type: "checkbox", disabled: true }
];
// 右邊範例
<Checkbox
  checkboxValue={this.checkboxValue}
  dataList={dataList2}
  cbDefault="三"
/>
              `}</CodeSection>
          <h2 ref="title2">如何取出選擇的checkbox資料</h2>
          <CodeSection>
            {`
import React, { Component } from "react";
import Checkbox from "dawn-react-ui-lib";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  checkboxValue = checkbox => {
    this.setState({ [checkbox.id]: checkbox.value });
    // fetch -> post api
  };

  render() {
    return (
      <Checkbox
        checkboxValue={this.checkboxValue}
        dataList={dataList}
      />
    );
  }
}

export default Example;
              `}
          </CodeSection>
          <h2 ref="title3">參數設定</h2>
          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>dataList</td>
              <td>Obiect of Array</td>
              <td>
                {`[{
                    text:選項文字,
                    id:checkbox的id,
                    checkbox:傳出來的value,
                    type:checkbox屬性,
                    name:單選分組依據,
                    disabled:設定禁用
                  }]`}
              </td>
              <td>要代入的資料</td>
            </tr>
            <tr>
              <td>checkboxValue</td>
              <td>Function</td>
              <td>{"checkboxValue={this.functionName}"}</td>
              <td>取出選取checkbox的value，datas[checkbox]當作value值</td>
            </tr>
            <tr>
              <td>cbDefault</td>
              <td>Boolean || String</td>
              <td>false</td>
              <td>
                checkbox選擇預設，未指定特定checkbox則預設選取第一位，
                <br />
                要特別指定checkbox，則代入data[text]的value即可。
              </td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocCheckbox;
