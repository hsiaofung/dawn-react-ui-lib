import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
// UI component
import { SearchBar } from "dawn-react-ui-lib";

class DocSearchBar extends Component {
  state = {
    titleList: {},
    searchTextForBase: "",
    searchTextForCustomization: "",
    searchTextneedSearchText: ""
  };
  componentDidMount = () => {
    this.setState({
      titleList: this.refs
    });
  };
  searchTextForBase = data => {
    this.setState({
      searchTextForBase: data
    });
  };
  searchTextForCustomization = data => {
    this.setState({
      searchTextForCustomization: data
    });
  };
  searchTextneedSearchText = data => {
    this.setState({
      searchTextneedSearchText: data
    });
  };
  render() {
    const List = [
      { name: "戒指" },
      { name: "串飾" },
      { name: "頸鍊" },
      { name: "手鍊" },
      { name: "耳環" }
    ];
    const title = "熱門搜尋關鍵詞";
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={this.state.titleList}>
          <h1>SearchBar 搜索框</h1>
          <p>
            搜索框{`<SearchBar>`}
            <br />
            <span style={{ fontSize: "12px", color: "#bc937c" }}>
              *目前尚未支援RWD版面
            </span>
          </p>
          <h2 ref="title1">基本搜索框</h2>
          <ComponentSection>
            <SearchBar
              handleSearch={this.searchTextForBase}
              searchText={this.state.searchTextForBase}
              placeholder="搜索"
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { SearchBar } from "dawn-react-ui-lib";

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
        return(  
          <SearchBar
          placeholder="搜索"
          handleSearch={this.searchText}
          searchText={this.state.searchText}
        />
        )
    }
}
export default Example;`}</CodeSection>
          <h2 ref="title2">自定義搜索框</h2>
          <ComponentSection>
            <SearchBar
              placeholder="搜索"
              List={List}
              title={title}
              handleSearch={this.searchTextForCustomization}
              searchText={this.state.searchTextForCustomization}
              needContent={true}
              needSearchText={false}
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { SearchBar } from "dawn-react-ui-lib";

class Example extends Component{
  state = {
    searchText: "",
  };
  searchText = data => {
    this.setState({
      searchText: data
    });
  };
    render(){
      const List = [
        { name: "戒指"},
        { name: "串飾"},
        { name: "頸鍊"},
        { name: "手鍊"},
        { name: "耳環"}
      ];
      const title = "熱門搜尋關鍵詞";
        return(  
    
        <SearchBar
          placeholder="搜索"
          List={List}
          title={title}
          handleSearch={this.searchText}
          searchText={this.state.searchText}
          needContent={true}
        />
       
    
        )
    }
}
export default Example;`}</CodeSection>
          <h2 ref="title3">即時顯示文字搜索框</h2>
          <ComponentSection>
            <SearchBar
              placeholder="關鍵詞搜索"
              List={List}
              title="熱門關鍵詞"
              handleSearch={this.searchTextneedSearchText}
              searchText={this.state.searchTextneedSearchText}
              needContent={true}
              needSearchText={true}
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { SearchBar } from "dawn-react-ui-lib";

class Example extends Component{
  state = {
    searchTextneedSearchText:""
  };
  searchTextneedSearchText = data => {
    this.setState({
      searchTextneedSearchText: data
    });
  }
    render(){
      const List = [
        { name: "戒指"},
        { name: "串飾"},
        { name: "頸鍊"},
        { name: "手鍊"},
        { name: "耳環"}
      ];
      const title = "熱門搜尋關鍵詞";
        return(  
      
        <SearchBar
        placeholder="關鍵詞搜索"
        List={List}
        title="熱門關鍵詞"
        handleSearch={this.searchTextneedSearchText}
        searchText={this.state.searchTextneedSearchText}
        needContent={true}
        needSearchText={true}
      />
        )
    }
}
export default Example;`}</CodeSection>
          <h2 ref="title4">參數設定</h2>
          <TableSection>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>String</td>
              <td />
              <td>搜索輸入的佔位符</td>
            </tr>
            <tr>
              <td>handleSearch</td>
              <td>Function</td>
              <td />
              <td>抓取搜索文字事件</td>
            </tr>
            <tr>
              <td>searchText</td>
              <td>String</td>
              <td />
              <td>搜尋文字內容</td>
            </tr>
            <tr>
              <td>needContent</td>
              <td>Boolean</td>
              <td>false</td>
              <td>是否需要搜尋內容框</td>
            </tr>
            <tr>
              <td>title</td>
              <td>String</td>
              <td />
              <td>搜尋內容框標題</td>
            </tr>
            <tr>
              <td>List</td>
              <td>Array</td>
              <td>{`[{name:內容文字},...]`}</td>
              <td>搜尋內容框內容</td>
            </tr>
            <tr>
              <td>needSearchText</td>
              <td>Boolean</td>
              <td>false</td>
              <td>是否需要即時顯示搜尋文字</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}
export default DocSearchBar;
