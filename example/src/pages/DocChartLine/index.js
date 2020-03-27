import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";
//
import { LineGraph } from "dawn-react-ui-lib";
//
class DocChartLine extends Component {
  state = {
    titleList: {},
    data: [
      { year: 1, people: 30 },
      { year: 2, people: 60 },
      { year: 3, people: 20 },
      { year: 4, people: 50 },
      { year: 5, people: 10 },
      { year: 6, people: 70 }
    ],
    dataForTwo: [
      { year: 2010, people: 300 },
      { year: 2011, people: 600 },
      { year: 2012, people: 200 },
      { year: 2013, people: 500 },
      { year: 2014, people: 100 },
      { year: 2016, people: 350 }
    ],
    dataForThree: [
      {
        country: "TW",
        gdp: [
          { year: 2001, number: 100 },
          { year: 2003, number: 150 },
          { year: 2007, number: 300 },
          { year: 2010, number: 455 },
          { year: 2015, number: 600 },
          { year: 2019, number: 650 }
        ]
      },
      {
        country: "US",
        gdp: [
          { year: 2001, number: 200 },
          { year: 2003, number: 190 },
          { year: 2007, number: 350 },
          { year: 2010, number: 470 },
          { year: 2015, number: 800 },
          { year: 2019, number: 770 }
        ]
      }
    ],
    dataForStackedArea: [
      { month: 1, dollar: 15 },
      { month: 2, dollar: 100 },
      { month: 3, dollar: 200 },
      { month: 4, dollar: 110 },
      { month: 5, dollar: 70 },
      { month: 6, dollar: 150 },
      { month: 7, dollar: 190 },
      { month: 8, dollar: 190 },
      { month: 9, dollar: 190 },
      { month: 10, dollar: 20 },
      { month: 11, dollar: 100 },
      { month: 12, dollar: 500 },
      { month: 1, dollar: 150 },
      { month: 2, dollar: 100 },
      { month: 3, dollar: 400 },
      { month: 4, dollar: 150 },
      { month: 5, dollar: 170 },
      { month: 6, dollar: 180 },
      { month: 7, dollar: 210 },
      { month: 8, dollar: 220 },
      { month: 9, dollar: 580 },
      { month: 10, dollar: 600 },
      { month: 11, dollar: 720 },
      { month: 12, dollar: 310 }
    ]
  };
  // 定義初始titleList為空物件

  componentDidMount = () => {
    this.setState({
      titleList: this.refs
    });
    // 將this.refs存在this.state.titleList並傳值給<MainContent>
  };
  render() {
    const svgSetup = {
      width: 500,
      height: 350,
      color: [
        //多組線的顏色
        "rgba(198,153,103,0.6)",
        "rgba(198,153,103,0.5)",
        "rgba(198,153,103,0.4)",
        "rgba(198,153,103,0.3)",
        "rgba(198,153,103,0.2)",
        "rgba(198,153,103,0.1)"
      ]
    };
    const svgSetupForTwo = {
      width: 500,
      height: 350,
      pathColor: "rgba(198,153,103,1)", //單組線的顏色
      pathWidth: "1px",
      dotColor: "rgba(198,153,103,1)",
      dotHoverColor: "rgba(198,153,103,.8)",
      dotSize: 4,
      dotHoverSize: 8,
      dotTextBg: "rgba(198,153,103,0.5)"
    };
    const svgSetupForStackedArea = {
      width: 960,
      height: 500,
      group: [1, 2]
    };
    const { data, dataForTwo, dataForThree, dataForStackedArea } = this.state;
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={this.state.titleList}>
          <h1>Line Graph 折線圖</h1>
          <p>元件敘述</p>

          <h2 ref="title1">基本折線圖</h2>
          <p>
            製作折線資料圖
            <Commit>重點文字</Commit>
          </p>
          <ComponentSection>
            <LineGraph
              data={data}
              clsNa="line"
              svgSetup={svgSetup}
              type="classic"
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { LineGraph } from "dawn-react-ui-lib";

class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { year: 1, people: 30 },
        { year: 2, people: 60 },
        { year: 3, people: 20 },
        { year: 4, people: 50 },
        { year: 5, people: 10 },
        { year: 6, people: 70 }
      ]
    };
  }
  render() {
    const svgSetup = {
      width: 500,
      height: 350
    };
    const { data } = this.state;
    return (
      <LineGraph
      data={data}
      clsNa="line"
      svgSetup={svgSetup}
      type="classic"
    />
    )
  }
}

