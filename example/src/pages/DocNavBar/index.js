import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";
//
import heartImage from "./heart.png";
import bagImage from "./shopping-bag.png";
// UI component
import { NavBar, SearchBar, SubMenu } from "dawn-react-ui-lib";

class DocNavBar extends Component {
  state = {
    titleList: {},
    searchText: ""
  };

  componentDidMount() {
    this.setState({
      titleList: this.refs
    });
  }

  searchText = data => {
    this.setState({
      searchText: data
    });
  };

  render() {
    const navbarLists = [
      { titleName: "重點推介" },
      {
        titleName: "珠寶",
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
      },
      { titleName: "品牌系列" },
      { titleName: "婚嫁" },
      { titleName: "禮品" },
      { titleName: "勞力士" },
      { titleName: "帝舵表" },
      { titleName: "周生生之友" },
      {
        titleName: "服務",
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
      }
    ];

    const componentLists = [
      {
        titleName: "珠寶",
        component: (
          <SubMenu
            type="list"
            imgWidth="300px"
            dataList={navbarLists.find(data => data.titleName === "珠寶")}
            subMenuKey="subitems"
          />
        )
      },
      {
        titleName: "服務",
        component: (
          <SubMenu
            type="image"
            imgWidth="300px"
            dataList={navbarLists.find(data => data.titleName === "服務")}
            subMenuKey="subitems"
          />
        )
      }
    ];

    const componentSimpleLists = [
      { titleName: "珠寶", component: "珠寶的內容" },
      { titleName: "服務", component: "服務的內容" }
    ];

    const RightSection = () => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          }}
        >
          <a style={{ fontSize: "14px", marginRight: "10px" }}>登入 / 註冊</a>
          <img
            src={heartImage}
            alt=""
            style={{ width: "28px", marginRight: "10px" }}
          />
          <img
            src={bagImage}
            alt=""
            style={{ width: "31px", height: "28px" }}
          />
        </div>
      );
    };

    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={this.state.titleList}>
          <h1>NavBar 導覽列</h1>
          <p>
            導覽列{`<NavBar>`}
            是一個網站主要的元件之一，使用到提供導覽的品牌項目、下拉式選單。
            <br />
            其中元件的
            <Commit>name參數具有唯一性，必須指定唯一性的名稱</Commit>
            。導覽列組合了網站所有連結頁面的{`<a>`}
            屬性，每個項目擁有各自專屬的連結。同時也依據分類將連結規劃置下拉式選單。
            在您的應用或網站中作為響應式基礎組件，導覽列在手機版本的視圖中大多以收合的方式呈現，隨著可用螢幕寬度的增加，進而水平展開。
          </p>
          <h2 ref="title1">基本導覽列</h2>
          <p>
            基本導覽列，將後端API資料透過參數
            <Commit>navbarLists</Commit>傳遞，並再透過參數
            <Commit>titleKey</Commit>
            告知需要生成的項目文字的類別名稱、參數<Commit>columnKey</Commit>
            為判斷是否顯示下拉式選單的類別名稱 ，以及自行編寫
            <Commit>componentLists</Commit>帶入參數內。
            *注意：componentLists的類別名稱定義，其
            <Commit>titleName</Commit>
            ，要與後端資料項目文字的類別名稱相同，另外放置元件的類別名稱則為component，不可更動。
          </p>
          <ComponentSection>
            <NavBar
              name="test-nav-bar1"
              navbarLists={navbarLists}
              componentLists={componentSimpleLists}
              titleKey="titleName"
              columnKey="subitems"
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { NavBar, SubMenu } from "dawn-react-ui-lib";

class Example extends Component{
    render(){
      // 以下為後端的API資料
      const navbarLists = [
        { titleName: "重點推介" },
        { titleName: "珠寶", subitems: [{ ... }] },
        { titleName: "品牌系列" },
        { titleName: "婚嫁" },
        { titleName: "禮品" },
        { titleName: "勞力士" },
        { titleName: "帝舵表" },
        { titleName: "周生生之友" },
        { titleName: "服務", subitems: [{ ... }] }
      ];
      // 以下為有下拉式選單的內容元件
      const componentLists = [
        { titleName: "珠寶", component: "珠寶的內容" },
        { titleName: "服務", component: "服務的內容" }
      ];
        return(  
          <NavBar
            name="test-nav-bar1"
            navbarLists={navbarLists}
            componentLists={componentLists}
            titleKey="titleName"
            columnKey="subitems"
          />
        )
    }
}

