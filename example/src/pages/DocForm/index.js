import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import CodeSection from "../../components/CodeSection";
import ComponentSection from "../../components/ComponentSection";
import TableSection from "../../components/TableSection";
// UI component
import { Form, Button, Input, Select, Checkbox } from "dawn-react-ui-lib";

export class DocForm extends Component {
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
    const selectList = [
      { option: "台北市" },
      { option: "新北市" },
      { option: "桃園市" }
    ];
    const checkboxList = [
      { text: "簡單", id: "a1", checkbox: "0", type: "radio", name: "radio1" },
      { text: "稍難", id: "a2", checkbox: "1", type: "radio", name: "radio1" },
      { text: "困難", id: "a3", checkbox: "2", type: "radio", name: "radio1" },
      { text: "地獄", id: "a4", checkbox: "3", type: "radio", name: "radio1" }
    ];
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={list}>
          <h1>Form</h1>
          <p>搭配其他元件形成Form表單</p>
          <h2 ref="title1">Form使用方式</h2>
          <p>
            最簡便form的基本構成，其中包含Button, Input, Select,
            Checkbox四個element
          </p>
          <ComponentSection>
            <div style={{ width: "20%" }}>
              <Form>
                <p style={{ margin: "0" }}>請輸入資料：</p>
                <Input
                  type="email"
                  placeholder="Email"
                  width="300px"
                  focusBorder="1px solid blue"
                  padding="12px 25px"
                />
                <div style={{ marginTop: "10px" }}>
                  <Input
                    placeholder="PassWord"
                    width="300px"
                    focusBorder="1px solid orange"
                    padding="12px 25px"
                  />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Select
                    dataList={selectList}
                    title="城市"
                    width="300px"
                    titleWidth="150px"
                  />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Checkbox
                    dataList={checkboxList}
                    cbDefault={checkboxList[2].text}
                  />
                </div>
                <div style={{ marginTop: "10px", display: "flex" }}>
                  <div>
                    <Button
                      text="確認"
                      textColor="#ffffff"
                      backgroundColor="#111111"
                      fontSize="13px"
                      padding="10px 20px"
                    />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <Button
                      text="取消"
                      textColor="#000000"
                      backgroundColor="#e9e8e7"
                      fontSize="13px"
                      padding="10px 20px"
                    />
                  </div>
                </div>
              </Form>
            </div>
          </ComponentSection>
          <CodeSection>{`
import React, { Component } from "react";
import { Form, Button, Input, Select, Checkbox } from "dawn-react-ui-lib";

export class Example extends Component {
  render() {

    const selectList = [
      { option: "台北市" },
      { option: "新北市" },
      { option: "桃園市" }
    ];
    const checkboxList = [
      { text: "簡單", id: "a1", checkbox: "0", type: "radio", name: "radio1" },
      { text: "稍難", id: "a2", checkbox: "1", type: "radio", name: "radio1" },
      { text: "困難", id: "a3", checkbox: "2", type: "radio", name: "radio1" },
      { text: "地獄", id: "a4", checkbox: "3", type: "radio", name: "radio1" }
    ];

    return (
      <div style={{ width: "20%" }}>
        <Form action="api" method="post" id="form1">
          <p style={{margin:"0"}}>請輸入資料</p>
          <Input 
            name="Email"
            type="Email"
            placeholder="Email"
            width="300px"
            focusBorder="1px solid blue"
          />
          <div style={{ marginTop: "10px" }}>
            <Input
              name="passWord"
              placeholder="passWord"
              width="300px"
              focusBorder="1px solid orange"
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <Select
              name="city"
              dataList={selectList}
              title="城市"
              width="300px"
              titleWidth="150px"
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            {/* name = dataList.name */}
            <Checkbox  
              dataList={checkboxList}
              cbDefault={checkboxList[2].text}
            />
          </div>
          <div style={{ marginTop: "10px",display:"flex" }}>
            <div>
              <Button 
                type="submit" 
                value="Submit" 
                form="form1" 
                text="確認" 
                textColor="#5b00ae" 
                backgroundColor="linear-gradient(#f1e1ff,#b15bff)" 
                border="2px solid #5b00ae" 
                borderRadius="10px" fontWeight="700" 
              />
            </div>
            <div style={{marginLeft:"20px"}}>
              <Button 
                text="取消" 
                textColor="#4f9d9d" 
                backgroundColor="linear-gradient(#c4e1e1,#5cadad)" 
                border="2px solid #4f9d9d" 
                borderRadius="10px" 
                fontWeight="700" 
              />
            </div>                
          </div>
        </Form>
      </div>
    )
  }
}

export default Example;
              `}</CodeSection>
          <h2 ref="title2">參數設定</h2>
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
              <td>300px</td>
              <td>form的寬度</td>
            </tr>
            <tr>
              <td>border</td>
              <td>String</td>
              <td>0</td>
              <td>form的框線</td>
            </tr>
            <tr>
              <td>borderRadius</td>
              <td>String</td>
              <td />
              <td>設定form的圓角</td>
            </tr>
            <tr>
              <td>action</td>
              <td>String</td>
              <td />
              <td>透過form的action屬性連接api</td>
            </tr>
            <tr>
              <td>method</td>
              <td>String</td>
              <td />
              <td>有設定action屬性的時候需要設定連接api的方式</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocForm;
