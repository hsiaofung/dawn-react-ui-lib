import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DOC, HOME_PAGE } from "../../../constants";
import { Div, Button, Icon, ChartUl, Arrow } from "./css";

class SubitemsNav extends Component {
  state = {
    show: false
  };

  openSubitems = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    const { data, cbu, url } = this.props;
    const branchName = data.name.toLowerCase();
    const alreadyOpenSubitem = url.includes(branchName);
    const totalNum = data.subitems.length + 1;
    return (
      <Div show={this.state.show || alreadyOpenSubitem}>
        <Button onClick={this.openSubitems}>
          <Icon>
            <i className={data.icon} />
          </Icon>
          {data.name}
          <Arrow show={this.state.show || alreadyOpenSubitem} />
        </Button>
        <ChartUl
          show={this.state.show || alreadyOpenSubitem}
          totalNum={totalNum}
        >
          {data.subitems.map((item, k) => (
            <li key={k}>
              <Link
                to={`${HOME_PAGE}/${DOC}/${item.path}`}
                style={{
                  color:
                    item.path === `${item.branch}/${cbu}`
                      ? "#333333"
                      : "#949494"
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ChartUl>
      </Div>
    );
  }
}

export default SubitemsNav;
