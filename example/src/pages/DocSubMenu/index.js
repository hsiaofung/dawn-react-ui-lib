import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import CodeSection from "../../components/CodeSection";
import ComponentSection from "../../components/ComponentSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";

// UI component
import { SubMenu } from "dawn-react-ui-lib";

class DocSubMenu extends Component {
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
    const dataList = {
      subitems: [
        {
          total: { text: "全部珠寶", link: "" },
          image: {
            url:
              "http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-1_700.jpg",
            link: ""
          },
          list: [
            {
              headline: "最新上架",
              subtitle: [
                { text: "新品", link: "" },
                { text: "編輯推薦", link: "" }
              ]
            },
            {
              headline: "按配戴",
              subtitle: [
                { text: "串飾", link: "" },
                { text: "戒指", link: "" },
                { text: "手鐲", link: "" },
                { text: "手鍊", link: "" },
                { text: "耳環", link: "" },
                { text: "頸鍊", link: "" },
                { text: "吊墜", link: "" },
                { text: "金片", link: "" },
                { text: "擺件", link: "" }
              ]
            },
            {
              headline: "按金屬",
              subtitle: [
                { text: "黃金", link: "" },
                { text: "18K金", link: "" },
                { text: "鉑金", link: "" },
                { text: "純銀", link: "" }
              ]
            },
            {
              headline: "按寶石",
              subtitle: [
                { text: "鑽石", link: "" },
                { text: "珍珠", link: "" },
                { text: "彩色寶石", link: "" }
              ]
            },
            {
              headline: "按設計",
              subtitle: [
                { text: "素鍊", link: "" },
                { text: "生肖", link: "" },
                { text: "對戒", link: "" },
                { text: "四葉草", link: "" },
                { text: "花", link: "" },
                { text: "大明咒", link: "" },
                { text: "心", link: "" },
                { text: "單耳環", link: "" }
              ]
            },
            {
              headline: "專屬訂製",
              subtitle: [
                { text: "關於專屬訂製", link: "" },
                { text: "promessa duet", link: "" },
                { text: "鑽戒訂製", link: "" },
                { text: "promessa enigma", link: "" }
              ]
            }
          ]
        }
      ]
    };
    const dataList2 = {
      subitems: [
        {
          link: "",
          image: "http://www.chowsangsang.com/en/img/header/gift.jpg",
          text: "第一張圖"
        },
        {
          link: "",
          image: "http://www.chowsangsang.com/en/img/header/storelocator.jpg",
          text: "第二張圖"
        },
        {
          link: "",
          image: "http://www.chowsangsang.com/en/img/header/cs.jpg",
          text: "第三張圖"
        },
        {
          link: "",
          image: "http://www.chowsangsang.com/en/img/header/gift.jpg",
          text: "第四張圖"
        }
      ]
    };
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={list}>
          <h1>SubMenu</h1>
          <p>製作navbar的下拉式選單樣式，<Commit>注意：最大寬度 1200px。</Commit></p>
          <h2 ref="title1">基本下拉式選單樣式</h2>
          <p>
            有清單列表以及最右邊放一張圖的樣式，最基本只要有 dataList 以及
            subMenuKey 就可以形成基本樣式， 其他設定請參照下面參數設定主題。
            <Commit>注意：type屬性必須要有</Commit>
          </p>
          <ComponentSection>
            <SubMenu type="list" dataList={dataList} subMenuKey="subitems" />
          </ComponentSection>
          <CodeSection>
            {`
const dataList = {
  subitems: [
    {
      total: { text: "全部珠寶", link:"" },
      image: {
        url:"http://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/18KR89975K-21---06-065-00060-ESHOP-1_700.jpg",
        link:""
      },
      list: [
        {
          headline: "最新上架",
          subtitle: [
            { text: "新品", link:"" },
            { text: "編輯推薦", link:"" }
          ]
        },
        {
          headline: "按配戴",
          subtitle: [
            { text: "串飾", link:"" },
            { text: "戒指", link:"" },
            { text: "手鐲", link:"" },
            { text: "手鍊", link:"" },
            { text: "耳環", link:"" },
            { text: "頸鍊", link:"" },
            { text: "吊墜", link:"" },
            { text: "金片", link:"" },
            { text: "擺件", link:"" }
          ]
        },
        {
          headline: "按金屬",
          subtitle: [
            { text: "黃金", link:"" },
            { text: "18K金", link:"" },
            { text: "鉑金", link:"" },
            { text: "純銀", link:"" }
          ]
        },
        {
          headline: "按寶石",
          subtitle: [
            { text: "鑽石", link:"" },
            { text: "珍珠", link:"" },
            { text: "彩色寶石", link:"" }
          ]
        },
        {
          headline: "按設計",
          subtitle: [
            { text: "素鍊", link:"" },
            { text: "生肖", link:"" },
            { text: "對戒", link:"" },
            { text: "四葉草", link:"" },
            { text: "花", link:"" },
            { text: "大明咒", link:"" },
            { text: "心", link:"" },
            { text: "單耳環", link:"" }
          ]
        },
        {
          headline: "專屬訂製",
          subtitle: [
            { text: "關於專屬訂製", link:"" },
            { text: "promessa duet", link:"" },
            { text: "鑽戒訂製", link:"" },
            { text: "promessa enigma", link:"" }
          ]
        }
      ]
    }
  ]
};

<SubMenu type="list" dataList={dataList} subMenuKey="subitems" />
            `}
          </CodeSection>
          <h2 ref="title2">純圖片下拉式選單</h2>
          <p>都是以圖片和文字組成。</p>
          <ComponentSection>
            <SubMenu
              type="image"
              imgWidth="300px"
              dataList={dataList2}
              subMenuKey="subitems"
            />
          </ComponentSection>
          <CodeSection>
            {`
const dataList = {
  subitems: [
    {
      link: "",
      image: "http://www.chowsangsang.com/en/img/header/gift.jpg",
      text: "第一張圖"
    },
    {
      link: "",
      image: "http://www.chowsangsang.com/en/img/header/storelocator.jpg",
      text: "第二張圖"
    },
    {
      link: "",
      image: "http://www.chowsangsang.com/en/img/header/cs.jpg",
      text: "第三張圖"
    },
    {
      link: "",
      image: "http://www.chowsangsang.com/en/img/header/gift.jpg",
      text: "第四張圖"
    }
  ]
};

<SubMenu
  type="image"
  imgWidth="300px"
  dataList={dataList}
  subMenuKey="subitems"
/>
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
              <td>dataList(list)</td>
              <td>Object</td>
              <td>{`dataList:{
                      subitems:[{
                        total:{
                          text:"",
                          link:""
                        },
                        img:{
                          url:"",
                          link:""
                        },
                        list:[{
                          headline:"",
                          subtitle:[{text:"",link:""}]
                        }]
                      }]
                    }`}</td>
              <td>subMenu(list樣式)的資料結構</td>
            </tr>
            <tr>
              <td>dataList(image)</td>
              <td>Object</td>
              <td>{`dataList:{
                      subitems:[{link:"", image:"", text:""}]
                    }`}</td>
              <td>subMenu(image樣式)的資料結構</td>
            </tr>
            <tr>
              <td>totalSetup</td>
              <td>Object</td>
              <td>{`totalSetup:{
                      fontSize:"14px",
                      fontWeight:"0",
                      color:"#000"
                    }`}</td>
              <td>改變總搜尋連結的樣式</td>
            </tr>
            <tr>
              <td>listWidth</td>
              <td>String</td>
              <td>160px</td>
              <td>改變清單寬度</td>
            </tr>
            <tr>
              <td>headlineSetup</td>
              <td>Object</td>
              <td>{`headlineSetup:{
                      fontWeight:"700",
                      margin:"0 0 30px 0"
                    }`}</td>
              <td>改變粗標題(大標題)的字體粗細以及margin</td>
            </tr>
            <tr>
              <td>subtitleStep</td>
              <td>Object</td>
              <td>{`subtitleStep:{
                      margin:"10px 0 0 0",
                      fontSize:"14px",
                      fontWeight:"0",
                      color:"#000"
                    }`}</td>
              <td>設定細項樣式</td>
            </tr>
            <tr>
              <td>imgWidth</td>
              <td>String</td>
              <td>240px</td>
              <td>依照圖片大小設定顯示寬度</td>
            </tr>
            <tr>
              <td>background</td>
              <td>String</td>
              <td>#fff</td>
              <td>改變subMenu背景顏色</td>
            </tr>
            <tr>
              <td>subMenuKey</td>
              <td>String</td>
              <td>後端dataKey</td>
              <td>搭配 NavBar 套件 代入 keyName 生成頁面</td>
            </tr>
            <tr>
              <td>imageTextStep</td>
              <td>Object</td>
              <td>{`imageTextStep:{
                      fontSize:"14px",
                      fontWeight:"0",
                      color:"#000",
                      textAlign:"center"
                    }`}</td>
              <td>只有圖片樣式的圖片敘述連結樣式設定</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocSubMenu;
