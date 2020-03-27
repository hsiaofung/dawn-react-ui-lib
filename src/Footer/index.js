import React, { Component } from "react";
import { Wrapper,Div, CopyRight } from "./css";
import FbIcon from "./icon/icon_fb.png";
import IGIcon from "./icon/icon_ig.png";
import Path from "./icon/icon_path.png";
import Pinterest from "./icon/icon_pinterest.png";
import Weibo from "./icon/icon_weibo.png";

class Footer extends Component {
  render() {
    const subTitleGroupList = this.props.subTitleGroup;
    return (
        <Wrapper >
          <Div>
            {this.props.subTitleGroup &&
              subTitleGroupList.map((item, index) => (
                <div key={index}>
                  <ul>
                    <p key={index}>{item.title}</p>
                    {item.content.map((conItem, index) => (
                      <a key={index} href={conItem.link}>
                        <li
                          style={{
                            display: conItem.displayInline,
                            paddingRight: conItem.paddingRight
                          }}
                        >
                          {(conItem.icon === "fb" && <img src={FbIcon} />) ||
                            (conItem.icon === "ig" && <img src={IGIcon} />) ||
                            (conItem.icon === "path" && <img src={Path} />) ||
                            (conItem.icon === "pinterest" && (
                              <img src={Pinterest} />
                            )) ||
                            (conItem.icon === "weibo" && <img src={Weibo} />) ||
                            conItem.text}
                        </li>
                      </a>
                    ))}
                  </ul>
                </div>
              ))}
          </Div>
          <CopyRight>
            <p>{this.props.copyRight}</p>
          </CopyRight>
        </Wrapper>
    );
  }
}

export default Footer;
