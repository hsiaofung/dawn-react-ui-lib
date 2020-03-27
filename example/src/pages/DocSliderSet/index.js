import React, { Component } from "react";
import Prism from "prismjs";
import DocumentNavBar from "../../components/DocumentNavBar";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import MainContent from "../../components/MainContent";
import TableSection from "../../components/TableSection";
// UI component
import { Slider } from "dawn-react-ui-lib";

class DocSliderSet extends Component {
  componentDidMount() {
    Prism.highlightAll();
    this.setState({
      list: this.refs
    });
  }
  render() {
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={this.refs}>
          <h1>Slider 幻燈片</h1>
          <p>
            幻燈片{`<Slider>`}
            使用React slick和React-img-zoom套件,構建的輪播組件。
            <br />
            <span style={{ fontSize: "12px", color: "#bc937c" }}>
              *目前尚未支援RWD版面
            </span>
          </p>
          <h2 ref="title2">基本樣式</h2>
          <ComponentSection>
            <div style={{ width: "650px", margin: "30px auto" }}>
              <Slider
                showSmallImg={false}
                showZoom={false}
                infinite={false}
                dots={true}
                ImageData={{
                  images: [
                    {
                      seq: 1,
                      zoomInUrl:
                        "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-1_1200.jpg",
                      displayUrl:
                        "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-1_700.jpg"
                    },
                    {
                      seq: 2,
                      zoomInUrl:
                        "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-2_1200.jpg",
                      displayUrl:
                        "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-2_700.jpg"
                    }
                  ]
                }}
              />
            </div>
          </ComponentSection>
          <CodeSection>
            {`import React, { Component } from "react";
import { Slider } from "dawn-react-ui-lib";

class SliderExample extends Component{
    render(){
        return(  
          <div style={{ width: "650px", margin: "0 auto" }}>
          <Slider
          showSmallImg={false}              
          infinite={false}
          dots={true}
          ImageData={{
            images: [
              {
                seq: 1,
                zoomInUrl:
                  "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-1_1200.jpg",
                displayUrl:
                  "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-1_700.jpg"
              },
              {
                seq: 2,
                zoomInUrl:
                  "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-2_1200.jpg",
                displayUrl:
                  "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-2_700.jpg"
              }
            ]
          }}
          />
        </div>
        )
    }
}

export default SliderExample;
            `}
          </CodeSection>
          <h2 ref="title3">小圖樣式</h2>
          <ComponentSection>
            <div style={{ width: "650px", margin: "0 auto" }}>
              <Slider
                showSmallImg={true}
                showZoom={true}
                showVideo={true}
                dots={false}
                thumbnailSettings={{
                  focusOnSelect: true,
                  adaptiveHeight: true,
                  arrows: true,
                  dots: false,
                  infinite: false,
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  initialSlide: 0
                }}
                ImageData={{
                  images: [
                    {
                      seq: 1,
                      zoomInUrl:
                        "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-1_1200.jpg",
                      displayUrl:
                        "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-1_700.jpg",
                      zoomOutUrl:
                        "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-1_250.jpg"
                    },
                    {
                      seq: 2,
                      zoomInUrl:
                        "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-2_1200.jpg",
                      displayUrl:
                        "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-2_700.jpg",
                      zoomOutUrl:
                        "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-2_250.jpg"
                    }
                  ],
                  video:
                    "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-VIDEO-1.mp4"
                }}
              />
            </div>
          </ComponentSection>
          <CodeSection>
            {`import React, { Component } from "react";
import { Slider } from "dawn-react-ui-lib";

class SliderExample extends Component{
    render(){
        return(  
          <div style={{ width: "650px", margin: "0 auto" }}>
          <Slider
          showSmallImg={true}
          showZoom={true}
          showVideo={true}
          infinite={false}
          ImageData={{
            images: [
              {
                seq: 1,
                zoomInUrl:    //放大效果圖片
                  "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-1_1200.jpg",
                displayUrl:   //小圖預覽
                  "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-1_700.jpg",
                zoomOutUrl:   //大圖顯示
                  "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-1_250.jpg"
              },
              {
                seq: 2,
                zoomInUrl:
                  "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-2_1200.jpg",
                displayUrl:
                  "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-2_700.jpg",
                zoomOutUrl:
                  "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-2_250.jpg"
              }
            ],
            video:
              "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-VIDEO-1.mp4"
          }}
          />
        </div>
        )
    }
}

export default SliderExample;
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
              <td>ImageData</td>
              <td>Object</td>
              <td />
              <td>圖片及影片放置</td>
            </tr>
            <tr>
              <td>showSmallImg</td>
              <td>bool</td>
              <td>true</td>
              <td>是否顯示小圖預覽</td>
            </tr>
            <tr>
              <td>showZoom</td>
              <td>bool</td>
              <td>false</td>
              <td>是否使用圖片放大檢視</td>
            </tr>
            <tr>
              <td>showVideo</td>
              <td>bool</td>
              <td>false</td>
              <td>是否使用影音檔</td>
            </tr>
            <tr>
              <td>infinite</td>
              <td>bool</td>
              <td>false</td>
              <td>是否無限循環</td>
            </tr>
            <tr>
              <td>dots</td>
              <td>bool</td>
              <td>false</td>
              <td>是否顯示點圖</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocSliderSet;
