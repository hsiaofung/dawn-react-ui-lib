import React, { Component } from "react";
import ClassicLineGraph from "./ClassicLineGraph";
import LineGraphForMultipleSets from "./LineGraphForMultipleSets";
import StackedAreaChart from "./StackedAreaChart";

class LineGraph extends Component {
  render() {
    const { data, clsNa, needDot, svgSetup, type, needCoordinate } = this.props;
    return (
      (type === "classic" && (
        <ClassicLineGraph
          clsNa={clsNa}
          data={data}
          needDot={needDot}
          svgSetup={svgSetup}
          needCoordinate={needCoordinate}
        />
      )) ||
      (type === "MultipleLineGraph" && (
        <LineGraphForMultipleSets
          clsNa={clsNa}
          data={data}
          needDot={needDot}
          svgSetup={svgSetup}
          needCoordinate={needCoordinate}
        />
      )) ||
      (type === "StackedArea" && (
        <StackedAreaChart
          clsNa={clsNa}
          data={data}
          needDot={needDot}
          svgSetup={svgSetup}
          needCoordinate={needCoordinate}
        />
      ))
    );
  }
}
LineGraph.defaultProps = {
  type: "classic",
  needCoordinate: true,
  needDot: false
};

export default LineGraph;
