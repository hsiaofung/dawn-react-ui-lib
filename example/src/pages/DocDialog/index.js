import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import MainContent from "../../components/MainContent";
import ComponentSection from "../../components/ComponentSection";
import CodeSection from "../../components/CodeSection";
import TableSection from "../../components/TableSection";
import Commit from "../../components/Commit";
// UI component
import { Dialog, Button } from "dawn-react-ui-lib";

class DocDialog extends Component {
  state = {
    openDialogOne: false,
    openDialogTwo: false,
    openDialogThree: false,
    openDialogFour: false
  };

  componentDidMount() {
    this.setState({
      list: this.refs
    });
  }

  openDialogOne = () => {
    // 打開第一個Dialog
    this.setState({
      openDialogOne: true
    });
  };
  closeDialogOne = () => {
    // 關閉第一個Dialog
    this.setState({
      openDialogOne: false
    });
  };

  openDialogTwo = () => {
    // 打開第二個Dialog
    this.setState({
      openDialogTwo: true
    });
  };
  closeDialogTwo = () => {
    // 關閉第二個Dialog
    this.setState({
      openDialogTwo: false
    });
  };

  openDialogThree = () => {
    // 打開第三個Dialog
    this.setState({
      openDialogThree: true
    });
  };

  closeDialogThree = () => {
    // 關閉第三個Dialog
    this.setState({
      openDialogThree: false
    });
  };

  openDialogFour = () => {
    // 打開第四個Dialog
    this.setState({
      openDialogFour: true
    });
  };

  closeDialogFour = () => {
    // 關閉第四個Dialog
    this.setState({
      openDialogFour: false
    });
  };

