import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import CodeSection from "../../components/CodeSection";
import ComponentSection from "../../components/ComponentSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";

// UI component
import { Step, Button } from "dawn-react-ui-lib";

class DocStep extends Component {
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
    const dataList = [
      { number: "1", title: "第一步驟", content: "content1", id: 0 },
      { number: "2", title: "第二步驟", content: "content2", id: 1 },
      { number: "3", title: "第三步驟", content: "content3", id: 2 },
      { number: "4", title: "第四步驟", content: "content4", id: 3 },
      { number: "5", title: "第五步驟", content: "content5", id: 4 }
    ];
    const scrollSetup = {
      startingHeight: 330,
      prevScroll: 10
    };
    const dataList2 = [
      { number: "1", title: "第一步驟", content: "content1", id: 5 },
      { number: "2", title: "第二步驟", content: "content2", id: 6 },
      { number: "3", title: "第三步驟", content: "content3", id: 7 },
      { number: "4", title: "第四步驟", content: "content4", id: 8 },
      { number: "5", title: "第五步驟", content: "content5", id: 9 }
    ];
    const scrollSetup2 = {
      startingHeight: 1700,
      prevScroll: 10
    };
    const numberStep2 = {
      numberBorder: "1px dashed red"
    };
    const button2 = {
      prevButton: {
        firstPrevButton: (
          <Button
            text="回首頁"
            padding="16px 62px"
            onClick={() => {
              return false;
            }}
          />
        ),
        function: [
          {
            id: 7,
            onClick: () => {
              alert("123");
            }
          },
          {
            id: 8,
            onClick: () => {
              alert("444");
            }
          }
        ]
      },
      nextButton: {
        lastNextButton: (
          <Button
            text="加入購物袋"
            textColor="#FFFFFF"
            backgroundColor="#111111"
            padding="16px 42px"
            onClick={() => {
              return false;
            }}
          />
        ),
        function: [
          {
            id: 7,
            onClick: () => {
              alert("333");
            }
          },
          {
            id: 8,
            onClick: () => {
              alert("456");
            }
          }
        ]
      }
    };
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={list}>
          <h1>Step</h1>
          <p>快速製作步驟流程。</p>
          <h2 ref="title1">基本步驟流程樣式</h2>
          <p>
            用於一步一步流程的情況下，
            <Commit>注意：跳轉步驟的情況下不適用。</Commit>
          </p>
          <ComponentSection>
            <Step
              dataList={dataList}
              stepWidth="100%"
              titleWidth="200px"
              defaultOpen={0}
              scrollSetup={scrollSetup}
            />
          </ComponentSection>
          <CodeSection>
            {`
const dataList = [
  { number: "1", title: "第一步驟", content: "content1", id: 0 },
  { number: "2", title: "第二步驟", content: "content2", id: 1 },
  { number: "3", title: "第三步驟", content: "content3", id: 2 },
  { number: "4", title: "第四步驟", content: "content4", id: 3 },
  { number: "5", title: "第五步驟", content: "content5", id: 4 }
];
const scrollSetup = {
  startingHeight: 0,
  prevScroll: 10
};

<Step
  dataList={dataList}
  stepWidth="100%"
  titleWidth="200px"
  defaultOpen={4}
  loading
  scrollSetup={scrollSetup}
/>
            `}
          </CodeSection>
          <h2 ref="title2">如何自定義步驟流程樣式</h2>
          <p>
            最基本只要有 dataList
            就可以形成步驟基本樣式，想要更改樣式請參照下面範例與參數設定。
          </p>
          <ComponentSection>
            <Step
              dataList={dataList2}
              defaultOpen={8}
              loading={2000}
              scrollSetup={scrollSetup2}
              stepWidth="100%"
              stepBorderBottom="1px solid #ccc"
              numberStep={numberStep2}
              button={button2}
              titleWidth="180px"
            />
          </ComponentSection>
          <CodeSection>
            {`
import React, { Component } from "react";
import { Step, Button } from "dawn-react-ui-lib";

class Example extends Component {
  render() {
    const dataList = [
      { number: "1", title: "第一步驟", content: "content1", id: 5 },
      { number: "2", title: "第二步驟", content: "content2", id: 6 },
      { number: "3", title: "第三步驟", content: "content3", id: 7 },
      { number: "4", title: "第四步驟", content: "content4", id: 8 },
      { number: "5", title: "第五步驟", content: "content5", id: 9 }
    ];
    const scrollSetup = {
      startingHeight: 1580,
      prevScroll: 10
    };
    const numberStep = {
      numberBorder: "1px dashed red"
    };
    const button = {
      prevButton: {
        firstPrevButton: (
          <Button
            text="回首頁"
            padding="16px 62px"
            onClick={() => {
              return;
            }}
          />
        ),
        function: [
          {
            id: 7,
            onClick: () => {
              alert("123");
            }
          },
          {
            id: 8,
            onClick: () => {
              alert("444");
            }
          }
        ]
      },
      nextButton: {
        lastNextButton: (
          <Button
            text="加入購物袋"
            textColor="#FFFFFF"
            backgroundColor="#111111"
            padding="16px 42px"
            onClick={() => {
              return;
            }}
          />
        ),
        function: [
          {
            id: 7,
            onClick: () => {
              alert("333");
            }
          },
          {
            id: 8,
            onClick: () => {
              alert("456");
            }
          }
        ]
      }
    };
    return (
      <Step
        dataList={dataList} 
        defaultOpen={8} 
        loading={2000} // loading 持續2秒
        scrollSetup={scrollSetup}
        stepWidth="100%"
        stepBorderBottom="1px solid #ccc"
        numberStep={numberStep}
        button={button}
        titleWidth="180px"
      />
    )
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
              <td>Object</td>
              <td>
                {`{number:String,`}
                <br />
                &nbsp;{`title:String,`}
                <br />
                &nbsp;{`content:Component||String,`}
                <br />
                &nbsp;{`id:Number||String}`}
              </td>
              <td>
                代入資料生成步驟流程
                <br /> dataList=
                {`{number:步驟編號, title:步驟標題, content:內容, id:步驟id`}
                <Commit>不可重複</Commit>
                {`}`}
              </td>
            </tr>
            <tr>
              <td>defaultOpen</td>
              <td>dataList的id值</td>
              <td>{`(...dataList[id])`}</td>
              <td>設定預設展開步驟，代入dataList.id值</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>Number</td>
              <td>1000</td>
              <td>設定跳轉頁面是否開啟 & 設定秒數</td>
            </tr>
            <tr>
              <td>scrollSetup</td>
              <td>Object</td>
              <td>
                {`{startingHeight:0||Number,`}
                <br />
                &nbsp;{`prevScroll:0||Number,`}
                <br />
                &nbsp;{`elementId:window||String}`}
              </td>
              <td>
                設定滾動功能，無任何設定代表只開啟，使用預設高度
                <br />
                scrollSetup=
                {
                  "{startingHeight:設定下一步幅度修正(會根據當前層次載入的位置高度不同而影響),prevScroll:設定上一步的幅度修正(會根據當前層次的其他元件高度而影響),elementId:對應有滾動軸的element id屬性}"
                }
              </td>
            </tr>
            <tr>
              <td>stepWidth</td>
              <td>String</td>
              <td>400px</td>
              <td>設定整體寬度</td>
            </tr>
            <tr>
              <td>stepBorderBottom</td>
              <td>String</td>
              <td>1px solid rgb(152, 152, 152)</td>
              <td>設定步驟流程底線樣式</td>
            </tr>
            <tr>
              <td>numberStep</td>
              <td>Object</td>
              <td>
                {`{numberSize:"40px",`}
                <br />
                &nbsp;{`numberFontSize:"30px",`}
                <br />
                &nbsp;{`numberBorder:"1px solid rgb(152, 152, 152)"}`}
              </td>
              <td>
                更改編號樣式
                <br />
                numberStep=
                {
                  "{numberSize:更改編號邊框大小, numberFontSize:更改編號文字大小, numberBorder:更改編號邊框樣式}"
                }
              </td>
            </tr>
            <tr>
              <td>button</td>
              <td>Object</td>
              <td>
                {`{prevButton:{firstPrevButton:第一步驟(上一步)按鈕自定義,function:[{id:(...dataList[id]),onClick:添加額外function}]},`}
                <br />
                &nbsp;
                {`nextButton:{lastNextButton:最後步驟(下一步)按鈕自定義,function:[{id:(...dataList[id]),onClick:添加額外function}]}}`}
              </td>
              <td>
                第一步驟的上一步按鈕與最後步驟的下一步按鈕自定義
                <br />
                選定特定的步驟上一步或下一步按鈕，添加額外的function行為
              </td>
            </tr>
            <tr>
              <td>titleWidth</td>
              <td>String</td>
              <td>100%</td>
              <td>
                更改編號 & 標題<Commit>總共</Commit>寬度(感應區域)
              </td>
            </tr>
            <tr>
              <td>titleBorder</td>
              <td>String</td>
              <td>0</td>
              <td>更改標題框線樣式</td>
            </tr>
            <tr>
              <td>color</td>
              <td>String</td>
              <td>#000</td>
              <td>更改編號和標題的文字顏色</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocStep;
