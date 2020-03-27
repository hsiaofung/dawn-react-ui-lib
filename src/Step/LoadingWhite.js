import React from "react";
import LoadingGif from "./ajax-loader.gif";
import * as Style from "./css";

class LoadingWhite extends React.Component {
  render() {
    if (!this.props.show) return null;
    return (
      <Style.loadingContent>
        <Style.loadingCenter>
          <img src={LoadingGif} />
        </Style.loadingCenter>
      </Style.loadingContent>
    );
  }
}

export default LoadingWhite;
