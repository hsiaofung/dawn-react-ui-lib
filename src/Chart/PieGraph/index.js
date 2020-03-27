import React, { Component } from "react";
import * as d3 from "d3";

export class PieGraph extends Component {
  componentDidMount() {
    const { type } = this.props;
    type
      ? type === "pie"
        ? this.pie()
        : type === "linePie"
        ? this.pieLine()
        : this.percentage()
      : this.percentage();
  }
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      const { type } = this.props;
      type
        ? type === "pie"
          ? this.pie()
          : type === "linePie"
          ? this.pieLine()
          : this.percentage()
        : this.percentage();
    }
  }
  //判定是否用有線圓餅圖
  percentage = async () => {
    const { data } = this.props;
    let total = 0;
    await data.forEach(item => {
      total = total + item.percentage;
    });

    for (let i = 0; i < data.length; i++) {
      let percentage = Math.round((data[i].percentage / total) * 100);
      if (data.length >= 8 || percentage <= 15) {
        this.pieLine();
        break;
      } else {
        this.pie();
      }
    }
  };
  //一般圓餅圖
  pie = () => {
    const { clsNa, data, svgSetup } = this.props;
    d3.select(`.${clsNa} svg g`).remove();
    let margin = { top: 10, right: 10, bottom: 10, left: 10 },
      svgWidth =
        svgSetup && svgSetup.width
          ? svgSetup.width
          : 200 - margin.right - margin.left,
      svgHeight =
        svgSetup && svgSetup.height
          ? svgSetup.height
          : 200 - margin.top - margin.bottom,
      stateRadius = Math.min(svgWidth, svgHeight) / 2;

    let color = d3.scaleOrdinal(
      svgSetup && svgSetup.color
        ? svgSetup.color
        : [
            "rgba(198,153,103,1)",
            "rgba(198,153,103,0.9)",
            "rgba(198,153,103,0.8)",
            "rgba(198,153,103,0.7)",
            "rgba(198,153,103,0.6)",
            "rgba(198,153,103,0.5)",
            "rgba(198,153,103,0.4)",
            "rgba(198,153,103,0.3)",
            "rgba(198,153,103,0.2)",
            "rgba(198,153,103,0.1)"
          ]
    );

    let svg = d3
      .select(`.${clsNa} svg`)
      .attr("width", svgWidth)
      .attr("height", svgHeight)
      .append("g")
      .attr("transform", "translate(" + stateRadius + "," + stateRadius + ")");

    let pie = d3 //扇形面積
      .pie()
      .sort(null)
      .value(function(d) {
        return d.percentage;
      });

    let path = d3
      .arc() // 弧
      .outerRadius(
        svgSetup && svgSetup.radius
          ? svgSetup.radius.outerRadius === 0
            ? 0
            : svgSetup.radius.outerRadius
          : stateRadius
      ) // 外圈大小
      .innerRadius(
        svgSetup && svgSetup.radius
          ? svgSetup.radius.innerRadius === 0
            ? 0
            : svgSetup.radius.innerRadius
          : 0
      ); // 內圈大小

    let g = svg // 扇形
      .selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g"); //資料筆數先進來，再append g，所以筆數會相等

    g.append("path") // 內圈到外圈之間的範圍塗滿顏色
      .attr("stroke", svgSetup && svgSetup.stroke ? svgSetup.stroke : "#fff")
      .attr("d", path)
      .attr("fill", function(d) {
        // 照百分比填滿顏色，不然只會有一個顏色
        return color(d.data.percentage);
      })
      .transition()
      .ease(d3.easeLinear)
      .duration(svgSetup && svgSetup.duration ? svgSetup.duration : 500)
      .attrTween("d", pieTween);
    function pieTween(b) {
      b.innerRadius = 0;
      let i = d3.interpolate({ startAngle: 0, endAngle: 0 }, b);
      return function(t) {
        return path(i(t));
      };
    }
    let labelArc = d3
      .arc()
      .outerRadius(stateRadius - (stateRadius * 2) / 5)
      .innerRadius(stateRadius - (stateRadius * 2) / 5);

    g.append("text")
      .transition() //位置有差
      .ease(d3.easeLinear)
      .duration(svgSetup && svgSetup.duration ? svgSetup.duration : 500)
      .attr("transform", function(d) {
        return "translate(" + labelArc.centroid(d) + ")";
      })
      .attr("fill", svgSetup.textColor)
      .attr("text-anchor", "middle")
      .attr("dy", "0em")
      .text(function(d) {
        let keys = Object.keys(d.data);
        return d.data[keys[0]];
      });
    let total = 0;
    data.forEach(item => {
      total = total + item.percentage;
    });
    // g.append("text")
    //   .transition()
    //   .ease(d3.easeLinear)
    //   .duration(svgSetup && svgSetup.duration ? svgSetup.duration : 500)
    //   .attr("transform", function(d) {
    //     return "translate(" + labelArc.centroid(d) + ")";
    //   })
    //   .attr("fill", svgSetup.textColor)
    //   .attr("text-anchor", "middle")
    //   .attr("dy", "1em")
    //   .text(function(d) {
    //     let keys = Object.keys(d.data);
    //     return ((d.data[keys[1]] / total) * 100).toFixed(1) + "%";
    //   });
  };
  //有線圓餅圖
  pieLine = () => {
    const { clsNa, data, svgSetup } = this.props;
    d3.select(`.${clsNa} svg g`).remove();
    let margin = { top: 10, right: 10, bottom: 10, left: 10 },
      svgWidth =
        svgSetup && svgSetup.width
          ? svgSetup.width
          : 200 - margin.right - margin.left,
      svgHeight =
        svgSetup && svgSetup.height
          ? svgSetup.height
          : 200 - margin.top - margin.bottom,
      stateRadius = Math.min(svgWidth, svgHeight) / 2;

    let color = d3.scaleOrdinal(
      svgSetup && svgSetup.color ? svgSetup.color : d3.schemeCategory10
      // [
      //     "rgba(198,153,103,1)",
      //     "rgba(198,153,103,0.9)",
      //     "rgba(198,153,103,0.8)",
      //     "rgba(198,153,103,0.7)",
      //     "rgba(198,153,103,0.6)",
      //     "rgba(198,153,103,0.5)",
      //     "rgba(198,153,103,0.4)",
      //     "rgba(198,153,103,0.3)",
      //     "rgba(198,153,103,0.2)",
      //     "rgba(198,153,103,0.1)"
      //   ]
    );

    let svg = d3
      .select(`.${clsNa} svg`)
      .attr("width", svgWidth * 2)
      .attr("height", svgHeight * 1.5)
      .append("g")
      .attr(
        "transform",
        "translate(" +
          (stateRadius + svgWidth / 2) +
          "," +
          (stateRadius + stateRadius / 2) +
          ")"
      );

    let pie = d3
      .pie()
      .sort(null)
      .value(function(d) {
        return d.percentage;
      });

    let slices = svg.append("g");
    let labels = svg
      .append("g")
      .selectAll("text")
      .data(pie(data))
      .enter();
    let lines = svg
      .append("g")
      .selectAll("polyline")
      .data(pie(data))
      .enter();

    let path = d3
      .arc()
      .outerRadius(
        svgSetup && svgSetup.radius
          ? svgSetup.radius.outerRadius === 0
            ? 0
            : svgSetup.radius.outerRadius
          : stateRadius
      )
      .innerRadius(
        svgSetup && svgSetup.radius
          ? svgSetup.radius.innerRadius === 0
            ? 0
            : svgSetup.radius.innerRadius
          : 0
      );

    function pieTween(b) {
      b.innerRadius = 0;
      let i = d3.interpolate({ startAngle: 0, endAngle: 0 }, b);
      return function(t) {
        return path(i(t));
      };
    }
    slices
      .selectAll("arc")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("stroke", svgSetup && svgSetup.stroke ? svgSetup.stroke : "#fff")
      .attr("d", path)
      .attr("fill", function(d) {
        return color(d.data.percentage);
      })
      .transition()
      .ease(d3.easeLinear)
      .duration(svgSetup && svgSetup.duration ? svgSetup.duration : 500)
      .attrTween("d", pieTween);

    // let labelArc = d3
    //   .arc()
    //   .outerRadius(stateRadius - (stateRadius * 2) / 7)
    //   .innerRadius(stateRadius - (stateRadius * 2) / 5);

    let startPoint = d3
      .arc()
      .outerRadius(stateRadius)
      .innerRadius(stateRadius);

    let midPoint = d3
      .arc()
      .outerRadius(stateRadius * 1.1)
      .innerRadius(stateRadius * 1.1);

    function midAngle(d) {
      return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }
    lines
      .append("polyline")
      .attr("fill", "none")
      .attr("stroke", "#000")
      .attr("points", d => {
        let mid = midAngle(d) < Math.PI ? 1 : -1;
        let lastPoint = midPoint.centroid(d);
        if (mid === 1) {
          lastPoint = [
            midPoint.centroid(d)[0] + svgWidth / 5,
            midPoint.centroid(d)[1]
          ];
        } else {
          lastPoint = [
            midPoint.centroid(d)[0] - svgWidth / 5,
            midPoint.centroid(d)[1]
          ];
        }
        return [startPoint.centroid(d), midPoint.centroid(d), lastPoint];
      });

    labels
      .append("text")
      .attr("transform", function(d) {
        let mid = midAngle(d) < Math.PI ? 1 : -1;
        let lastPoint = midPoint.centroid(d);
        if (mid === 1) {
          lastPoint = [
            midPoint.centroid(d)[0] + svgWidth / 5,
            midPoint.centroid(d)[1] + svgHeight / 80
          ];
        } else {
          lastPoint = [
            midPoint.centroid(d)[0] - svgWidth / 5,
            midPoint.centroid(d)[1] + svgHeight / 80
          ];
        }
        return "translate(" + lastPoint + ")";
      })
      .attr("fill", svgSetup.textColor)
      .attr("text-anchor", "middle")
      .attr("dy", "1em")
      .text(function(d) {
        let keys = Object.keys(d.data);
        return d.data[keys[0]];
      });
    let total = 0;
    data.forEach(item => {
      total = total + item.percentage;
    });
    // labels
    //   .append("text")
    //   .attr("transform", function(d) {
    //     let mid = midAngle(d) < Math.PI ? 1 : -1;
    //     let lastPoint = midPoint.centroid(d);
    //     if (mid === 1) {
    //       lastPoint = [
    //         midPoint.centroid(d)[0] + svgWidth / 4.8,
    //         midPoint.centroid(d)[1] + svgHeight / 80
    //       ];
    //     } else {
    //       lastPoint = [
    //         midPoint.centroid(d)[0] - svgWidth / 4.8,
    //         midPoint.centroid(d)[1] + svgHeight / 80
    //       ];
    //     }
    //     return "translate(" + lastPoint + ")";
    //   })
    //   .attr("fill", svgSetup.textColor)
    //   .attr("text-anchor", "middle")
    //   .attr("dy", "2em")
    //   .text(function(d) {
    //     let keys = Object.keys(d.data);
    //     return ((d.data[keys[1]] / total) * 100).toFixed(1) + "%";
    //   });
  };
  render() {
    const { clsNa } = this.props;
    return (
      <div className={clsNa} style={{ textAlign: "center" }}>
        <svg />
      </div>
    );
  }
}

export default PieGraph;
