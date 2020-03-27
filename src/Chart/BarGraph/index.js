import React, { Component } from "react";
import { Wrapper } from "./css.js";
import Classic from "./classic";
import StackedBar from "./stackedBar";
import Horizontal from "./horizontal";

class BarGraph extends Component {
  render() {
    const {
      id,
      data,
      margin,
      svgWidth,
      svgHeight,
      bar,
      color,
      text,
      showAxis,
      initX,
      type
    } = this.props;
    return (
      (type === "classic" && (
        <Wrapper>
          <Classic
            id={id}
            data={data}
            margin={margin}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
            barWidth={bar.barWidth}
            barSet={bar.barSet}
            color={color}
            textHeight={text.textHeight}
            textHeight={text.textHeight}
            textRight={text.textRight}
            textHover={text.textHover}
            showText={text.showText}
            showPercent={text.showPercent}
            decimal={text.decimal}
            showAxis={showAxis}
            initX={initX}
          />
        </Wrapper>
      )) ||
      (type === "stackedBar" && (
        <Wrapper>
          <StackedBar
            id={id}
            data={data}
            margin={margin}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
            barWidth={bar.barWidth}
            barSet={bar.barSet}
            color={color}
            textHeight={text.textHeight || 2}
            textRight={text.textRight}
            textHover={text.textHover}
            showText={text.showText}
            showPercent={text.showPercent}
            decimal={text.decimal}
            showAxis={showAxis}
            initX={initX}
          />
        </Wrapper>
      )) ||
      (type === "horizontal" && (
        <Wrapper>
          <Horizontal
            id={id}
            data={data}
            margin={margin}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
            barWidth={bar.barWidth}
            barSet={bar.barSet}
            color={color}
            textHeight={text.textHeight || 2}
            textRight={text.textRight}
            textHover={text.textHover}
            showText={text.showText}
            showPercent={text.showPercent}
            decimal={text.decimal}
            showAxis={showAxis}
            initX={initX}
            {...text}
          />
        </Wrapper>
      ))
    );
  }
}
BarGraph.defaultProps = {
  id: "bar",
  data: [],
  margin: { top: 30, right: 30, bottom: 30, left: 30 },
  svgWidth: 400,
  svgHeight: 300,
  bar: { barWidth: 0.5, barSet: 1 },
  color: [
    "rgba(235, 136, 150,1)",
    "rgba(235, 136, 150,0.7)",
    "rgba(235, 136, 150,0.4)",
    "rgba(235, 136, 150,0.1)"
  ],
  text: {},
  textHeight: 2,
  textRight: 2,
  textHover: false,
  showText: true,
  showPercent: false,
  decimal: 0,
  showAxis: { xAxis: false, yAxis: false },
  initX: [],
  type: "classic"
};

export default BarGraph;
