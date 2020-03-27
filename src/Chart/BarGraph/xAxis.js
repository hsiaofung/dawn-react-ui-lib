import React, { Component } from "react";
import * as d3 from "d3";

export class xAxis extends Component {
  componentDidMount() {
    this.drawChart();
  }
  drawChart = () => {
    const {
      id,
      data,
      margin,
      svgWidth,
      svgHeight,
      barWidth,
      barSet,
      color,
      textHeight,
      textRight,
      textHover,
      showText,
      showPercent,
      decimal,
      showAxis,
      initX
    } = this.props;
    let x = d3
      .scaleBand()
      .domain(initX.concat(data.map(d => d[key[0]])))
      .rangeRound([0, width])
      .padding(barWidth);
    let y0 = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(
          data.map((d, i) => d[key[1]]).concat(data.map((d, i) => d[key[2]]))
        )
      ])
      .range([height, 0]);

    let xAxis = d3.axisBottom().scale(x);

    let yAxisLeft = d3
      .axisLeft()
      .scale(y0)
      .ticks(6);
  };
  render() {
    return <div />;
  }
}

export default xAxis;
