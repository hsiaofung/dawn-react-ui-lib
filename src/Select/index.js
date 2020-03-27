import React, { Component } from "react";
import * as Style from "./css";
import arrowImg from "./sort-down.png";

export class Select extends Component {
  onChange = e => {
    const { selectValue } = this.props;
    if (selectValue) {
      selectValue(e.target);
    }
  };
  render() {
    const {
      id,
      className,
      name,
      val,
      dataList,
      warning,
      title,
      width,
      height,
      margin,
      fontSize,
      fontWeight,
      titleWidth,
      titleFontSize,
      padding
    } = this.props;
    const text = () => {
      if (title) {
        return (
          <Style.Text
            titleWidth={titleWidth}
            height={height}
            titleFontSize={titleFontSize}
            padding={padding}
          >
            {title}
          </Style.Text>
        );
      } else {
        return;
      }
    };
    return (
      <div
        style={{
          width: title ? (width ? width : "150px") : width ? width : "100px",
          display: "flex",
          border: warning ? "1px solid red" : "1px solid #e9e7e8",
          margin: margin ? margin : "5px",
          position: "relative"
        }}
      >
        {text()}
        <Style.Select
          name={name}
          id={id}
          calss={className}
          warning={warning}
          width={width}
          height={height}
          fontSize={fontSize}
          fontWeight={fontWeight}
          title={title}
          value={val}
          onChange={this.onChange}
          padding={padding}
        >
          {dataList.map((item, i) => (
            <option key={i} value={item.option}>
              {item.option}
            </option>
          ))}
        </Style.Select>
        <span
          style={{
            position: "absolute",
            width: "8px",
            height: "8px",
            top: "10px",
            right: "7px",
            pointerEvents: "none"
          }}
        >
          <img src={arrowImg} style={{ width: "8px", height: "8px" }} />
        </span>
      </div>
    );
  }
}

export default Select;
