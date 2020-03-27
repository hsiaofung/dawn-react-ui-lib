import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
// UI component
import { Card } from "dawn-react-ui-lib";

class DocCard extends Component {
  componentDidMount() {
    this.setState({
      list: this.refs
    });
  }
  onClick = () => {
    alert("自行定義func");
  };
  render() {
    const ContentText = () => {
      return (
        <div>
          <div>Charme</div>
          <div style={{ fontSize: "14px" }}>「童話系列」足金串飾</div>
          <div style={{ color: "#C69967", fontSize: "13px" }}>NT$4,000</div>
        </div>
      );
    };

    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={this.refs}>
          <h1>Card 卡牌</h1>
          <p>卡牌{`<Card>`}</p>
          <h2 ref="title1">基本卡牌</h2>
          <p />
          <ComponentSection>
            <Card
              width="25%"
              tag="新品"
              img="https://cdn.chowsangsang.com/hkeshop/images/p/c/90704c/EPCM90704GDC_3bd718db-9ea1-4b47-9fd5-8ef197305902_350.jpg"
              hoverImg="https://cdn.chowsangsang.com/hkeshop/images/p/c/90704c/EPCM90704GDC_2c80d187-ebe5-4bd0-9399-cdfab1ea31b7_350.jpg"
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { Card } from "dawn-react-ui-lib"

class Example extends Component{
    render(){
        return(        
          <Card
            width="25%"
            tag="新品"
            img="https://cdn.chowsangsang.com/hkeshop/images/p/c/90704c/EPCM90704GDC_3bd718db-9ea1-4b47-9fd5-8ef197305902_350.jpg"
            hoverImg="https://cdn.chowsangsang.com/hkeshop/images/p/c/90704c/EPCM90704GDC_2c80d187-ebe5-4bd0-9399-cdfab1ea31b7_350.jpg"
          />
        )
    }
}

export default Example;`}</CodeSection>

          <h2 ref="title2">自定義卡牌</h2>
          <p>自定義卡牌</p>
          <ComponentSection>
            <div style={{display:"flex"}}>
              <Card
                width="25%"
                tag="熱銷"
                img="https://cdn.chowsangsang.com/hkeshop/images/p/c/90019c/EPCM90019GDC_d1951851-1901-44a0-84f4-cb0a76345f29_350.jpg"
                hoverImg="https://cdn.chowsangsang.com/hkeshop/images/p/c/90019c/EPCM90019GDC_1ffc5a77-0bde-41d2-8403-177e0dc17f7f_350.jpg"
                content={<ContentText />}
                displayInline={true}
                onClick={this.onClick}
              />
              <Card
                width="40%"
                tag="熱銷"
                img="https://cdn.chowsangsang.com/hkeshop/images/p/c/90019c/EPCM90019GDC_d1951851-1901-44a0-84f4-cb0a76345f29_350.jpg"
                hoverImg="https://cdn.chowsangsang.com/hkeshop/images/p/c/90019c/EPCM90019GDC_1ffc5a77-0bde-41d2-8403-177e0dc17f7f_350.jpg"
                content={<ContentText />}
                displayInline={false}
                onClick={this.onClick}
              />
            </div>
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { Card } from "dawn-react-ui-lib"

class Example extends Component{
  onClick = () => {
    alert('自行定義func');
  }
    render(){
      const ContentText = () => {
        return (
          <div>
            <div>Charme</div>
            <div style={{ fontSize: "14px" }}>「童話系列」足金串飾</div>
            <div style={{ color: "#C69967", fontSize: "13px" }}>NT$4,000</div>
          </div>
        );
      };
        return(
          <div style={{display:"flex"}}>        
              <Card
                width="25%"
                tag="熱銷"
                img="https://cdn.chowsangsang.com/hkeshop/images/p/c/90019c/EPCM90019GDC_d1951851-1901-44a0-84f4-cb0a76345f29_350.jpg"
                hoverImg="https://cdn.chowsangsang.com/hkeshop/images/p/c/90019c/EPCM90019GDC_1ffc5a77-0bde-41d2-8403-177e0dc17f7f_350.jpg"
                content={<ContentText />}
                displayInline={true}
                onClick={this.onClick}
              />
              <Card
                width="40%"
                tag="熱銷"
                img="https://cdn.chowsangsang.com/hkeshop/images/p/c/90019c/EPCM90019GDC_d1951851-1901-44a0-84f4-cb0a76345f29_350.jpg"
                hoverImg="https://cdn.chowsangsang.com/hkeshop/images/p/c/90019c/EPCM90019GDC_1ffc5a77-0bde-41d2-8403-177e0dc17f7f_350.jpg"
                content={<ContentText />}
                displayInline={false}
                onClick={this.onClick}
              />
          </div>
        )
    }
}

export default Example;`}</CodeSection>

          <h2 ref="title5">參數設定</h2>
          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>content</td>
              <td>Object|String</td>
              <td />
              <td>圖片下方的內容說明</td>
            </tr>
            <tr>
              <td>img</td>
              <td>String(URL)</td>
              <td>false</td>
              <td>圖片顯示</td>
            </tr>
            <tr>
              <td>hoverImg</td>
              <td>String(URL)</td>
              <td>false</td>
              <td>滑鼠圖片顯示</td>
            </tr>
            <tr>
              <td>tag</td>
              <td>String</td>
              <td />
              <td>產品熱銷、新品標籤</td>
            </tr>
            <tr>
              <td>width</td>
              <td>String</td>
              <td>25%</td>
              <td>元件的寬度</td>
            </tr>
            <tr>
              <td>displayInline</td>
              <td>Boolean</td>
              <td>true</td>
              <td>圖片及文字是否並排</td>
            </tr>
            <tr>
              <td>onClick</td>
              <td>Function</td>
              <td />
              <td>點選圖片刻執行自定義功能</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocCard;
