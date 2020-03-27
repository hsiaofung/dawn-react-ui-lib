import React, { Component } from "react";
import * as d3 from "d3";

class ClassicLineGraph extends Component {
  componentDidMount() {
    this.line();
  }
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.line();
    }
  }
  line = () => {
    const { data, clsNa, needDot, svgSetup, needCoordinate } = this.props;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    let width = svgSetup.width - margin.left - margin.right,
      height = svgSetup.height - margin.top - margin.bottom;
    let svgWidth = svgSetup.width;
    let svgHeight = svgSetup.height;

    let keys = Object.keys(data[0]);

    const svg = d3
      .select(`.${clsNa}`)
      .style("position", "relative")
      .style("width", "100%")
      .style("height", "100%")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var x = d3
      .scaleLinear()
      .rangeRound([0, width])
      .domain(d3.extent(data, d => d[keys[0]]));
    var y = d3
      .scaleLinear()
      .rangeRound([height, 0])
      .domain([0, d3.max(data, d => d[keys[1]])]);

    var line = d3
      .line()
      .x(function(d) {
        let keys = Object.keys(d);
        return x(d[keys[0]]);
      })
      .y(function(d) {
        let keys = Object.keys(d);
        return y(d[keys[1]]);
      });

    const xAxis = g =>
      g
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(
          d3
            .axisBottom(x)
            .ticks(data.length)
            .tickFormat(d3.format("d"))
        )
        .append("text")
        .attr("transform", "translate(" + width + ",0)")
        .attr("fill", "#000")
        .attr("dy", "-0.5em")
        .attr("font-size", "12px")
        .text(keys[0]);

    const yAxis = g => {
      g.call(d3.axisLeft(y).ticks(data.length))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("dy", "1.25em")
        .attr("font-size", "12px")
        .text(keys[1]);
    };
    if (needCoordinate) {
      svg.append("g").call(xAxis);
      svg.append("g").call(yAxis);
    }

    let path = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr(
        "stroke",
        svgSetup && svgSetup.pathColor ? svgSetup.pathColor : "#bc937c"
      )
      .attr("d", line);

    let totalLength = path.node().getTotalLength();

    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0)
      .attr(
        "stroke-width",
        svgSetup && svgSetup.pathWidth ? svgSetup.pathWidth : ""
      );

    let dotTextDiv = d3
      .select(`.${clsNa}`)
      .append("div")
      .attr("class", "tooltip")
      .style("height", "16px")
      .style("width", "60px")
      .style("position", "absolute")
      .style(
        "background",
        svgSetup && svgSetup.dotTextBg
          ? svgSetup.dotTextBg
          : "rgba(198,153,103,0.2)"
      )
      .style("margin-left", "5%")
      .style("margin-top", "5px")
      .style("text-align", "center")
      .style("opacity", 0);

    if (needDot) {
      svg
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("r", svgSetup && svgSetup.dotSize ? svgSetup.dotSize : 5)
        .attr("cx", function(d) {
          return x(d[keys[0]]);
        })
        .attr("cy", function(d) {
          return y(d[keys[1]]);
        })
        .attr(
          "fill",
          svgSetup && svgSetup.dotColor
            ? svgSetup.dotColor
            : "rgba(198,153,103,1)"
        )
        .attr("opacity", ".6")
        .on("mouseover", function(d) {
          d3.select(this)
            .transition()
            .duration(100)
            .style(
              "fill",
              svgSetup && svgSetup.dotHoverColor
                ? svgSetup.dotHoverColor
                : "rgba(198,153,103,.8)"
            )
            .attr(
              "r",
              svgSetup && svgSetup.dotHoverSize ? svgSetup.dotHoverSize : 8
            );
          dotTextDiv
            .transition()
            .duration(200)
            .style("opacity", 0.8);
          dotTextDiv
            .html(d[keys[1]])
            .style("left", x(d[keys[0]]) + "px")
            .style("top", y(d[keys[1]]) + "px");
        })
        .on("mouseout", function(d) {
          d3.select(this)
            .transition()
            .duration(100)
            .style(
              "fill",
              svgSetup && svgSetup.dotColor
                ? svgSetup.dotColor
                : "rgba(198,153,103,1)"
            )
            .attr("r", svgSetup && svgSetup.dotSize ? svgSetup.dotSize : 5);
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

export default ClassicLineGraph;
