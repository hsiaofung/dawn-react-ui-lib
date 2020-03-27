import React, { Component } from "react";
import * as Style from "./css";

export class SubMenu extends Component {
  render() {
    const {
      totalSetup,
      listWidth,
      headlineSetup,
      imgWidth,
      background,
      type,
      subMenuKey,
      imageTextStep,
      subtitleStep
    } = this.props;
    const dataList = this.props.dataList[subMenuKey];
    return type === "list" ? (
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: background ? background : "#fff"
        }}
      >
        {dataList.map((item, i) => {
          const { total, image } = item;
          const list = type === "list" ? item.list : [];
          return (
            <Style.Div key={i}>
              <a
                href={total["link"]}
                style={{
                  fontSize:
                    totalSetup && totalSetup.fontSize
                      ? totalSetup.fontSize
                      : "14px",
                  fontWeight:
                    totalSetup && totalSetup.fontWeight
                      ? totalSetup.fontWeight
                      : "0",
                  color:
                    totalSetup && totalSetup.color ? totalSetup.color : "#000"
                }}
              >
                {total["text"]}
              </a>
              <Style.Content>
                {list.map((item, i) => {
                  return (
                    <Style.List key={i} listWidth={listWidth}>
                      <div style={{ padding: "0" }}>
                        <Style.Headline headlineSetup={headlineSetup}>
                          {item.headline}
                        </Style.Headline>
                        {item.subtitle.map((item, i) => (
                          <Style.Li key={i} subtitleStep={subtitleStep}>
                            <a
                              style={{
                                color:
                                  subtitleStep && subtitleStep.color
                                    ? subtitleStep.color
                                    : "#000"
                              }}
                              href={item["link"]}
                            >
                              {item["text"]}
                            </a>
                          </Style.Li>
                        ))}
                      </div>
                    </Style.List>
                  );
                })}
                <Style.Img imgWidth={imgWidth}>
                  <a href={image.link}>
                    <img style={{ maxWidth: "100%" }} src={image.url} />
                  </a>
                </Style.Img>
              </Style.Content>
            </Style.Div>
          );
        })}
      </div>
    ) : type === "image" ? (
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: background ? background : "#fff"
        }}
      >
        <Style.Content>
          {dataList.map((item, i) => {
            return (
              <Style.Img
                key={i}
                imgWidth={imgWidth}
                style={{
                  textAlign:
                    imageTextStep && imageTextStep.textAlign
                      ? imageTextStep.textAlign
                      : "center"
                }}
              >
                <a href={item.link}>
                  <img style={{ maxWidth: "100%" }} src={item.image} />
                </a>
                <br />
                <a
                  href={item.link}
                  style={{
                    width: "100%",
                    fontSize:
                      imageTextStep && imageTextStep.fontSize
                        ? imageTextStep.fontSize
                        : "14px",
                    fontWeight:
                      imageTextStep && imageTextStep.fontWeight
                        ? imageTextStep.fontWeight
                        : "0",
                    color:
                      imageTextStep && imageTextStep.color
                        ? imageTextStep.color
                        : "#000"
                  }}
                >
                  {item.text}
                </a>
              </Style.Img>
            );
          })}
        </Style.Content>
      </div>
    ) : (
      ""
    );
  }
}

export default SubMenu;
