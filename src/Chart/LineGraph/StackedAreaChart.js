import React, { Component } from "react";
import * as d3 from "d3";

class StackedAreaChart extends Component {
  componentDidMount() {
    this.line();
  }
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.line();
    }
  }

  line = () => {
    const { clsNa, data, svgSetup, needCoordinate, needDot } = this.props;
    let keys = Object.keys(data[0]);
    var margin = { top: 61, right: 140, bottom: 101, left: 50 },
      width = svgSetup.width - margin.left - margin.right,
      height = svgSetup.height - margin.top - margin.bottom;

    var svg = d3
      .select(`.${clsNa}`)
      .style("position", "relative")
      .style("width", "100%")
      .style("height", "100%")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var sumstat = d3 //資料分類
      .nest()
      .key(function(d) {
        return d[keys[0]];
      })
      .entries(data);

    var mygroup = svgSetup && svgSetup.group ? svgSetup.group : []; // list of group names

    var stackedData = d3
      .stack()
      .keys(mygroup)
      .value(function(d, key) {
        return d.values[key - 1][keys[1]];
      })(sumstat);
    var x = d3
      .scaleLinear()
      .domain(
        d3.extent(data, function(d) {
          return d[keys[0]];
        })
      )
      .range([0, width]);

    var y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, function(d) {
          return +d[keys[1]];
        }) * 5
      ])
      .range([height, 0]);

    if (needCoordinate) {
      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(
          d3.axisBottom(x).ticks(
            d3.max(data, function(d) {
              return d[keys[0]];
            })
          )
        );
      // Add Y axis
      svg.append("g").call(d3.axisLeft(y));
    }
    // color palette
    var color = d3
      .scaleOrdinal()
      .domain(mygroup)
      .range(
        svgSetup && svgSetup.color
          ? svgSetup.color
          : [
              "#bc937c",
              "#4a5c68",
              "#E9E7E8",
              "#111111",
              "rgba(198,153,103,0.6)",
              "rgba(198,153,103,0.5)",
              "rgba(198,153,103,0.4)",
              "rgba(198,153,103,0.3)",
              "rgba(198,153,103,0.2)",
              "rgba(198,153,103,0.1)"
            ]
      );
    // Show the areas
    svg
      .selectAll("mylayers")
      .data(stackedData)
      .enter()
      .append("path")
      .style("fill", function(d) {
        name = mygroup[d.key - 1];
        return color(name);
      })
      .attr(
        "d",
        d3
          .area()
          .x(function(d, i) {
            return x(d.data.key);
          })
          .y0(function(d) {
            return y(d[0]);
          })
          .y1(function(d) {
            return y(d[1]);
          })
      );

    let dotTextDiv = d3
      .select(`.${clsNa}`)
      .append("div")
      .attr("class", "tooltip")
      .style("height", "16px")
      .style("width", "60px")
      .style("position", "absolute")
      .style("background", "white")
      .style("margin-left", "5%")
      .style("margin-top", "5px")
      .style("text-align", "center")
      .style("opacity", 0);
    if (needDot) {
      svg
        .selectAll("dot")
        .data(stackedData)
        .enter()
        .append("g")
        .style("fill", function(d) {
          name = mygroup[d.key - 1];
          return color(name);
        })
        .selectAll("circle")
        .data(d => d)
        .enter()
        .append("g")
        .attr("class", "circle")
        .append("circle")
        .attr("r", 5)
        .style("opacity", 0.6)
        .style("stroke-width", "2")
        .attr("cx", (d, i) => {
          return x(i + 1);
        })
        .attr("cy", d => {
          return y(d[1]);
        })
        .on("mouseover", function(d, i) {
          d3.select(this)
            .style("opacity", 0.8)
            .attr("r", 8);
          dotTextDiv
            .transition()
            .duration(200)
            .style("opacity", 0.8);
          dotTextDiv
            .html(d[1])
            .style("left", x(i + 1) + "px")
            .style("top", y(d[1]) + 30 + "px");
        })
        .on("mouseout", function(d) {
          d3.select(this)
            .style("opacity", 0.6)
            .attr("r", 5);

          dotTextDiv
            .transition()
            .duration(500)
            .style("opacity", 0);
        });
    }
  };

  render() {
    const { clsNa } = this.props;
    return <div className={clsNa} />;
  }
}

export default StackedAreaChart;
