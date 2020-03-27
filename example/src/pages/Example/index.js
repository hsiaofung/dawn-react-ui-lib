import React, { Component } from "react";
import Prism from "prismjs";
import GettingStartedNavBar from "../../components/GettingStartedNavBar";
import MainContent from "../../components/MainContent";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";

class Example extends Component {
  state = {
    titleList: {}
  };
  componentDidMount() {
    Prism.highlightAll();
    this.setState({
      titleList: this.refs
    });
  }
  render() {
    return (
      <div>
        <GettingStartedNavBar />
        <MainContent titleList={this.state.titleList}>
          <h1>我是範本，這裡放置H1大標題</h1>
          <p>
            我是範本，這裡放置內文說明，特別要注意的是每個Page都必須放置一個
            <Commit>
              {`<NarBar />、<MainContent />、<ComponentSection>、<TableSection>以及<CodeSection>`}
            </Commit>
            ，可以參考下方的程式碼。
            <br />
            <Commit>
              *如有需要標記重點說明，可以使用
              {`<Commit>重點說明</Commit>`}
            </Commit>
          </p>
          <h2 ref="title1">這裡放置H2，基本元件</h2>
          <p>敘述基本元件的文字</p>
          <ComponentSection>在此放置元件</ComponentSection>
          <CodeSection>
            {`import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";

class Page extends Component {

  state = {
    titleList: {}
  }
  // 定義初始titleList為空物件

  componentDidMount = () => {
    this.setState({
      titleList:this.refs
    });
    // 將this.refs存在this.state.titleList並傳值給<MainContent>
  }

  render(){
    return(
      <div>
        <DocumentNavBar />
        <MainContent titleList={this.state.titleList}>
          <h1>我是大標題</h1>
          <p>元件敘述</p>

          <h2 ref="title1">我是次標題</h2>
          <p>敘述次標題的文字
          <Commit>重點文字</Commit>
          </p>      
          <ComponentSection>在此放置元件</ComponentSection>
          <CodeSection>{'在此輸入程式碼'}</CodeSection>

          <h2 ref="title2">我是次標題</h2>
          <p>敘述次標題的文字</p>        
          <ComponentSection>在此放置元件</ComponentSection>
          <CodeSection>{'在此輸入程式碼'}</CodeSection>

          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>參數名稱</td>
              <td>參數類型</td>
              <td>參數預設值</td>
              <td>參數描述</td>
            </tr>
          </TableSection>
        </MainContent>
       
      </div>
    )
  }
}
export default Page;`}
          </CodeSection>
          <h2 ref="title2">這裡放置H2，自定義元件</h2>
          <p>敘述自定義元件的文字</p>
          <ComponentSection>在此放置元件</ComponentSection>
          <CodeSection>
            {`import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";

class Page extends Component {

  state = {
    titleList: {}
  }
  // 定義初始titleList為空物件

  componentDidMount = () => {
    this.setState({
      titleList:this.refs
    });
    // 將this.refs存在this.state.titleList並傳值給<MainContent>
  }

  render(){
    return(
      <div>
        <DocumentNavBar />
        <MainContent titleList={this.state.titleList}>
          <h1>我是大標題</h1>
          <p>元件敘述</p>

          <h2 ref="title1">我是次標題</h2>
          <p>敘述次標題的文字</p>      
          <ComponentSection>在此放置元件</ComponentSection>
          <CodeSection>{'在此輸入程式碼'}</CodeSection>

          <h2 ref="title2">我是次標題</h2>
          <p>敘述次標題的文字</p>        
          <ComponentSection>在此放置元件</ComponentSection>
          <CodeSection>{'在此輸入程式碼'}</CodeSection>

          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>參數名稱</td>
              <td>參數類型</td>
              <td>參數預設值</td>
              <td>參數描述</td>
            </tr>
          </TableSection>
        </MainContent>
       
      </div>
    )
  }
}
export default Page;`}
          </CodeSection>
          <h2 ref="title3">這裡放置H2，參數設定</h2>
          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>參數名稱</td>
              <td>參數類型</td>
              <td>參數預設值</td>
              <td>參數描述</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default Example;
