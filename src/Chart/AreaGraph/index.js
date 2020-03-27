import React, { Component } from "react";
import { feature } from "topojson-client";
import { geoMercator, geoPath, geoGraticule10 } from "d3-geo";
import { TAIWAN_MAP } from "./data";
import { Scale, ScaleOutline, Tag, Range, Svg } from "./css";

class AreaGraph extends Component {
  state = {
    worlddata: [],
    graticule: geoGraticule10(),
    show: false,
    name: "",
    top: 0,
    left: 0,
    percent: 0
  };

  // 載入台灣地圖的JSON並轉存至state裡
  componentDidMount() {
    const taiwanMap = TAIWAN_MAP;
    this.setState({
      worlddata: feature(taiwanMap, taiwanMap.objects.countries).features
    });
  }

  // 離開頁面時，移除滑鼠監聽事件
  componentWillUnmount() {
    const id = this.props.clsNa ? this.props.clsNa : "taiwan-map";
    const element = document.getElementById(id);
    element.removeEventListener("mousemove", this.myEfficientFn.bind(this));
  }

  // 縮放大小與置中位置
  projection() {
    return geoMercator()
      .scale(8500)
      .center([121.5, 23.9]);
  }

  // 計算每個地區的顏色
  changeColor = (d, range) => {
    const svgSetup = this.props.svgSetup ? this.props.svgSetup : { rgb: "" };
    const background = svgSetup.rgb ? svgSetup.rgb : "198,153,103";
    const data = this.props.data ? this.props.data : [];
    const selectCity = data.find(k => k.name === d.properties.COUNTYNAME);
    const percent = selectCity ? selectCity.value : 0;
    if (percent >= 0 && percent <= range) {
      return `rgba(${background},0.2)`;
    } else if (percent > range && percent <= range * 2) {
      return `rgba(${background},0.4)`;
    } else if (percent > range * 2 && percent <= range * 3) {
      return `rgba(${background},0.6)`;
    } else if (percent > range * 3 && percent <= range * 4) {
      return `rgba(${background},0.8)`;
    } else {
      return `rgba(${background},1)`;
    }
  };

  // 滑鼠移入事件
  hover = d => {
    const data = this.props.data ? this.props.data : [];
    const selectCity = data.find(k => k.name === d.properties.COUNTYNAME);
    const percent = selectCity ? selectCity.value : 0;
    this.setState({
      show: true,
      name: d.properties.COUNTYNAME,
      percent: percent
    });
    // 偵測滑鼠移動事件
    const id = this.props.clsNa ? this.props.clsNa : "taiwan-map";
    const element = document.getElementById(id);
    element.addEventListener("mousemove", this.myEfficientFn.bind(this));
  };

  // 滑鼠移出事件
  hoverOff = () => {
    this.setState({
      show: false
    });
  };

  // 讓地區的顯示區塊跟著滑鼠移動
  move = event => {
    console.log(event);
    var x = event.offsetX;
    var y = event.offsetY;
    this.setState({
      top: y - 40,
      left: x - 50
    });
  };

  // 優化滑鼠事件
  myEfficientFn = this.debounce(function(event) {
    this.move(event);
  }, 20);

  debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  render() {
    const svgSetup = this.props.svgSetup ? this.props.svgSetup : { rgb: "" };
    const background = svgSetup.rgb ? svgSetup.rgb : "198,153,103";
    const id = this.props.clsNa ? this.props.clsNa : "taiwan-map";
    const range = svgSetup.maxRange
      ? Math.round(svgSetup.maxRange / 5)
      : 100 / 5;
    const rangeLists = [
      { min: 0, max: range, background: `rgba(${background},0.2)` },
      { min: range + 1, max: range * 2, background: `rgba(${background},0.4)` },
      {
        min: range * 2 + 1,
        max: range * 3,
        background: `rgba(${background},0.6)`
      },
      {
        min: range * 3 + 1,
        max: range * 4,
        background: `rgba(${background},0.8)`
      },
      {
        min: range * 4 + 1,
        max: range * 5,
        background: `rgba(${background},1)`
      }
    ];
    return (
      <div
        style={{
          width: svgSetup.width ? svgSetup.width : "100%",
          position: "relative"
        }}
      >
        {this.state.show ? (
          <Tag top={this.state.top} left={this.state.left}>
            {this.state.name}
            <br />
            {svgSetup.maxRange ? (
              <span>{this.state.percent}</span>
            ) : (
              <span>{this.state.percent}%</span>
            )}
          </Tag>
        ) : null}

        <Svg
          className="map-svg"
          width="100%"
          height={svgSetup.height ? svgSetup.height : 600}
          viewBox="0 0 800 600"
          id={id}
        >
          {this.state.worlddata.map((d, i) => (
            <path
              key={`path-${i}`}
              d={geoPath().projection(this.projection())(d)}
              className="country"
              fill={this.changeColor(d, range)}
              stroke="#fff"
              strokeWidth={0.5}
              onMouseOver={this.hover.bind(this, d)}
              onMouseLeave={this.hoverOff}
            />
          ))}
        </Svg>
        {this.props.needScale ? (
          <ScaleOutline>
            <Scale>
              {/* <Range background={`rgba(${background}, 0.2)`}>0-{range}</Range>
            <Range background={`rgba(${background}, 0.4)`}>
              {range + 1}-{range * 2}
            </Range>
            <Range background={`rgba(${background}, 0.6)`}>
              {range * 2 + 1}-{range * 3}
            </Range>
            <Range background={`rgba(${background}, 0.8)`}>
              {range * 3 + 1}-{range * 4}
            </Range>
            <Range background={`rgba(${background}, 1)`}>
              {range * 4 + 1}-{range * 5}
            </Range> */}
              {rangeLists.map((range, index) => (
                <Range key={index} background={range.background}>
                  <div>
                    {range.min} - {range.max}
                  </div>
                </Range>
              ))}
            </Scale>
          </ScaleOutline>
        ) : null}
      </div>
    );
  }
}

export default AreaGraph;
