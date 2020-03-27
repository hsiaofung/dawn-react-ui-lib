import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Div, Content } from "./css";
import { NavText } from "../DocumentNavBar/css";
import { HOME_PAGE } from "../../constants";
import Logo from "../DocumentNavBar/Logo";
import User from "../DocumentNavBar/User";
import SubitemsNav from "../DocumentNavBar/SubitemsNav";

class GettingStartedNavBar extends Component {
  render() {
    const url = window.location.pathname;
    const cbu = url.substring(url.lastIndexOf("/") + 1);
    const items = [
      { path: "introduction", name: "Introduction", icon: "fas fa-power-off" },
      {
        path: "style-and-theme",
        name: "Style and Theme",
        icon: "fas fa-palette"
      },
      { path: "example", name: "Example", icon: "fas fa-file-alt" }
    ];
    return (
      <Div>
        <Content>
          <Logo />
          <User />
          {items.map((item, i) =>
            !item.subitems ? (
              <NavText key={i}>
                <Link
                  to={`${HOME_PAGE}/${item.path}`}
                  style={{
                    color: item.path === cbu ? "white" : "#969696",
                    background: item.path === cbu ? "#bc937c" : "white"
                  }}
                >
                  <span style={{ padding: "0 8px" }}>
                    <i className={item.icon} />
                  </span>
                  {item.name}
                </Link>
              </NavText>
            ) : (
              <SubitemsNav data={item} key={i} cbu={cbu} url={url} />
            )
          )}
        </Content>
      </Div>
    );
  }
}

export default GettingStartedNavBar;
