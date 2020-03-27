import React, { Component } from "react";
import * as Style from "./css";

export class Checkbox extends Component {
  onChange = e => {
    const { checkboxValue } = this.props;
    if (checkboxValue) {
      checkboxValue(e.target);
    }
  };
  render() {
    const { dataList, cbDefault, className } = this.props;
    const defaultCheckbox = (data, i) => {
      if (typeof cbDefault === "string") {
        return cbDefault === data.text;
      } else if (typeof cbDefault === "boolean") {
        return i === 0;
      } else {
        return false;
      }
    };
    const defaultType = data => {
      if (data.type) {
        return data.type;
      } else {
        return "checkbox";
      }
    };
    return (
      <React.Fragment>
        {dataList.map((data, i) => (
          <div key={i} style={{ display: "flex", margin: "10px" }}>
            <Style.CheckboxInput
              type={defaultType(data)}
              id={data.id}
              calss={className}
              name={data.name}
              value={data.checkbox}
              onChange={this.onChange}
              defaultChecked={defaultCheckbox(data, i)}
              disabled={data.disabled}
            />
            <Style.CheckboxLabel htmlFor={data.id} />
            <div style={{ margin: "-3.5px 0 0 -20px" }}>
              <p style={{ margin: "0" }}>{data.text}</p>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Checkbox;
