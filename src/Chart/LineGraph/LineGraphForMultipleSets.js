import React, { Component } from "react";
import * as d3 from "d3";

class LineGraphForMultipleSets extends Component {
  componentDidMount() {
    this.line();
  }
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.line();
    }
  }
  line = () => {
    const { data, clsNa, svgSetup, needDot, needCoordinate } = this.props;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    let width = svgSetup.width - margin.left - margin.right,
      height = svgSetup.height - margin.top - margin.bottom;
    let svgWidth = svgSetup.width;
    let svgHeight = svgSetup.height;

    let keys = Object.keys(data[0]);
    var LvTwoMax = 0;
    for (var i = 0; i < data.length; i++) {
      var currentLvTwo = d3.max(data[i][keys[1]], function(d) {
        let keysForLv2 = Object.keys(d);
        return d[keysForLv2[1]];
      });
      if (currentLvTwo > LvTwoMax) {
        LvTwoMax = currentLvTwo;
      }
    }

    var LvTwoForXMax = 0;
    var LvTwoForXLow = 0;
    for (var i = 0; i < data.length; i++) {
      var currentLvTwoForXMax = d3.max(data[i][keys[1]], function(d) {
        let keysForLv2 = Object.keys(d);
        return d[keysForLv2[0]];
      });
      var currentLvTwoForXLow = d3.min(data[i][keys[1]], function(d) {
        let keysForLv2 = Object.keys(d);
        return d[keysForLv2[0]];
      });
      if (currentLvTwoForXMax > LvTwoForXMax) {
        LvTwoForXMax = currentLvTwoForXMax;
      }
      if (currentLvTwoForXLow > LvTwoForXLow) {
        LvTwoForXLow = currentLvTwoForXLow;
      }
    }

    const svg = d3
      .select(`.${clsNa}`)
      .style("position", "relative")
      .style("width", "100%")
      .style("height", "100%")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight + 30)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var x = d3
      .scaleLinear()
      .rangeRound([0, width])
      .domain([LvTwoForXLow, LvTwoForXMax]);
    var y = d3
      .scaleLinear()
      .rangeRound([height, 0])
      .domain([0, LvTwoMax]);

    var line = d3
      .line()
      .x(function(d) {
        let keysForLv2 = Object.keys(d);
        return x(d[keysForLv2[0]]);
      })
      .y(function(d) {
        let keysForLv2 = Object.keys(d);
        return y(d[keysForLv2[1]]);
      });
    let color = d3.scaleOrdinal(
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
    svg
      .selectAll("path")
      .data(data)
      .enter()
      .append("path")
      .attr("d", function(d) {
        return line(d[keys[1]]);
      })
      .attr("fill", "none")
      .attr("stroke", function(d, i) {
        return color(i);
      });
    const xAxis = g =>
      g
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(d3.format("d")));
    const yAxis = g => {
      g.call(d3.axisLeft(y));
    };

    if (needCoordinate) {
      svg.append("g").call(xAxis);
      svg.append("g").call(yAxis);
    }

    svg
      .selectAll(".mark")
      .data(data)
      .enter()
      .append("path")
      .attr(
        "d",
        d3.symbol().type(function(d, i) {
          return d3.symbols[3];
        })
      )
      .attr("transform", function(d, i) {
        return (
          "translate(" + (margin.right + i * 60) + ", " + (height + 40) + ")"
        );
      })
      .attr("fill", function(d, i) {
        return color(i);
      });
    svg
      .selectAll(".markText")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "markText")
      .attr("transform", function(d, i) {
        return (
          "translate(" +
          (margin.right + 10 + i * 60) +
          ", " +
          (height + 45) +
          ")"
        );
      })
      .attr("font-size", 12)
      .text(function(d) {
        return d[keys[0]];
      });
    let dotTextDiv = d3
      .select(`.${clsNa}`)
      .append("div")
      .attr("class", "tooltip")
      .style("height", "16px")
      .style("width", "60px")
      .style("position", "absolute")
      .style("margin-left", "5%")
      .style("margin-top", "5px")
      .style("text-align", "center")
      .style("opacity", 0);
    if (needDot) {
      svg
        .selectAll("dot")
        .data(data)
        .enter()
        .append("g")
        .style("fill", (d, i) => color(i))
        .selectAll("circle")
        .data(d => d[keys[1]])
        .enter()
        .append("g")
        .attr("class", "circle")
        .append("circle")
        .attr("cx", d => {
          let keysForLv2 = Object.keys(d);
          return x(d[keysForLv2[0]]);
        })
        .attr("cy", d => {
          let keysForLv2 = Object.keys(d);
          return y(d[keysForLv2[1]]);
        })
        .attr("r", 5)
        .style("opacity", 0.6)
        .on("mouseover", function(d) {
          const keysForLv2 = Object.keys(d);
          d3.select(this)
            .transition()
            .duration(100)
            .attr(
              "r",
              svgSetup && svgSetup.dotHoverSize ? svgSetup.dotHoverSize : 8
            );
          dotTextDiv
            .transition()
            .duration(200)
            .style("opacity", 0.8);
          dotTextDiv
            .html(d[keysForLv2[1]])
            .style("left", x(d[keysForLv2[0]]) + "px")
            .style("top", y(d[keysForLv2[1]]) + "px");
        })
        .on("mouseout", function(d) {
          d3.select(this)
            .transition()
            .duration(100)
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

export default LineGraphForMultipleSets;
