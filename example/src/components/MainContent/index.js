import React, { Component } from "react";
import styled from "styled-components";
import IntroSection from "../IntroSection";

const Div = styled.div`
  /* padding: 35px; */
  /* height: calc(100vh - 70px); */
  /* overflow: hidden; */
  padding-top: 15px;
  padding-left: 235px;
  padding-right: 15px;
  padding-bottom: 15px;
  display: flex;
  background: #eae8e3;
  min-height: 100vh;
  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 15px;
  }
`;

const DivContent = styled.div`
  /* width: calc(100% + 25px);
  padding-right: 25px;
  height: 100%;
  overflow: auto; */
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  padding: 35px;
  border-radius: 5px;
`;

const MoreList = styled.div`
  position: fixed;
  top: 35%;
  right: 0px;
  border-radius: 5px 0 0 5px;
  background: #4a5c68;
  color: white;
  padding: 20px;
  cursor: pointer;
  transition: all 500ms;
  z-index: 99;
  &:hover {
    right: 250px;
  }
`;

const ListContent = styled.div`
  position: absolute;
  width: 250px;
  /* height: 300px; */
  background: white;
  border: 1px solid #ececec;
  top: 0;
  left: 52px;
  border-radius: 0 5px 5px 5px;
`;

class MainContent extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <Div>
        <Layout>
          <DivContent id="main-content">{this.props.children}</DivContent>
        </Layout>
        <MoreList>
          <i className="far fa-bookmark" />
          <ListContent>
            <IntroSection titleList={this.props.titleList} />
          </ListContent>
        </MoreList>
      </Div>
    );
  }
}

export default MainContent;