export default example;`}</CodeSection>

          <h2 ref="title2">自訂義折線圖</h2>
          <p> 製作折線資料圖</p>
          <ComponentSection>
            <LineGraph
              data={dataForTwo}
              clsNa="line-for-two"
              svgSetup={svgSetupForTwo}
              needDot
              type="classic"
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { LineGraph } from "dawn-react-ui-lib";

class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { year: 2010, people: 30 },
        { year: 2011, people: 60 },
        { year: 2012, people: 20 },
        { year: 2013, people: 50 },
        { year: 2014, people: 10 },
        { year: 2016, people: 70 }
      ]
    };
  }
  render() {
    const svgSetup = {
      width: 500,
      height: 350,
      pathColor: "rgba(198,153,103,1)",
      pathWidth: "1px",
      dotColor: "rgba(198,153,103,1)",
      dotHoverColor: "rgba(198,153,103,.8)",
      dotSize: 4,
      dotHoverSize: 8,
      dotTextBg: "rgba(198,153,103,0.5)"
    };
    const { data } = this.state;
    return (
      <LineGraph
      data={data}
      clsNa="line-for-two"
      svgSetup={svgSetup}
      needDot
      type="classic"
    />
    )
  }
}

export default example;`}</CodeSection>

          <h2 ref="title3">多組數據折線圖</h2>
          <p>製作折線資料圖</p>
          <ComponentSection>
            <LineGraph
              data={dataForThree}
              svgSetup={svgSetup}
              needDot
              clsNa="line-many-data"
              type="MultipleLineGraph"
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { LineGraph } from "dawn-react-ui-lib";

class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          country: "TW",
          gdp: [
            { year: 2001, number: 100 },
            { year: 2003, number: 150 },
            { year: 2007, number: 300 },
            { year: 2010, number: 455 },
            { year: 2015, number: 600 },
            { year: 2019, number: 650 }
          ]
        },
        {
          country: "US",
          gdp: [
            { year: 2001, number: 200 },
            { year: 2003, number: 130 },
            { year: 2007, number: 350 },
            { year: 2010, number: 452 },
            { year: 2015, number: 600 },
            { year: 2019, number: 670 }
          ]
        }
      ]
    };
  }
  render() {
    const svgSetup = {
      width: 500,
      height: 350,
      color:[ "rgba(198,153,103,0.6)",
      "rgba(198,153,103,0.5)",
      "rgba(198,153,103,0.4)",
      "rgba(198,153,103,0.3)",
      "rgba(198,153,103,0.2)",
      "rgba(198,153,103,0.1)"]
    };
    const { data } = this.state;
    return (
      <LineGraph
              data={dataForThree}
              svgSetup={svgSetup}
              needDot
              clsNa="line-many-data"
              type="MultipleLineGraph"
            />
    />
    )
  }
}

