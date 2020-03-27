import React, { Component } from "react";
import { Div, Wrapper, Tag } from "./css.js";

class Card extends Component {

  clickHandler = () => {
    this.props.onClick()
  };

  render() {
    return (
      <Div width={this.props.width} onClick={this.clickHandler} margin={this.props.margin} displayInline={this.props.displayInline}>
        <Wrapper hoverImg={this.props.hoverImg}>
          {this.props.tag ? <Tag>{this.props.tag}</Tag> : null}
          <img
            src={
              this.props.img
                ? this.props.img
                : "https://cdn.chowsangsang.com/hkeshop/images/p/c/90704c/EPCM90704GDC_3bd718db-9ea1-4b47-9fd5-8ef197305902_350.jpg"
            }
            alt=""
          />
        </Wrapper>
        {this.props.content ? <div>{this.props.content}</div> : null}
      </Div>
    );
  }
}

Card.defaultProps = {
  onClick: () => {}
};

export default Card;
