import React, { Component } from "react";
import MainContent from "../../components/MainContent";
import GettingStartedNavBar from "../../components/GettingStartedNavBar";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";

class Introduction extends Component {
  state = {
    titleList: {}
  };
  // 定義初始titleList為空物件

  componentDidMount = () => {
    this.setState({
      titleList: this.refs
    });
    // 將this.refs存在this.state.titleList並傳值給<MainContent>
  };

  render() {
    return (
      <div>
        <GettingStartedNavBar />
        <MainContent titleList={this.state.titleList}>
          <h1>Introduction</h1>
          <p>學習如何安裝Dawn UI Library 在你的專案中。</p>
          <br />
          <h2 ref="title1">Installation</h2>
          <p>
            登入<Commit>內部</Commit>的npm server, 下載元件庫。
            <br />
            <br /> 1. 在你App專案的根目錄新增.npmrc檔案, 並加入此行:
          </p>
          <CodeSection>
            {"registry=http://192.168.205.13:8093/repository/npm-all/"}
          </CodeSection>
          <br />
          <p>2. 開啟終端機, 在根目錄下鍵入命令:</p>
          <CodeSection>
            {
              "npm login -registry http://192.168.205.13:8093/repository/npm-all/"
            }
          </CodeSection>
          <p>3. 輸入你的帳號, 密碼和email:</p>
          <p>4. 安裝元件庫:</p>
          <CodeSection>{"npm i dawn-react-ui-lib"}</CodeSection>
        </MainContent>
      </div>
    );
  }
}

export default Introduction;
