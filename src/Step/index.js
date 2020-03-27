import React, { Component } from "react";
import * as Style from "./css";
import LoadingWhite from "./LoadingWhite";
import Button from "../Button";
export class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxHeight: {}, //當下展開步驟的內容
      openPurview: {}, // onClick title 跳轉其他步驟的判定狀態
      isLoading: false //轉場頁面狀態
    };
  }
  //第一次讀取資料 並預設顯示步驟
  componentWillMount() {
    this.defaultOpenStatus();
  }
  //根據預設顯示步驟資料 判定 是否可以觸發點擊事件
  componentDidMount() {
    this.openPurview();
  }
  //根據顯示的步驟改變 重新判定觸發點擊事件
  componentDidUpdate(prevProps, prevState) {
    if (this.state.maxHeight !== prevState.maxHeight) {
      this.openPurview();
    }
  }
  //判定預設設定的值，輸入id沒有的參數，固定顯示最後一筆
  defaultOpenStatus = () => {
    const { defaultOpen, dataList } = this.props;
    let defaultOpenStatus;
    for (let i = 0; i < dataList.length; i++) {
      if (defaultOpen === dataList[i].id) {
        defaultOpenStatus = defaultOpen;
        break;
      }
    }
    this.setState({ maxHeight: { [defaultOpenStatus]: true } });
  };
  //判定觸發點擊事件
  openPurview = async () => {
    const { maxHeight } = this.state;
    const { dataList } = this.props;
    let purview = {};
    for (let i = 0; i < dataList.length; i++) {
      let key = dataList[i].id;
      purview = { ...purview, [key]: true };
      if (maxHeight[key]) {
        break;
      }
    }
    await this.setState({ openPurview: purview });
  };
  //一秒後從true改成false -> 轉場頁面預設持續一秒
  loadingSetTime = () => {
    const { loading } = this.props;
    let second;
    if (typeof loading === "number") {
      second = loading;
    } else {
      second = 1000;
    }
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, second);
  };
  // onClick title -> 更改顯示步驟
  openContent = key => {
    const { openPurview } = this.state;
    if (openPurview[key]) {
      this.setState({ maxHeight: { [key]: true }, isLoading: true });
      this.goScroll(key);
      this.loadingSetTime();
    } else {
      return false;
    }
  };
  //滾動到某高度
  goScroll = (key, i, nextStep) => {
    const { scrollSetup } = this.props;
    if (scrollSetup) {
      let element = document.getElementById(key);
      let scrollHeight = element.offsetTop;
      let div = scrollSetup.elementId
        ? document.getElementById(`${scrollSetup.elementId}`)
        : window;
      //設定下一步的高度幅度
      let nextScroll = scrollSetup.nextScrollTop
        ? scrollSetup.nextScrollTop
        : 100;
      //設定起始高度
      let startingHeight = scrollSetup.startingHeight
        ? scrollSetup.startingHeight
        : 0;
      //判定下一步還是上一步，滾動幅度不一致
      let scrollTop = nextStep
        ? startingHeight + nextScroll * (i + 1)
        : scrollHeight - scrollSetup.prevScroll;
      let scrollOptions = {
        left: 0,
        top: scrollTop,
        behavior: "smooth"
      };
      div.scrollTo(scrollOptions);
    } else {
      return false;
    }
  };
  // 上一步的行為與按鈕樣式
  prevStep = key => {
    this.setState({ maxHeight: { [key]: true }, isLoading: true });
    this.loadingSetTime();
    this.goScroll(key);
  };
  prevButton = (key, prevkey, i) => {
    const { button } = this.props;
    // ↓為了可以不放button物件內部特定keyName也不會出現錯誤
    if (button) {
      if (button.prevButton) {
        if (i === 0 && !button.prevButton.firstPrevButton) {
          return;
        } else if (i === 0 && button.prevButton.firstPrevButton) {
          return button.prevButton.firstPrevButton;
        } else {
          return (
            <Button
              text="上一步"
              padding="16px 62px"
              onClick={() => {
                button &&
                  button.prevButton.function.forEach(item => {
                    key === item.id ? item.onClick() : false;
                  });
                this.prevStep(prevkey);
              }}
            />
          );
        }
      }
    } else {
      if (i === 0) {
        return;
      } else {
        return (
          <Button
            text="上一步"
            padding="16px 62px"
            onClick={() => {
              button &&
                button.prevButton.function.forEach(item => {
                  key === item.id ? item.onClick() : false;
                });
              this.prevStep(prevkey);
            }}
          />
        );
      }
    }
  };
  // 下一步的行為與按鈕樣式
  nextStep = (key, i) => {
    let nextStep = true;
    this.setState({ maxHeight: { [key]: true }, isLoading: true });
    this.loadingSetTime();
    this.goScroll(key, i, nextStep);
  };
  nextButton = (key, nexykey, i) => {
    const { button, dataList } = this.props;
    if (button) {
      if (button.nextButton) {
        if (i === dataList.length - 1 && !button.nextButton.lastNextButton) {
          return;
        } else if (
          i === dataList.length - 1 &&
          button.nextButton.lastNextButton
        ) {
          return button.nextButton.lastNextButton;
        } else {
          return (
            <Button
              text="下一步"
              textColor="#fff"
              backgroundColor="#000"
              padding="16px 62px"
              onClick={() => {
                button &&
                  button.nextButton.function.forEach(item => {
                    key === item.id ? item.onClick() : false;
                  });
                this.nextStep(nexykey, i);
              }}
            />
          );
        }
      }
    } else {
      if (i === dataList.length - 1) {
        return;
      } else {
        return (
          <Button
            text="下一步"
            textColor="#fff"
            backgroundColor="#000"
            padding="16px 62px"
            onClick={() => {
              button &&
                button.nextButton.function.forEach(item => {
                  key === item.id ? item.onClick() : false;
                });
              this.nextStep(nexykey, i);
            }}
          />
        );
      }
    }
  };
  render() {
    const { maxHeight, openPurview, isLoading } = this.state;
    const {
      dataList,
      stepBorderBottom,
      stepWidth,
      numberStep,
      titleWidth,
      titleBorder,
      color,
      loading,
      button
    } = this.props;
    return (
      <Style.Div>
        {/* 轉場頁面 */}
        {loading && isLoading ? <LoadingWhite show={true} /> : ""}
        {dataList.map((item, i) => {
          const key = dataList[i].id;
          //上一步按鈕的指定對象
          const prevKey = i === 0 ? dataList[0].id : dataList[i - 1].id;
          //下一步按鈕的指定對象
          const nextKey =
            i === dataList.length - 1
              ? dataList[dataList.length - 1].id
              : dataList[i + 1].id;
          return (
            <Style.Step
              key={i}
              stepWidth={stepWidth}
              stepBorderBottom={
                i === dataList.length - 1 ? "0" : stepBorderBottom // 計算最後element去底線
              }
            >
              <div
                id={item.id}
                style={{
                  cursor: "pointer",
                  width: titleWidth ? titleWidth : "100%"
                }}
                onClick={() => {
                  this.openContent(key);
                }}
              >
                <Style.Number
                  numberStep={numberStep}
                  color={openPurview[key] ? color : "rgb(149, 152, 154)"}
                >
                  {item.number}
                </Style.Number>
                <Style.Title
                  titleBorder={titleBorder}
                  color={openPurview[key] ? color : "rgb(149, 152, 154)"}
                >
                  {item.title}
                </Style.Title>
              </div>
              <div>
                <Style.Content maxHeight={maxHeight[key]}>
                  <div style={{ marginTop: "40px" }}>{item.content}</div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      marginTop: "30px"
                    }}
                  >
                    <div>{this.prevButton(key, prevKey, i)}</div>
                    <div
                      style={{
                        marginLeft:
                          button && button.prevButton
                            ? i === 0 && !button.prevButton.firstPrevButton
                              ? "0px"
                              : "50px"
                            : i === 0
                            ? "0px"
                            : "50px"
                      }}
                    >
                      {this.nextButton(key, nextKey, i)}
                    </div>
                  </div>
                </Style.Content>
              </div>
            </Style.Step>
          );
        })}
      </Style.Div>
    );
  }
}

export default Step;