  render() {
    return (
      <div>
        <DocumentNavBar />
        <MainContent titleList={this.refs}>
          <h1>Dialog 對話框</h1>
          <p>
            對話框{`<Dialog>`}
            提供使用者一個任務事件，內容可以提供關鍵訊息，讓使用者進行認確，或者更多任務事件。
            <br />
            對話框是模態窗體的一種類型，
            <Commit>透過顯示在畫面的正前面，來提供關鍵訊息的顯示</Commit>
            ，或者要求用戶進行確認和判斷。對話框在出現時會禁用應用程序的所有功能(無法點擊何後在對話框之外的元件)，並在螢幕上保持固定，直到被確認，被取消或已採取其他必要的操作。
          </p>
          <h2 ref="title1">基本對話框</h2>
          <p>
            基本對話框，提供使用者「點擊按鈕」以及「對話框」，當點擊時按鈕顯示對話框，
            基本對話框內包含可以放置標題、內容，
            適用於提示文字、海報、宣傳文物等。
          </p>
          <ComponentSection>
            <Button
              text="基本對話框"
              onClick={this.openDialogOne}
              width="250px"
              padding="16px"
            />
            <Dialog
              open={this.state.openDialogOne}
              handleClose={this.closeDialogOne}
              contentHeader="標題文字"
              contentBody={<div>內容</div>}
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { Dialog, Button } from "dawn-react-ui-lib";

class Example extends Component{
    state={
      open: false
    }
    // 使用者自行定義的Button的點擊事件
    openDialog = () => {
      this.setState({
        open:true
      })
    }
    // 傳下去給Dialog關閉畫面的事件
    closeDialog = () => {
      this.setState({
        open:false
      })
    }
    render(){
        return(
          <div>  
            <Button
              text="基本對話框"
              onClick={this.openDialog}
              width="250px"
              padding="16px"
            />
            <Dialog 
                open={this.state.open}
                handleClose={this.closeDialog}               
                contentHeader="標題文字"
                contentBody={<div>內容</div>}
             />
          </div>
        )
    }
}

export default Example;`}</CodeSection>

          <h2 ref="title2">用戶確認對話框</h2>
          <p>
            用戶確認對話框，提供使用者「點擊按鈕」、「對話框」以及「確認取消按鈕」，可透過參數設定讓使用者在按下確認按鈕時，進行事件的傳遞，適用於提交事件。
          </p>
          <ComponentSection>
            <Button
              text="用戶確認對話框"
              onClick={this.openDialogTwo}
              width="250px"
              padding="16px"
            />
            <Dialog
              open={this.state.openDialogTwo}
              handleClose={this.closeDialogTwo}
              contentHeader="標題文字"
              contentBody={<div>內容</div>}
              userAgree
              userAgreeFunc={() => {
                alert("自定義確認事件");
              }}
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { Dialog, Button } from "dawn-react-ui-lib";

class Example extends Component{
    state={
      open: false
    }
    // 使用者自行定義的Button的點擊事件
    openDialog = () => {
      this.setState({
        open:true
      })
    }
    // 傳下去給Dialog關閉畫面的事件
    closeDialog = () => {
      this.setState({
        open:false
      })
    }
    render(){
        return(
          <div>
            <Button
              text="用戶確認對話框"
              onClick={this.openDialog}
              width="250px"
              padding="16px"
            />
            <Dialog
              open={this.state.open}
              handleClose={this.closeDialog}
              contentHeader="標題文字"
              contentBody={<div>內容</div>}
              userAgree
              userAgreeFunc={() => {
                alert("自定義確認事件");
              }}
            />
          </div>
        )
    }
}

export default Example;`}</CodeSection>

          <h2 ref="title3">捲動軸對話框</h2>
          <p>捲動軸對話框，適用於內容較長的物件。</p>
          <ComponentSection>
            <Button
              text="捲動軸對話框"
              onClick={this.openDialogThree}
              width="250px"
              padding="16px"
            />
            <Dialog
              open={this.state.openDialogThree}
              handleClose={this.closeDialogThree}
              contentHeader="標題文字"
              contentBody={<div>內容</div>}
              userAgree
              scrollBar
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { Dialog, Button } from "dawn-react-ui-lib";

class Example extends Component{
    state={
      open: false
    }
    // 使用者自行定義的Button的點擊事件
    openDialog = () => {
      this.setState({
        open:true
      })
    }
    // 傳下去給Dialog關閉畫面的事件
    closeDialog = () => {
      this.setState({
        open:false
      })
    }
    render(){
        return(
          <div>
            <Button
              text="捲動軸對話框"
              onClick={this.open}
              width="250px"
              padding="16px"
            />
            <Dialog
              open={this.state.openDialog}
              handleClose={this.closeDialog}
              contentHeader="標題文字"
              contentBody={<div>內容</div>}
              userAgree
              scrollBar
            />
          </div>
        )
    }
}

export default Example;`}</CodeSection>

          <h2 ref="title4">自定義對話框</h2>
          <p>自定義對話框，提供使用者參數設定，更改樣式。</p>
          <ComponentSection>
            <Button
              text="自定義對話框"
              onClick={this.openDialogFour}
              width="250px"
              padding="16px"
            />
            <Dialog
              width="500px"
              open={this.state.openDialogFour}
              handleClose={this.closeDialogFour}
              contentHeader="標題文字"
              contentBody={<div>內容</div>}
            />
          </ComponentSection>
          <CodeSection>{`import React, { Component } from "react";
import { Dialog, Button } from "dawn-react-ui-lib";

class Example extends Component{
    state={
      open: false
    }
    // 使用者自行定義的Button的點擊事件
    openDialog = () => {
      this.setState({
        open:true
      })
    }
    // 傳下去給Dialog關閉畫面的事件
    closeDialog = () => {
      this.setState({
        open:false
      })
    }
    render(){
        return(
            <div>  
              <Button
                text="自定義對話框"
                onClick={this.open}
                width="250px"
                padding="16px"
              />
              <Dialog
                width="500px"
                open={this.state.openDialog}
                handleClose={this.closeDialog}
                contentHeader="標題文字"
                contentBody={<div>內容</div>}
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
              <td>contentHeader</td>
              <td>String|Object</td>
              <td />
              <td>對話框的內容</td>
            </tr>
            <tr>
              <td>contentBody</td>
              <td>String|Object</td>
              <td />
              <td>對話框的內容</td>
            </tr>
            <tr>
              <td>scrollBar</td>
              <td>Boolean</td>
              <td>false</td>
              <td>對話框的捲動軸</td>
            </tr>
            <tr>
              <td>userAgree</td>
              <td>Boolean</td>
              <td>false</td>
              <td>顯示確認、取消按鈕</td>
            </tr>
            <tr>
              <td>userAgreeFunc</td>
              <td>Function</td>
              <td />
              <td>按下確認按鈕時所提交的事件</td>
            </tr>
            <tr>
              <td>width</td>
              <td>String</td>
              <td>60%</td>
              <td>對話框寬度</td>
            </tr>
          </TableSection>
        </MainContent>
      </div>
    );
  }
}

export default DocDialog;
