import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";
// UI component
import { AreaGraph } from "dawn-react-ui-lib";

class DocChartArea extends Component {
  state = {
    titleList: {}
  };

  componentDidMount = () => {
    this.setState({
      titleList: this.refs
    });
  };

  render() {
    const data = [
      { name: "臺北市", value: 100 },
      { name: "新北市", value: 60 },
      { name: "基隆市", value: 10 },
      { name: "桃園市", value: 20 },
      { name: "新竹縣", value: 30 },
      { name: "新竹市", value: 40 },
      { name: "苗栗縣", value: 50 },
      { name: "臺中市", value: 60 },
      { name: "彰化縣", value: 70 },
      { name: "雲林縣", value: 80 },
      { name: "嘉義市", value: 80 },
      { name: "嘉義縣", value: 90 },
      { name: "南投縣", value: 90 },
      { name: "臺南市", value: 70 },
      { name: "高雄市", value: 100 },
      { name: "屏東縣", value: 100 },
      { name: "宜蘭縣", value: 10 },
      { name: "花蓮縣", value: 50 },
      { name: "臺東縣", value: 40 },
      { name: "澎湖縣", value: 60 },
      { name: "金門縣", value: 20 },
      { name: "連江縣", value: 30 }
    ];
    const data2 = [
      { name: "臺北市", value: 4000 },
      { name: "新北市", value: 3200 },
      { name: "基隆市", value: 700 },
      { name: "桃園市", value: 1200 },
      { name: "新竹縣", value: 2300 },
      { name: "新竹市", value: 3900 },
      { name: "苗栗縣", value: 3200 },
      { name: "臺中市", value: 800 },
      { name: "彰化縣", value: 2100 },
      { name: "雲林縣", value: 1070 },
      { name: "嘉義市", value: 1600 },
      { name: "嘉義縣", value: 800 },
      { name: "南投縣", value: 1400 },
      { name: "臺南市", value: 1750 },
      { name: "高雄市", value: 2990 },
      { name: "屏東縣", value: 4200 },
      { name: "宜蘭縣", value: 1050 },
      { name: "花蓮縣", value: 1800 },
      { name: "臺東縣", value: 1410 },
      { name: "澎湖縣", value: 3820 },
      { name: "金門縣", value: 2730 },
      { name: "連江縣", value: 1560 }
    ];

    const svgSetup = {
      width: "100%",
      height: 600,
      rgb: "139,193,203",
      maxRange: 4500
    };
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={this.state.titleList}>
          <h1>Area Graph 地區分布圖</h1>
          <p>
            地區分布圖{`<AreaGraph>`}
            地區分佈圖通常用來顯示不同地理分區或區域以不同顏色或圖案與數據變量之間的關係，並把所顯示位置的數值​​變化或模式進行可視化處理。
          </p>

          <h2 ref="title1">基本地區分布圖</h2>
          <p>
            敘述次標題的文字
            <Commit>重點文字</Commit>
          </p>
          <ComponentSection>
            <AreaGraph data={data} clsNa="taiwan-map" />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { AreaChart } from "dawn-react-ui-lib";

class Example extends Component{
  render(){
    const data = [
      { name: "臺北市", value: 100 },
      { name: "新北市", value: 60 },
      { name: "基隆市", value: 10 },
      { name: "桃園市", value: 20 },
      { name: "新竹縣", value: 30 },
      { name: "新竹市", value: 40 },
      { name: "苗栗縣", value: 50 },
      { name: "臺中市", value: 60 },
      { name: "彰化縣", value: 70 },
      { name: "雲林縣", value: 80 },
      { name: "嘉義市", value: 80 },
      { name: "嘉義縣", value: 90 },
      { name: "南投縣", value: 90 },
      { name: "臺南市", value: 70 },
      { name: "高雄市", value: 100 },
      { name: "屏東縣", value: 100 },
      { name: "宜蘭縣", value: 10 },
      { name: "花蓮縣", value: 50 },
      { name: "臺東縣", value: 40 },
      { name: "澎湖縣", value: 60 },
      { name: "金門縣", value: 20 },
      { name: "連江縣", value: 30 }
    ];
    return(
      <AreaChart data={data} clsNa="taiwan-map" />
    )
  }
}

export default Example;`}</CodeSection>

          <h2 ref="title2">自定義地區分布圖</h2>
          <p>敘述次標題的文字</p>
          <ComponentSection>
            <AreaGraph data={data2} clsNa="taiwan-map-2" svgSetup={svgSetup} />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { AreaChart } from "dawn-react-ui-lib";

class Example extends Component{
  render(){
    const data = [
      { name: "臺北市", value: 4000 },
      { name: "新北市", value: 3200 },
      { name: "基隆市", value: 700 },
      { name: "桃園市", value: 1200 },
      { name: "新竹縣", value: 2300 },
      { name: "新竹市", value: 3900 },
      { name: "苗栗縣", value: 3200 },
      { name: "臺中市", value: 800 },
      { name: "彰化縣", value: 2100 },
      { name: "雲林縣", value: 1070 },
      { name: "嘉義市", value: 1600 },
      { name: "嘉義縣", value: 800 },
      { name: "南投縣", value: 1400 },
      { name: "臺南市", value: 1750 },
      { name: "高雄市", value: 2990 },
      { name: "屏東縣", value: 4200 },
      { name: "宜蘭縣", value: 1050 },
      { name: "花蓮縣", value: 1800 },
      { name: "臺東縣", value: 1410 },
      { name: "澎湖縣", value: 3820 },
      { name: "金門縣", value: 2730 },
      { name: "連江縣", value: 1560 }
    ];
    const svgSetup = {
      width: "100%",
      height: 600,
      rgb: "139,193,203",
      maxRange: 4500
    };
    return(
      <AreaGraph data={data} clsNa="taiwan-map-2" svgSetup={svgSetup} />
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
              <td>data</td>
              <td>Array</td>
              <td />
              <td>各地區的數值資料</td>
            </tr>
            <tr>
              <td>clsNa</td>
              <td>String</td>
              <td>taiwan-map</td>
              <td>{`<svg>`}名稱(具有唯一性，元件若重複使用時，不可相同命名)</td>
            </tr>
            <tr>
              <td>rgb</td>
              <td>String</td>
              <td>198,153,103</td>
              <td>圖表主要顏色</td>
            </tr>
            <tr>
              <td>maxRange</td>
              <td>String</td>
              <td>100</td>
              <td>最大值</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocChartArea;