export default example;`}</CodeSection>
          <h2 ref="title4">堆疊面積圖</h2>
          <p>製作折線資料圖</p>
          <ComponentSection>
            <LineGraph
              data={dataForStackedArea}
              svgSetup={svgSetupForStackedArea}
              needDot
              clsNa="StackedAreaChart"
              type="StackedArea"
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { LineGraph } from "dawn-react-ui-lib";

class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { month: 1, dollar: 15 },
        { month: 2, dollar: 100 },
        { month: 3, dollar: 200 },
        { month: 4, dollar: 110 },
        { month: 5, dollar: 70 },
        { month: 6, dollar: 150 },
        { month: 7, dollar: 190 },
        { month: 8, dollar: 190 },
        { month: 9, dollar: 190 },
        { month: 10, dollar: 20 },
        { month: 11, dollar: 100 },
        { month: 12, dollar: 500 },
        { month: 1, dollar: 150 },
        { month: 2, dollar: 100 },
        { month: 3, dollar: 400 },
        { month: 4, dollar: 150 },
        { month: 5, dollar: 170 },
        { month: 6, dollar: 180 },
        { month: 7, dollar: 210 },
        { month: 8, dollar: 220 },
        { month: 9, dollar: 580 },
        { month: 10, dollar: 600 },
        { month: 11, dollar: 720 },
        { month: 12, dollar: 310 }
      ]
    };
  }
  render() {
    const svgSetup = {
      width: 960,
      height: 500,
      group: [1, 2]
    };
    const { data } = this.state;
    return (
      <LineGraph
        data={data}
        svgSetup={svgSetup}
        needDot
        clsNa="StackedAreaChart"
        type="StackedArea"
      />
    )
  }
}

export default example;`}</CodeSection>
          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>data</td>
              <td>Object</td>
              <td>{`{key1:value,key2:value}`}</td>
              <td>
                要代入形成折線圖的資料，key1為中文敘述，key2為比例值
                <br />
                <Commit>只要有這兩個key的資料就能成立，不能多也不能少。</Commit>
              </td>
            </tr>
            <tr>
              <td>clsNa</td>
              <td>String</td>
              <td />
              <td>設定折線圖的className避免多個折線圖時去互相影響。</td>
            </tr>
            <tr>
              <td>needDot</td>
              <td>bool</td>
              <td />
              <td>設定是否需要資訊座標位置。</td>
            </tr>
            <tr>
              <td>type</td>
              <td>String</td>
              <td>classic</td>
              <td>
                設定折線圖型態。
                <Commit>
                  可設定型態:classic、MultipleLineGraph、StackedArea
                </Commit>
              </td>
            </tr>
            <tr>
              <td>needCoordinate</td>
              <td>bool</td>
              <td>true</td>
              <td>是否需要顯示座標線</td>
            </tr>
            <tr>
              <td>svgSetup.width</td>
              <td>Number</td>
              <td />
              <td>svg圖檔的寬度</td>
            </tr>
            <tr>
              <td>svgSetup.height</td>
              <td>Number</td>
              <td />
              <td>svg圖檔的高度</td>
            </tr>
            <tr>
              <td>svgSetup.pathColor</td>
              <td>String</td>
              <td>#bc937c</td>
              <td>svg 數據線的顏色</td>
            </tr>
            <tr>
              <td>svgSetup.pathWidth</td>
              <td>String</td>
              <td />
              <td>svg 數據線的寬度</td>
            </tr>
            <tr>
              <td>svgSetup.dotColor</td>
              <td>String</td>
              <td>rgba(198,153,103,1)</td>
              <td>svg 座標點的顏色</td>
            </tr>
            <tr>
              <td>svgSetup.dotHoverColor</td>
              <td>String</td>
              <td>rgba(198,153,103,.8)</td>
              <td>svg 座標點 Hover 的顏色</td>
            </tr>
            <tr>
              <td>svgSetup.dotSize</td>
              <td>Number</td>
              <td>5</td>
              <td>svg 座標點的大小</td>
            </tr>
            <tr>
              <td>svgSetup.dotHoverSize</td>
              <td>Number</td>
              <td>8</td>
              <td>svg 座標點 Hover 的大小</td>
            </tr>
            <tr>
              <td>svgSetup.dotTextBg</td>
              <td>String</td>
              <td />
              <td>svg 座標點Hover所顯示的資訊框背景顏色</td>
            </tr>
            <tr>
              <td>svgSetup.color</td>
              <td>Array</td>
              <td>
                [ "#bc937c", "#4a5c68", "#E9E7E8", "#111111",
                "rgba(198,153,103,0.6)", "rgba(198,153,103,0.5)",
                "rgba(198,153,103,0.4)", "rgba(198,153,103,0.3)",
                "rgba(198,153,103,0.2)", "rgba(198,153,103,0.1)" ]
              </td>
              <td>type為MultipleLineGraph、StackedArea時，可設定顏色種類</td>
            </tr>
            <tr>
              <td>svgSetup.group</td>
              <td>Array</td>
              <td />
              <td>type為StackedArea時，所設定的群組key</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocChartLine;
