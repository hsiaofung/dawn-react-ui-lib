import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";

// UI component
import { PieGraph } from "dawn-react-ui-lib";

class DocChartPie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      data: [
        { platform: "台北市", percentage: 20.11 },
        { platform: "桃園市", percentage: 36.69 },
        { platform: "新竹市", percentage: 13.06 },
        { platform: "台中市", percentage: 20.06 },
        { platform: "南投縣", percentage: 10.11 },
        { platform: "嘉義市", percentage: 17.69 },
        { platform: "高雄市", percentage: 10.06 },
        { platform: "屏東縣", percentage: 63.06 },
        { platform: "宜蘭縣", percentage: 7.06 },
        { platform: "苗栗縣", percentage: 43.06 }
      ]
    };
  }
  componentDidMount() {
    this.setState({
      list: this.refs
    });
    this.timeout();
  }
  timeout = () => {
    setTimeout(() => {
      this.setState({
        data: [
          { platform: 2001, percentage: 40 },
          { platform: 2002, percentage: 42 },
          { platform: 2003, percentage: 90 }
        ]
      });
    }, 5000);
  };
  render() {
    const { list, data } = this.state;
    const svgSetup = {
      width: 500,
      height: 500
    };
    const svgSetup2 = {
      width: 500,
      height: 500,
      radius: {
        outerRadius: 250,
        innerRadius: 100
      },
      stroke: "#000",
      duration: 1000
    };
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={list}>
          <h1>Pie Graph圓餅圖</h1>
          <p>製作空心或實心的圓餅資料圖。</p>
          <h2 ref="title1">基本圓餅圖的構成</h2>
          <p>
            基礎樣式需要資料如右：
            <Commit>
              data：資料、clsNa：className、width：寬度、height：高度，是必須要有的參數。
            </Commit>
          </p>
          <Commit>
            data：資料必須放在this.state裡面，才能透過setState來變換資料。
          </Commit>
          <ComponentSection>
            <PieGraph clsNa="pie1" data={data} svgSetup={svgSetup} />
          </ComponentSection>
          <CodeSection>{`
import React, { Component } from "react";
import { PieGraph } from "dawn-react-ui-lib";

class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { platform: "Android", percentage: 20.11 },
        { platform: "Windows", percentage: 36.69 },
        { platform: "ios", percentage: 13.06 },
        { platform: "OSX", percentage: 20.06 }
      ]
    };
  }
  render() {
    const { data } = this.state;
    const svgSetup = {
      width: 500,
      height: 500
    };
    return (
      <PieGraph clsNa="pie" data={data} svgSetup={svgSetup} />
    )
  }
}

export default example;
          `}</CodeSection>
          <h2 ref="title2">自定義圓餅圖</h2>
          <p>
            透過改變color顏色、radius內外圈位置、stroke線條顏色、動畫作用時間duration，來完成自定義圓餅圖。
          </p>
          <ComponentSection>
            <PieGraph
              type="linePie"
              clsNa="pie2"
              data={data}
              svgSetup={svgSetup2}
            />
          </ComponentSection>
          <CodeSection>{`
import React, { Component } from "react";
import { PieGraph } from "dawn-react-ui-lib";

class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { platform: "Android", percentage: 20.11 },
        { platform: "Windows", percentage: 36.69 },
        { platform: "ios", percentage: 13.06 },
        { platform: "OSX", percentage: 20.06 }
      ]
    };
  }
  render() {
    const { data } = this.state;
    const svgSetup = {
      width: 500,
      height: 500,
      radius: {
        outerRadius: 230,
        innerRadius: 100
      },
      stroke: "#000",
      duration: 1000
    };
    return (
      <PieGraph
      type="linePie"
      clsNa="pie"
      data={data}
      svgSetup={svgSetup}
    />
    )
  }
}

export default example
`}</CodeSection>
          <h2 ref="title3">如何更換資料</h2>
          <p>透過function觸發setState來改變this.state.data的value即可。</p>
          <h2 ref="title4">參數設定</h2>
          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>clsNa</td>
              <td>String</td>
              <td />
              <td>設定圓餅圖的className避免多個圓餅圖時去互相影響。</td>
            </tr>
            <tr>
              <td>type</td>
              <td>String</td>
              <td>pie || linePie</td>
              <td>設定圓餅圖的樣式，目前有：基本圓餅圖與有線圓餅圖兩種。</td>
            </tr>
            <tr>
              <td>data</td>
              <td>Object</td>
              <td>{`{key1:value,key2:value}`}</td>
              <td>
                要代入形成圓餅圖的資料，key1為中文敘述，key2為比例值
                <br />
                <Commit>只要有這兩個key的資料就能成立，不能多也不能少。</Commit>
              </td>
            </tr>
            <tr>
              <td>svgSetup</td>
              <td>Object</td>
              <td>{`{}`}</td>
              <td>自定義樣式所需參數</td>
            </tr>
            <tr>
              <td>svgSetup.width</td>
              <td>Number</td>
              <td>200</td>
              <td>svg圖檔的寬度</td>
            </tr>
            <tr>
              <td>svgSetup.height</td>
              <td>Number</td>
              <td>200</td>
              <td>svg圖檔的高度</td>
            </tr>
            <tr>
              <td>svgSetup.color</td>
              <td>Array</td>
              <td>
                ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", <br />
                "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]
              </td>
              <td>圓餅圖扇形區域的顏色</td>
            </tr>
            <tr>
              <td>svgSetup.radius</td>
              <td>Object</td>
              <td>{`{outerRadius:Number(linePie模式時候，寬或高取最小/2), innerRadius:Number}`}</td>
              <td>圓餅圖扇形區域的範圍，來實現實心或空心的設計</td>
            </tr>
            <tr>
              <td>svgSetup.stroke</td>
              <td>String</td>
              <td>#fff</td>
              <td>圓餅圖扇形區域之間的線條顏色</td>
            </tr>
            <tr>
              <td>svgSetup.duration</td>
              <td>Number</td>
              <td>500</td>
              <td>圓餅圖動畫特效作用時間</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocChartPie;
