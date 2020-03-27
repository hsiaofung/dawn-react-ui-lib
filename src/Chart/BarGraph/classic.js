import React, { Component } from "react";
import * as d3 from "d3";

class Classic extends Component {
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
    let mycolor = d3.scaleOrdinal(color);
    let key = Object.keys(data[0]);
    let BarArray = key.slice(1, key.length);

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

    // create left yAxis
    let yAxisLeft = d3
      .axisLeft()
      .scale(y0)
      .ticks(6);

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
        .call(yAxisLeft) &&
      svg
        .selectAll("text")
        .append("text")
        .attr("y", 6)
        .attr("dy", "-2em")
        .style("text-anchor", "end")
        .text("Dollars");

    let bars = svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("g");

    BarArray.map((bar, index) => {
      textHover
        ? bars
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d[key[0]]) + (x.bandwidth() * index) / barSet)
            .attr("width", x.bandwidth() / barSet)
            .attr("y", d => y0(d[key[index + 1]]))
            .attr("height", d => height - y0(d[key[index + 1]]))
            .attr("fill", mycolor(color[index + 1]))
            .on("mouseover", function() {
              d3.select(this.parentNode.childNodes[(index*2)+1]).attr("class", "show");
            })
            .on("mouseout", function() {
              d3.select(this.parentNode.childNodes[(index*2)+1]).attr("class", "hide");
            })
        : bars
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d[key[0]]) + (x.bandwidth() * index) / barSet)
            .attr("width", x.bandwidth() / barSet)
            .attr("y", d => y0(d[key[index + 1]]))
            .attr("height", d => height - y0(d[key[index + 1]]))
            .attr("fill", mycolor(color[index + 1]));
      showText
        ? bars
            .append("text")
            .attr("class", "show")
            .text(d => d[key[index + 1]])
            .attr(
              "x",
              d => x(d[key[0]]) + (x.bandwidth() * index) / barSet + textRight
            )
            .attr("y", d => y0(d[key[index + 1]] + textHeight))
        : bars
            .append("text")
            .attr("class", "hide")
            .text(d => d[key[index + 1]])
            .attr(
              "x",
              d => x(d[key[0]]) + (x.bandwidth() * index) / barSet + textRight
            )
            .attr("y", d => y0(d[key[index + 1]] + textHeight));
    });
  };

  render() {
    const { id } = this.props;
    return <div id={`${id}`} />;
  }
}

export default Classic;
