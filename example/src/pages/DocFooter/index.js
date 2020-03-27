import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";

// UI component
import { Footer } from "dawn-react-ui-lib";

class DocFooter extends Component {
  componentDidMount() {
    this.setState({
      list: this.refs
    });
  }
  render() {
    const copyRight = "© 2019周生生集團國際有限公司";
    const subTitleGroup1 = [
      {
        title: "關於我們",
        content: [
          { text: "聯絡我們", link: "" },
          { text: "分店位置", link: "" },
          { text: "願景及品牌理念", link: "" },
          { text: "歷史傳承與里程碑", link: "" },
          { text: "珠寶品質與工藝", link: "" },
          { text: "周生生集團", link: "" }
        ]
      },
      {
        title: "客戶服務",
        content: [
          { text: "服務", link: "" },
          { text: "貨品配送", link: "" },
          { text: "退貨及換貨", link: "" },
          { text: "幫助", link: "" }
        ]
      }
    ];
    const subTitleGroup2 = [
      {
        title: "關於我們",
        content: [
          { text: "聯絡我們", link: "" },
          { text: "分店位置", link: "" },
          { text: "願景及品牌理念", link: "" },
          { text: "歷史傳承與里程碑", link: "" },
          { text: "珠寶品質與工藝", link: "" },
          { text: "周生生集團", link: "" }
        ]
      },
      {
        title: "客戶服務",
        content: [
          { text: "服務", link: "" },
          { text: "貨品配送", link: "" },
          { text: "退貨及換貨", link: "" },
          { text: "幫助", link: "" }
        ]
      },
      {
        title: "關注我們",
        content: [
          {
            icon: "fb",
            link: "http://www.facebook.com/chowsangsang.tw/",
            displayInline: "inline-flex",
            paddingRight: "15px"
          },
          {
            icon: "ig",
            link: "http://www.instagram.com/chowsangsangtw_official/",
            displayInline: "inline-flex",
            paddingRight: "15px"
          },
          {
            icon: "path",
            link: "",
            displayInline: "inline-flex",
            paddingRight: "15px"
          },
          {
            icon: "pinterest",
            link: "",
            displayInline: "inline-flex",
            paddingRight: "15px"
          },
          {
            icon: "weibo",
            link: "",
            displayInline: "inline-flex"
          },
          { text: "客戶服務 +886 2-2789-6809", link: "" }
        ]
      }
    ];
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={this.refs}>
          <h1>Footer頁尾</h1>
          <p>
            Footer為頁面做收尾的動作，提供網站的聯絡資訊，也是SEO(搜尋引擎最佳化)的重要項目之一。
          </p>
          <h2 ref="title1">基本樣式</h2>
          <ComponentSection>
            <Footer
              copyRight={copyRight}
              subTitleGroup={subTitleGroup1}
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { Footer } from "dawn-react-ui-lib";

class Example extends Component{
    render(){
      const copyRight = "© 2019周生生集團國際有限公司";
      const subTitleGroup1 = [
        {
          title: "關於我們",
          content: [
            { text: "聯絡我們", link: "" },
            { text: "分店位置", link: "" },
            { text: "願景及品牌理念", link: "" },
            { text: "歷史傳承與里程碑", link: "" },
            { text: "珠寶品質與工藝", link: "" },
            { text: "周生生集團", link: "" }
          ]
        },
        {
          title: "客戶服務",
          content: [
            { text: "服務", link: "" },
            { text: "貨品配送", link: "" },
            { text: "退貨及換貨", link: "" },
            { text: "幫助", link: "" }
          ]
        }
      ];
        return(  
            <Footer
            copyRight={copyRight}
            subTitleGroup={subTitleGroup1}
             />
        )
    }
}

export default Example;`}</CodeSection>
          <h2 ref="title2">自定義樣式</h2>
          <p>自定義樣式，提供使用者參數設定，更改樣式。</p>
          <ComponentSection>
            <Footer copyRight={copyRight} subTitleGroup={subTitleGroup2} />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { Footer } from "dawn-react-ui-lib";

class Example extends Component{
    render(){
      const copyRight = "© 2019周生生集團國際有限公司";
      const subTitleGroup2 = [
        {
          title: "關於我們",
          content: [
            { text: "聯絡我們", link: "" },
            { text: "分店位置", link: "" },
            { text: "願景及品牌理念", link: "" },
            { text: "歷史傳承與里程碑", link: "" },
            { text: "珠寶品質與工藝", link: "" },
            { text: "周生生集團", link: "" }
          ]
        },
        {
          title: "客戶服務",
          content: [
            { text: "服務", link: "" },
            { text: "貨品配送", link: "" },
            { text: "退貨及換貨", link: "" },
            { text: "幫助", link: "" }
          ]
        },
        {
          title: "關注我們",
          content: [
            {
              icon: "fb",
              link: "http://www.facebook.com/chowsangsang.tw/",
              displayInline: "inline-flex",
              paddingRight: "15px"
            },
            {
              icon: "ig",
              link: "http://www.instagram.com/chowsangsangtw_official/",
              displayInline: "inline-flex",
              paddingRight: "15px"
            },
            {
              icon: "path",
              link: "",
              displayInline: "inline-flex",
              paddingRight: "15px"
            },
            {
              icon: "pinterest",
              link: "",
              displayInline: "inline-flex",
              paddingRight: "15px"
            },
            {
              icon: "weibo",
              link: "",
              displayInline: "inline-flex"
            },
            { text: "客戶服務 +886 2-2789-6809", link: "" }
          ]
        }
      ];
        return(  
            <Footer
            copyRight={copyRight}
            subTitleGroup={subTitleGroup2}
             />
        )
    }
}

export default Example;`}</CodeSection>
          <h2 ref="title3">參數設定</h2>
          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>subTitleGroup</td>
              <td>Object</td>
              <td />
              <td>標題及內容</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>String</td>
              <td> fb , ig , path , pinterest , weibo</td>
              <td>是否選用</td>
            </tr>
            <tr>
              <td>displayInline</td>
              <td>String</td>
              <td />
              <td>是否並排</td>
            </tr>
            <tr>
              <td>paddingRight</td>
              <td>String</td>
              <td />
              <td>並排向右的間距</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocFooter;
