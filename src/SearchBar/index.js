import React, { Component } from "react";
import * as Style from "./css";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    show: false
  };
  onChange = e => {
    this.props.handleSearch(e.target.value);
  };
  handleClick = () => {
    this.setState({
      show: true
    });
  };
  handleClose = () => {
    this.setState({
      show: false
    });
  };
  render() {
    const { show } = this.state;
    const { searchText, needContent, needSearchText, placeholder } = this.props;
    const List = this.props.List;
    const title = this.props.title;
    return (
      <Style.searchBarMainDiv>
        <Style.IconDivForMobile
          className="IconDivForMobile"
          onClick={this.handleClick}
        />
        <Style.searchBar
          show={show}
          needContent={needContent}
          className="searchBar"
        >
          <Style.searchBarSecDiv
            className="searchBarSecDiv"
            onClick={this.handleClick}
            show={show}
          >
            <Style.btnIcon className="btnIcon" show={show} />
            <form>
              <Style.searchInput
                id="tb-css-desktop-search-input"
                type="text"
                autoComplete="off"
                placeholder={placeholder}
                style={{ border: "0px" }}
                onChange={this.onChange}
                value={searchText}
              />
            </form>
          </Style.searchBarSecDiv>

          {needContent ? (
            <Style.suggestSearch id="suggestSearch" show={show}>
              <Style.resultSuggestListTable className="resultSuggestListTable">
                <tbody>
                  <tr>
                    <td>
                      <Style.searchHD
                        data-bind="text: searchHD"
                        className="searchHD"
                      >
                        <span>{title}</span>
                      </Style.searchHD>
                      <Style.btnCloseSearch
                        needContent={needContent}
                        className="btnCloseSearch"
                        onClick={this.handleClose}
                        displayBtnCloseSearch={true}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Style.resultSuggestList
                        data-bind="foreach: resultSuggestList"
                        className="resultSuggestList"
                      >
                        {List
                          ? List.map(item => {
                              return (
                                <Style.resultSuggestName
                                  key={item.name}
                                  className="resultSuggestName"
                                >
                                  <div data-bind={item.bind}>{item.name}</div>
                                </Style.resultSuggestName>
                              );
                            })
                          : ""}
                      </Style.resultSuggestList>
                    </td>
                  </tr>
                </tbody>
              </Style.resultSuggestListTable>
              <table>
                <tbody>
                  <tr>
                    <td colSpan="2">
                      <Style.searchText
                        data-bind="text: searchText"
                        className="searchText"
                      >
                        {needSearchText && searchText.length !== 0
                          ? `正在搜尋 "${searchText}" ?`
                          : ""}
                      </Style.searchText>
                    </td>
                  </tr>
                </tbody>
                <tbody data-bind="foreach: resultList" />
              </table>
              <div className="txt" data-bind="text: msg" />
            </Style.suggestSearch>
          ) : (
            <Style.btnCloseSearch
              needContent={needContent}
              className="btnCloseSearch"
              onClick={this.handleClose}
              displayBtnCloseSearch={false}
            />
          )}
        </Style.searchBar>
      </Style.searchBarMainDiv>
    );
  }
}

SearchBar.defaultProps = {
  needContent: false,
  needSearchText: false,
  handleSearch: () => {},
  placeholder: "",
  searchText: ""
};

SearchBar.propTypes = {
  show: PropTypes.bool,
  searchText: PropTypes.string,
  needContent: PropTypes.bool,
  needSearchText: PropTypes.bool,
  List: PropTypes.array,
  title: PropTypes.string
};
export default SearchBar;
