import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";
// UI component
import { Radio } from "dawn-react-ui-lib";

class DocRadio extends Component {
  state = {
    titleList: {}
  };

  componentDidMount = () => {
    this.setState({
      titleList: this.refs
    });
  };

  render() {
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={this.state.titleList}>
          <h1>Radio 單選式項目</h1>
          <p>
            單選式項目{`<Radio>`}
            提供使用者在眾多選項之中選擇其中之一選項。
            <br />
            單選式項目透過顯示兩種不同樣式，來提供使用者進行選擇。
            <Commit>
              同一選項類別必須命名相同的radioName參數，方可進行單選
            </Commit>
            ，也是必要參數。頁面初始呈現時通常也會預設一個已選取的項目來提示使用者，你也可以進行選擇其他項目。
          </p>
          <h2 ref="title1">基本單選式項目</h2>
          <p>
            基本單選式項目，範例中三個選項radioName同樣都使用"must_be_same"，如此進行單選，頁面初始呈現時，第一個選項為已被選取的樣式，只要使用defaultChecked參數即可，若是不讓使用者進行選取的選項，則可以使用disable參數進行設定。
          </p>
          <ComponentSection>
            <Radio text="選項一" radioName="must_be_same" defaultChecked />
            <Radio text="選項二" radioName="must_be_same" />
            <Radio text="選項三" radioName="must_be_same" disable />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { Radio } from "dawn-react-ui-lib";

class Example extends Component{
    render(){
        return(
            <div>  
              <Radio text="選項一" radioName="must_be_same" defaultChecked />
              <Radio text="選項二" radioName="must_be_same" />
              <Radio text="選項三" radioName="must_be_same" disable />
            </div>
        )
    }
}

export default Example;`}</CodeSection>
          <h2 ref="title2">自定義單選式項目</h2>
          <p>自定義單選式項目，提供使用者參數設定，更改樣式。</p>
          <ComponentSection>
            <Radio
              text="0.76 兩"
              radioName="custom_radio"
              width="150px"
              color="#4a5c68"
              border="1px solid #93a9ba"
              checkedColor="white"
              checkedBackground="#5b7384"
              checkedBorder="1px solid #93a9ba"
              defaultChecked
            />
            <Radio
              text="0.79 兩"
              radioName="custom_radio"
              width="150px"
              color="#4a5c68"
              border="1px solid #93a9ba"
              checkedColor="white"
              checkedBackground="#5b7384"
              checkedBorder="1px solid #93a9ba"
            />
            <Radio
              text="0.84 兩"
              radioName="custom_radio"
              width="150px"
              color="#4a5c68"
              border="1px solid #93a9ba"
              checkedColor="white"
              checkedBackground="#5b7384"
              checkedBorder="1px solid #93a9ba"
            />
            <Radio
              text="0.91 兩"
              radioName="custom_radio"
              width="150px"
              color="#4a5c68"
              disable
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { Radio } from "dawn-react-ui-lib";

class Example extends Component{
    render(){
        return(
            <div>  
              <Radio
                text="0.76 兩"
                radioName="custom_radio"
                width="150px"
                color="#4a5c68"
                border="1px solid #93a9ba"
                checkedColor="white"
                checkedBackground="#5b7384"
                checkedBorder="1px solid #93a9ba"
                defaultChecked
              />
              <Radio
                text="0.79 兩"
                radioName="custom_radio"
                width="150px"
                color="#4a5c68"
                border="1px solid #93a9ba"
                checkedColor="white"
                checkedBackground="#5b7384"
                checkedBorder="1px solid #93a9ba"
              />
              <Radio
                text="0.84 兩"
                radioName="custom_radio"
                width="150px"
                color="#4a5c68"
                border="1px solid #93a9ba"
                checkedColor="white"
                checkedBackground="#5b7384"
                checkedBorder="1px solid #93a9ba"
              />
              <Radio
                text="0.91 兩"
                radioName="custom_radio"
                width="150px"
                color="#4a5c68"
                disable
              />
            </div>
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
              <td>color</td>
              <td>String</td>
              <td>#000000</td>
              <td>文字顏色</td>
            </tr>
            <tr>
              <td>checkedBackground</td>
              <td>String</td>
              <td>rgba(198, 153, 103, 0.2)</td>
              <td>已選取項目背景顏色</td>
            </tr>
            <tr>
              <td>checkedBorder</td>
              <td>String</td>
              <td>1px solid rgba(198, 153, 103, 0.6)</td>
              <td>已選取項目框線</td>
            </tr>
            <tr>
              <td>defaultChecked</td>
              <td>Boolean</td>
              <td>false</td>
              <td>預設已選取的項目</td>
            </tr>
            <tr>
              <td>disable</td>
              <td>Boolean</td>
              <td>false</td>
              <td>無法選取的項目</td>
            </tr>
            <tr>
              <td>padding</td>
              <td>String</td>
              <td>12px 16px</td>
              <td>單選項目padding</td>
            </tr>
            <tr>
              <td>radioName</td>
              <td>String</td>
              <td />
              <td>
                單選項目name，<Commit>必須賦予相同的值方可單選</Commit>
              </td>
            </tr>
            <tr>
              <td>text</td>
              <td>String</td>
              <td />
              <td>單選項目的文字說明</td>
            </tr>
            <tr>
              <td>width</td>
              <td>String</td>
              <td>46px</td>
              <td>單選項目寬度</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocRadio;
