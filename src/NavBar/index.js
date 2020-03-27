import React, { Component } from "react";
import styled from "styled-components";
import NavWithColumn from "./NavWithColumn";
import Nav from "./Nav";

const Div = styled.div`
  background: ${props => (props.background ? props.background : "#f4f4f4")};
  width: 100%;
  height: ${props => (props.height ? props.height : "70px")};
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${props => (props.sticky ? "fixed" : "relative")};
  top: ${props => (props.sticky ? `${props.top}px` : "0")};
  left: 0;
  z-index: ${props => (props.sticky ? "99" : "10")};
  a {
    color: ${props => (props.color ? props.color : "#000000")};
  }
`;

const RightSection = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

const LeftSection = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

class NavBar extends Component {
  state = {
    position: 0,
    sticky: false
  };

  componentDidMount = () => {
    // 紀錄navBar的初始位置，減去距離上方的高度。
    if (this.props.name) {
      const navBarRef = document.getElementById(this.props.name);
      this.setState({
        position: navBarRef.offsetTop - this.props.top
      });
    }

    // 開發模式的sticky
    if (this.props.devSticky) {
      const mainContentRef = document.getElementById("main-content");
      mainContentRef.addEventListener(
        "scroll",
        this.devScrollToSticky.bind(this, mainContentRef)
      );
    }
    // 一般模式的sticky
    if (this.props.sticky) {
      window.addEventListener("scroll", this.scrollToSticky);
    }
  };

  // 開發模式的事件
  devScrollToSticky = mainContentRef => {
    if (mainContentRef.scrollTop > this.state.position) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  };

  // 一般模式的事件
  scrollToSticky = () => {
    if (window.pageYOffset > this.state.position) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  };

  render() {
    const navbarLists = this.props.navbarLists ? this.props.navbarLists : [];
    const titleKey = this.props.titleKey ? this.props.titleKey : "titleName";
    const columnKey = this.props.columnKey ? this.props.columnKey : "subitems";
    const componentLists = this.props.componentLists
      ? this.props.componentLists
      : [];
    return (
      <div>
        <Div
          id={this.props.name}
          height={this.props.height}
          sticky={this.state.sticky}
          top={this.props.top}
          background={this.props.background}
          color={this.props.color}
        >
          {this.props.leftSection ? (
            <LeftSection>{this.props.leftSection}</LeftSection>
          ) : null}

          <div>
            {navbarLists.map((data, i) =>
              data[columnKey] ? (
                <NavWithColumn title={data[titleKey]} key={i}>
                  {componentLists.map((item, k) =>
                    item[titleKey] === data[titleKey] ? (
                      <div key={k}>{item.component}</div>
                    ) : null
                  )}
                </NavWithColumn>
              ) : (
                <Nav href="#" title={data[titleKey]} key={i} />
              )
            )}
          </div>

          {this.props.rightSection ? (
            <RightSection>{this.props.rightSection}</RightSection>
          ) : null}
        </Div>
        <div style={{ height: this.state.sticky ? this.props.height : "0" }} />
      </div>
    );
  }
}

export default NavBar;
