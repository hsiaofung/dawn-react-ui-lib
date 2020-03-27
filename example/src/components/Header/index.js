import React, { Component } from "react";
import { Head, Left, Right } from "./css";
// import MobileMenu from "../MobileMenu";
import MenuPage from "./MenuPage";
import Search from "./Search";

class Header extends Component {
  render() {
    return (
      <Head>
        <Left>
          <MenuPage />
          <Search />
        </Left>
        <Right>
          <i className="fas fa-bell" />
          <i className="fas fa-cog" />
        </Right>
        {/* <MobileMenu /> */}
      </Head>
    );
  }
}

export default Header;
