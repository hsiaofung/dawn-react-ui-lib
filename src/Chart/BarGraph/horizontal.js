import React, { Component } from "react";
import * as d3 from "d3";

export class Horizontal extends Component {
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
        d3.max(
          data.map((d, i) => d[key[1]]).concat(data.map((d, i) => d[key[2]]))
        ),
        0
      ])
      .range([height, 0]);

    let xAxis = d3
      .axisBottom()
      .scale(y0)
      .ticks(5);

    // create left yAxis
    let yAxisLeft = d3.axisLeft().scale(x);

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
        .attr("transform", "translate(0, 0 )")
        .call(yAxisLeft);

    showAxis.yAxis &&
      svg
        .append("g")
        .attr("class", "y axis axisLeft")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("y", 6)
        .attr("dy", "-2em")
        .style("text-anchor", "end")
        .text("Dollars");

    let bars = svg

      .selectAll("rect")
      .data(data)
      .enter()
      .append("g");

    BarArray.map((bar, index) => {
      let interIndex = index + 1;
      bars
        .append("rect")
        .attr("class", "bar")
        .attr("y", d => x(d[key[0]]))
        .attr("width", d => {
          let total = 0;
          for (let i = 1; i <= interIndex; i++) {
            total += d[key[i]];
          }
          return total;
        })
        .attr("x", 0)
        .attr("height", x.bandwidth() / barSet)
        .attr("fill", mycolor(color[index + 1]))
        .on("mouseover", function() {
          console.log(index);
          console.log(this.parentNode);
          // console.log(this.parentNode.childNodes[3].childNodes[3]);
          // d3.select(this.parentNode.childNodes[index].attr("class","show"))
        });
      // .on("mouseout",function(){
      //   d3.select(this.parentNode.childNodes[3].attr("class","hide"))
      // })

      let percent = data.map(d => d[key[1]] + d[key[2]] + d[key[3]]);

      if (showText) {
        showPercent
          ? bars
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
              .attr("x", d => {
                let total = 0;
                for (let i = 1; i <= interIndex; i++) {
                  total += d[key[i]];
                }
                return total - textRight;
              })
              .attr(
                "y",
                d => x(d[key[0]]) + x.bandwidth() / barSet - textHeight
              )
          : bars
              .append("g")
              .selectAll("text")
              .data(data)
              .enter()
              .append("text")
              .attr("class", "textClass")
              .text(d => d[key[index + 1]])
              .attr("x", d => {
                let total = 0;
                for (let i = 1; i <= interIndex; i++) {
                  total += d[key[i]];
                }
                return total - textRight;
              })
              .attr(
                "y",
                d => x(d[key[0]]) + x.bandwidth() / barSet - textHeight
              );
      } else return;
    });
  };
  render() {
    const { id } = this.props;
    return <div id={`${id}`} />;
  }
}

export default Horizontal;
