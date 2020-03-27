import React, { Component } from "react";
import { Div, Content, NavText } from "./css";
import { Link } from "react-router-dom";
import { DOC, HOME_PAGE } from "../../constants";
import User from "./User";
import Logo from "./Logo";
import SubitemsNav from "./SubitemsNav";

class DocumentNavBar extends Component {
  state = {
    showChartSubitems: false
  };

  openSubitems = () => {
    this.setState({
      showChartSubitems: !this.state.showChartSubitems
    });
  };

  render() {
    const url = window.location.pathname;
    const cbu = url.substring(url.lastIndexOf("/") + 1);

    // DocumentNavBar 的所有元件項目 (*若要新增元件項目，請使用這邊)，要照字母排序
    const documentLists = [
      { path: "alert", name: "Alert", icon: "fas fa-bell" },
      { path: "button", name: "Button", icon: "fas fa-shapes" },
      { path: "card", name: "Card", icon: "fas fa-address-card" },
      {
        path: "chart/pie-graph",
        name: "Chart",
        icon: "far fa-chart-bar",
        subitems: [
          { path: "chart/area-graph", name: "Area Graph", branch: "chart" },
          { path: "chart/bar-graph", name: "Bar Graph", branch: "chart" },
          { path: "chart/line-graph", name: "Line Graph", branch: "chart" },
          { path: "chart/pie-graph", name: "Pie Graph", branch: "chart" }
        ]
      },
      { path: "checkbox", name: "Checkbox", icon: "fas fa-check-square" },
      { path: "dashboard", name: "Dashboard", icon: "fas fa-tachometer-alt" },
      { path: "dialog", name: "Dialog", icon: "fas fa-comment-alt" },
      {
        path: "form",
        name: "Form",
        icon: "fas fa-clipboard-list"
      },
      { path: "fullBar", name: "FullBar", icon: "fas fa-clone" },
      { path: "footer", name: "Footer", icon: "fas fa-shoe-prints" },
      { path: "header", name: "Header", icon: "fas fa-heading" },
      { path: "input", name: "Input", icon: "fas fa-edit" },
      { path: "layout", name: "Layout", icon: "far fa-clone" },
      { path: "navbar", name: "NavBar", icon: "fas fa-ellipsis-h" },
      { path: "radio", name: "Radio", icon: "fas fa-dot-circle" },
      { path: "searchbar", name: "Searchbar", icon: "fas fa-search" },
      { path: "select", name: "Select", icon: "fas fa-clipboard-check" },
      { path: "sliderSet", name: "Slider", icon: "fas fa-images" },
      { path: "step", name: "Step", icon: "fas fa-step-forward" },
      { path: "subMenu", name: "SubMenu", icon: "fas fa-window-restore" }
    ];

    return (
      <Div>
        <Content>
          <Logo />
          <User />
          {documentLists.map((data, i) =>
            !data.subitems ? (
              <NavText key={i}>
                <Link
                  to={`${HOME_PAGE}/${DOC}/${data.path}`}
                  style={{
                    color: data.path === cbu ? "white" : "#969696",
                    background: data.path === cbu ? "#bc937c" : "white"
                  }}
                >
                  <span style={{ padding: "0 8px" }}>
                    <i className={data.icon} />
                  </span>
                  {data.name}
                </Link>
              </NavText>
            ) : (
              <SubitemsNav data={data} key={i} cbu={cbu} url={url} />
            )
          )}
        </Content>
      </Div>
    );
  }
}

export default DocumentNavBar;