export default Example;`}</CodeSection>

          <h2 ref="title3">黏貼式導覽列</h2>
          <p>
            <Commit>請試著將此元件滑動至最頂，看看效果。</Commit>
            <br />
            給予參數
            <Commit>sticky</Commit>、<Commit>top</Commit>，當視窗畫面滾動至
            {`<NavBar>`}
            當前元件位置時，將會固定住在視窗上方。
          </p>
          <ComponentSection>
            <NavBar
              name="test-nav-bar2"
              height="70px"
              sticky
              top="70"
              navbarLists={navbarLists}
              componentLists={componentSimpleLists}
              titleKey="titleName"
              columnKey="subitems"
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { NavBar } from "dawn-react-ui-lib";

class Example extends Component{
    render(){
      // 以下為後端的API資料
      const navbarLists = [
        { titleName: "重點推介" },
        { titleName: "珠寶", subitems: [{ ... }] },
        { titleName: "品牌系列" },
        { titleName: "婚嫁" },
        { titleName: "禮品" },
        { titleName: "勞力士" },
        { titleName: "帝舵表" },
        { titleName: "周生生之友" },
        { titleName: "服務", subitems: [{ ... }] }
      ];
      // 以下為有下拉式選單的內容元件
      const componentLists = [
        { titleName: "珠寶", component: "珠寶的內容" },
        { titleName: "服務", component: "服務的內容" }
      ];
        return(  
          <NavBar
              name="test-nav-bar2"
              height="70px"
              sticky
              top="70"
              navbarLists={navbarLists}
              componentLists={componentLists}
              titleKey="titleName"
              columnKey="subitems"
            />
        )
    }
}

export default Example;`}</CodeSection>

          <h2 ref="title4">自定義導覽列</h2>
          <p>自定義導覽列，提供使用者參數設定，更改樣式。</p>
          <ComponentSection>
            <NavBar
              name="test-nav-bar3"
              height="70px"
              background="#FFFFFF"
              rightSection={<RightSection />}
              leftSection={
                <SearchBar
                  placeholder="搜索"
                  handleSearch={this.searchText}
                  searchText={this.state.searchText}
                />
              }
              navbarLists={navbarLists}
              componentLists={componentLists}
              titleKey="titleName"
              columnKey="subitems"
              sticky
              top="140"
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { NavBar, SearchBar } from "dawn-react-ui-lib";
// 以下為範例<RightSection>，使用者須自行製作。
import RightSection from './RightSection';

class Example extends Component{
    state = {
      searchText: ""
    };

    searchText = data => {
      this.setState({
        searchText: data
      });
    };

    render(){
      // 以下為後端的API資料
      const navbarLists = [
        { titleName: "重點推介" },
        { titleName: "珠寶", subitems: [
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
        ] },
        { titleName: "品牌系列" },
        { titleName: "婚嫁" },
        { titleName: "禮品" },
        { titleName: "勞力士" },
        { titleName: "帝舵表" },
        { titleName: "周生生之友" },
        { titleName: "服務",  subitems: [
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
        ] }
      ];
      // 以下為有下拉式選單的內容元件
      const componentLists = [
        {
          titleName: "珠寶",
          component: (
            <SubMenu
              type="list"
              imgWidth="300px"
              dataList={navbarLists.find(data => data.titleName === "珠寶")}
              subMenuKey="subitems"
            />
          )
        },
        {
          titleName: "服務",
          component: (
            <SubMenu
              type="image"
              imgWidth="300px"
              dataList={navbarLists.find(data => data.titleName === "服務")}
              subMenuKey="subitems"
            />
          )
        }
      ];
        return(  
          <NavBar
              name="test-nav-bar3"
              height="70px"
              background="#FFFFFF"
              rightSection={<RightSection />}
              leftSection={
                <SearchBar
                  placeholder="搜索"
                  handleSearch={this.searchText}
                  searchText={this.state.searchText}
                />
              }
              navbarLists={navbarLists}
              componentLists={componentLists}
              titleKey="titleName"
              columnKey="subitems"
              sticky
              top="140"
            />
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
              <td>background</td>
              <td>String</td>
              <td>#F4F4F4</td>
              <td>導覽列高度背景顏色</td>
            </tr>
            <tr>
              <td>height</td>
              <td>String</td>
              <td>70px</td>
              <td>
                導覽列高度，
                <Commit>此參數必須給予單位值</Commit>
              </td>
            </tr>
            <tr>
              <td>leftSection</td>
              <td>Object</td>
              <td />
              <td>導覽列左側的區塊。</td>
            </tr>
            <tr>
              <td>rightSection</td>
              <td>Object</td>
              <td />
              <td>導覽列右側的區塊。</td>
            </tr>
            <tr>
              <td>sticky</td>
              <td>Boolean</td>
              <td>false</td>
              <td>是否具有黏貼效果</td>
            </tr>
            <tr>
              <td>top</td>
              <td>String</td>
              <td />
              <td>
                導覽列黏貼後，與視窗頂端的距離單位，
                <Commit>此參數不必給予單位值</Commit>
              </td>
            </tr>
            <tr>
              <td>navbarLists</td>
              <td>Array</td>
              <td />
              <td>API資料</td>
            </tr>
            <tr>
              <td>componentLists</td>
              <td>Array</td>
              <td />
              <td>下拉式選單內容元件</td>
            </tr>
            <tr>
              <td>titleKey</td>
              <td>String</td>
              <td>titleName</td>
              <td>項目的標題文字在API資料中的類別名稱</td>
            </tr>
            <tr>
              <td>columnKey</td>
              <td>String</td>
              <td>subitems</td>
              <td>判斷是否有下拉式選單的類別名稱</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocNavBar;
