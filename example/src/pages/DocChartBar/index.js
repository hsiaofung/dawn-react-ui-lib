import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";
// UI component
import { BarGraph } from "dawn-react-ui-lib";

class DocChartBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleList: {}
    };
  }

  // 定義初始titleList為空物件

  componentDidMount = () => {
    this.setState({
      titleList: this.refs
    });
    // 將this.refs存在this.state.titleList並傳值給<MainContent>
  };
  render() {
    const color = [
      "rgba(235, 136, 150,1)",
      "rgba(235, 136, 150,0.7)",
      "rgba(235, 136, 150,0.4)",
      "rgba(235, 136, 150,0.1)"
    ];
    const classicColor = ["rgba(198,153,103,1)", "rgba(198,153,103,0.5)"];
    const data1 = [
      { year: 2001, money: 10 },
      { year: 2002, money: 20 },
      { year: 2003, money: 30 },
      { year: 2004, money: 40 },
      { year: 2005, money: 50 }
    ];
    const data2 = [
      { year: 2001, money: 10, number: 12 },
      { year: 2002, money: 20, number: 22 },
      { year: 2003, money: 30, number: 32 },
      { year: 2004, money: 40, number: 42 },
      { year: 2005, money: 50, number: 52 }
    ];
    const data3 = [
      { year: 2001, money: 10, number: 12, score: 50 },
      { year: 2002, money: 20, number: 22, score: 60 },
      { year: 2003, money: 30, number: 32, score: 40 },
      { year: 2004, money: 40, number: 42, score: 90 },
      { year: 2005, money: 50, number: 52, score: 70 }
    ];

    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={this.state.titleList}>
          <h1>Bar Graph 長條圖</h1>
          {/* <p>元件敘述</p> */}
          <h2 ref="title1">基本長條圖</h2>
          <p>
            是一種以長方形的長度為變量的統計圖表。長條圖用來比較兩個或以上的價值（不同時間或者不同條件），通常利用於較小的數據集分析。長條圖亦可橫向排列，或用多維方式表達。
            <br />
            <Commit>基本長條圖範例</Commit>
          </p>
          <ComponentSection>
            <BarGraph
              id="example1"
              data={data1}
              text={{
                textHeight: 1,
                textRight: 2.5,
                showText: true
              }}
              showAxis={{ xAxis: true, yAxis: false }}
            />
            <BarGraph
              id="example1"
              data={data1}
              text={{
                textHeight: 1,
                textRight: 2.5,
                textHover: true,
                showText: false
              }}
              showAxis={{ xAxis: true, yAxis: true }}
            />
            <BarGraph
              id="example1"
              data={data2}
              bar={{ barWidth: 0.3, barSet: 2 }}
              text={{
                textHeight: 1,
                textRight: 0,
                textHover: true,
                showText: false
              }}
              showAxis={{ xAxis: true, yAxis: false }}
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { BarGraph } from "dawn-react-ui-lib";

class Example extends Component{
  render(){
    const data1= [
      { year: 2001, money: 10 },
      { year: 2002, money: 20 },
      { year: 2003, money: 30 },
      { year: 2004, money: 40 },
      { year: 2005, money: 50 }
    ];
    const data2 = [
      { year: 2001, money: 10, number: 12 },
      { year: 2002, money: 20, number: 22 },
      { year: 2003, money: 30, number: 32 },
      { year: 2004, money: 40, number: 42 },
      { year: 2005, money: 50, number: 52 }
    ];
    return(
      <BarGraph
        id="example1"
        data={data1}
        text={{
          textHeight: 1,
          textRight: 2.5,
          showText: true
        }}
        showAxis={{ xAxis: true, yAxis: false }}
      />
      <BarGraph
        id="example1"
        data={data1}
        text={{
          textHeight: 1,
          textRight: 2.5,
          textHover: true,
          showText: false
        }}
        showAxis={{ xAxis: true, yAxis: true }}
      />
      <BarGraph
        id="example1"
        data={data2}
        bar={{ barWidth: 0.3, barSet: 2 }}
        text={{
          textHeight: 1,
          textRight: 0,
          textHover: false,
          showText: true
        }}
        showAxis={{ xAxis: true, yAxis: false }}
      />
    )
  }
}

export default Example;`}</CodeSection>
          <h2 ref="title2">長條圖</h2>
          <p>敘述次標題的文字</p>
          <ComponentSection>
            <BarGraph
              id={"example3"}
              data={data3}
              text={{
                textHeight: -20,
                showText: true,
                showPercent: true,
                decimal: 0
              }}
              showAxis={{ xAxis: true, yAxis: true }}
              type="stackedBar"
            />
            <BarGraph
              id="example3"
              data={data3}
              svgWidth={300}
              svgHeight={300}
              // text={{
              //   textHeight: 5,
              //   textRight :30,
              //   showText: true,
              //   showPercent: true,
              //   decimal: 0
              // }}
              showAxis={{ xAxis: true, yAxis: true }}
              type="horizontal"
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { BarGraph } from "dawn-react-ui-lib";

class Example extends Component{
  render(){
    const data3 = [
      { year: 2001, money: 10, number: 12, score: 50 },
      { year: 2002, money: 20, number: 22, score: 60 },
      { year: 2003, money: 30, number: 32, score: 40 },
      { year: 2004, money: 40, number: 42, score: 90 },
      { year: 2005, money: 50, number: 52, score: 70 }
    ];
    return(
      <BarGraph
        id="example3"
        data={data3}
        text={{
          textHeight: -20,
          showPercent: true,
          decimal: 0
        }}
        showAxis={{ xAxis: true, yAxis: true }}
        type="stackedBar"
      />
      <BarGraph
        id="example3"
        data={data3}
        svgWidth={300}
        svgHeight={300}
        showAxis={{ xAxis: true, yAxis: true }}
        type="horizontal"
      />
    )
  }
}

export default Example;`}</CodeSection>

          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>id</td>
              <td>String</td>
              <td>bar</td>
              <td>圖檔ID名稱</td>
            </tr>
            <tr>
              <td>data</td>
              <td>Object</td>
              <td>[]</td>
              <td>資料參數</td>
            </tr>
            <tr>
              <td>margin</td>
              <td>Object</td>
              <td>{`{ top : 30 , right : 30, bottom : 30 , left : 30 }`}</td>
              <td>外邊界距離</td>
            </tr>
            <tr>
              <td>svgWidth</td>
              <td>Number</td>
              <td>400</td>
              <td>圖檔寬度</td>
            </tr>
            <tr>
              <td>svgHeight</td>
              <td>Number</td>
              <td>300</td>
              <td>圖檔高度</td>
            </tr>
            <tr>
              <td>bar</td>
              <td>Object</td>
              <td>{`{ barWidth : 0.5 , barSet : 1 }`}</td>
              <td>barWidth 長條圖柱寬，barSet 長條圖群內組數</td>
            </tr>
            <tr>
              <td>color</td>
              <td>Array</td>
              <td>
                [ "rgba(235, 136, 150,1)", "rgba(235, 136, 150,0.7)", <br />
                "rgba(235, 136, 150,0.4)", "rgba(235, 136, 150,0.1)" ]
              </td>
              <td>長條圖柱體顏色</td>
            </tr>
            <tr>
              <td>text</td>
              <td>Object</td>
              <td>
                {`{ textHeight :2 , textRight : 2 , textHover : false ,`}
                <br />
                {` showText : true , showPercent : false , decimal : 0 }`}
              </td>
              <td>
                textHeight 標示文字距柱高的高度, textRight 標示文字向右偏離距離,
                textHover 是否顯示滑鼠效果,
                <br /> showText 是否顯示文字標示, showPercent 是否顯示百分比,
                decimal 顯示百分比小數點位數
              </td>
            </tr>
            <tr>
              <td>showAxis</td>
              <td>Object</td>
              <td>{`{ xAxis: false, yAxis: false }`}</td>
              <td>座標顯示</td>
            </tr>
            <tr>
              <td>initX</td>
              <td>Array</td>
              <td>[]</td>
              <td>x座標的初始刻度</td>
            </tr>
            <tr>
              <td>type</td>
              <td>String</td>
              <td>classic</td>
              <td>
                長條圖種類
                <br />
                classic || stackedBar || horizontal
              </td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocChartBar;
