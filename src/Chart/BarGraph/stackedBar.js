import React, { Component } from "react";
import * as d3 from "d3";

class StackedBar extends Component {
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

    let width = svgWidth - margin.left - margin.right;
    let height = svgHeight - margin.top - margin.bottom;
    let key = Object.keys(data[0]);

    let mycolor = d3.scaleOrdinal(color);

    let x = d3
      .scaleBand()
      .domain(initX.concat(data.map(d => d[key[0]])))
      .rangeRound([0, width])
      .padding(barWidth);

    let y0 = d3
      .scaleLinear()
      .domain([0, d3.max(data.map(d => d[key[1]]))])
      .range([height, 0]);

    let xAxis = d3.axisBottom().scale(x);

    // create left yAxis
    let yAxisLeft = d3
      .axisLeft()
      .scale(y0)
      .ticks(4);

    // create right yAxis

    let svg = d3
      .select(`#${id}`)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("class", "graph")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    showAxis.xAxis &&
      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
    showAxis.yAxis &&
      svg
        .append("g")
        .attr("class", "y axis axisLeft")
        .attr("transform", "translate(0,0)")
        .call(yAxisLeft)
        .append("text")
        .attr("y", 6)
        .attr("dy", "-2em")
        .style("text-anchor", "end")
        .text("Dollars");

    let bars = svg
      .append("g")
      .selectAll("g")
      .data(data)
      .enter()
      .append("g");

    let BarArray = key.slice(1, key.length);
    BarArray.map((bar, index) => {
      let interIndex = index + 1;
      bars
        .append("rect")
        .attr("x", d => x(d[key[0]]))
        .attr("width", x.bandwidth() / barSet)
        .attr("y", d => {
          let total = 0;
          for (let i = 1; i <= interIndex; i++) {
            total += d[key[i]];
          }
          return height - total;
        })
        .attr("height", d => {
          let total = 0;
          for (let i = 1; i <= interIndex; i++) {
            total += d[key[i]];
          }
          return total;
        })
        .attr("fill", mycolor(index));
    });

    let percent = data.map(d => d[key[1]] + d[key[2]] + d[key[3]]);

    if (showText) {
      showPercent
        ? BarArray.map((bar, index) => {
            let interIndex = index + 1;
            svg
              .append("g")
              .selectAll("text")
              .data(data)
              .enter()
              .append("text")
              .attr("class", "textClass")
              .text(
                (d, i) =>
                  ((d[key[index + 1]] / percent[i]) * 100).toFixed(decimal) +
                  "%"
              )
              .attr("x", d => x(d[key[0]]))
              .attr("y", d => {
                let total = 0;
                for (let i = 1; i <= interIndex; i++) {
                  total += d[key[i]];
                }
                return height - total - textHeight;
              });
          })
        : BarArray.map((bar, index) => {
            let interIndex = index + 1;
            svg
              .append("g")
              .selectAll("text")
              .data(data)
              .enter()
              .append("text")
              .attr("class", "textClass")
              .text(d => d[key[index + 1]])
              .attr("x", d => x(d[key[0]]))
              .attr("y", d => {
                let total = 0;
                for (let i = 1; i <= interIndex; i++) {
                  total += d[key[i]];
                }
                return height - total - textHeight;
              });
          });
    } else return;
  };
  render() {
    const { id } = this.props;
    return <div id={id} />;
  }
}

export default StackedBar;
