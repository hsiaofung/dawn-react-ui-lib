import React, { Component } from "react";
import Zoom from "react-img-zoom";
import Slider from "react-slick";
import SliderCss from "./css/SliderSet.css";
import "./css/SliderSet.css";
import closeBtn from "./close.svg";
import playBtn from "./play-btn-web.png";
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';

export class SliderSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      nav3: null,
      openVideoDialog: false,
      showLightBox: false,
      LightBoxId: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.openVideo = this.openVideo.bind(this);
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      nav3: this.slider3
    });
  }
  handleClick = e => {
    this.slider1.slickGoTo(e);
  };
  openVideo = () => {
    this.setState({
      openVideoDialog: true
    });
    if (this.state.openVideoDialog) {
      this.videoDialog.load();
      this.videoDialog.play();
    }
  };
  closeVideo = () => {
    this.setState({
      openVideoDialog: false
    });
  };
  showLightBox = id => {
    this.setState({
      showLightBox: true,
      LightBoxId: id
    });
  };
  mobileOpenVideo = () => {
    this.setState({
      openVideoDialog: true
    });
    if (this.state.openVideoDialog) {
      this.videoDialog.load();
      this.videoDialog.play();
    }
  };

  render() {
    const { dots, infinite } = this.props;
    const focusSettings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite,
      dots,
      arrow: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const thumbnailSettings = {
      focusOnSelect: true,
      adaptiveHeight: true,
      arrows: true,
      dots: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0
    };
    const BigimgList = () => {
      var imgListItem = this.props.ImageData.images;
      return imgListItem.map((productImg, id) => (
        <div className={SliderCss.imgDiv} key={id}>
          {this.props.showZoom ? (
            <Zoom
              img={productImg.zoomInUrl}
              key={productImg.zoomInUrl}
              zoomScale={2}
              height={594}
              width={680}
              transitionTime={0.5}
            />
          ) : (
            <div style={{ margin: "0 auto" }}>
              <img
                style={{ maxWidth: "100%" }}
                src={productImg.displayUrl}
                alt=""
                key={productImg.displayUrl}
              />
            </div>
          )}
        </div>
      ));
    };
    const smallImgList = () => {
      if (!this.props.ImageData.images) return;
      var imgListItem = this.props.ImageData.images;
      return imgListItem.map((productImg, id) => (
        <div className={SliderCss.imgSize2} key={id}>
          <img
            style={{ maxWidth: "100%", margin: "0 auto" }}
            src={`${productImg.zoomOutUrl}`}
            alt=""
            key={productImg.zoomOutUrl}
            onClick={() => this.handleClick(id)}
          />
        </div>
      ));
    };

    const VideoPlayBtn = () => {
      const productData = this.props.ImageData.images;
      const VideoItem = productData.video;
      if (!VideoItem) return;
      return (
        <button
          onClick={this.mobileOpenVideo.bind(this)}
          style={{
            background: "transparent",
            border: "0",
            fontSize: "14px",
            margin: "43px auto 0px"
          }}
          className={SliderCss.mobileBtn}
        >
          <div className={SliderCss.videoMobileBtn}>
            <div className={SliderCss.BtnImg} />
            <span className={SliderCss.BtnImgText}>播放</span>
          </div>
        </button>
      );
    };
    const VideoDialog = () => {
      if (this.state.openVideoDialog)
        return (
          <div className={SliderCss.videoDialog}>
            <video
              className={SliderCss.videoItem}
              ref={videoDialog => (this.videoDialog = videoDialog)}
              autoPlay
            >
              <source src={this.props.ImageData.video} type="video/mp4" />
            </video>
            <div
              className="videoCloseBtn"
              onClick={this.closeVideo.bind(this)}
            />
          </div>
        );
    };

    return (
      <div className={SliderCss.sliderContainer}>
        <style>
          {`
          .videoCloseBtn{
            background: url(${closeBtn});
            position: absolute;
            top: 0;
            right: 0;
            width: 30px;
            height: 30px;
            background-size: 20px 20px;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
            z-index: 99999;
          }
          .imageSize2VideoDiv {
            position: relative;
            left: 10%;
            max-width: 96px !important;
            height: 96px;
            cursor: pointer;
            transition: border 0.5s;
          }
          .imageSize2VideoDiv::after {
            content: "";
            display: block;
            width: 40px;
            height: 40px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -20px;
            margin-left: -20px;
            background: url(${playBtn}) no-repeat center center;
            background-size: 35px 35px;
            pointer-events: none;
            z-index: 9999;
          }
          .imageSize2VideoDiv:focus {
            border: 1px solid #c69967;
            outline: 0;
          }
          .slick-prev {
            left: -15px !important;
          }
          .small-slider .slick-active  {
            width:103px !important;
          }
        `}
        </style>
        <div
          className={SliderCss.sliderDiv}
          className={SliderCss.slickPrev}
          style={{ position: "relative" }}
        >
          {VideoDialog()}

          <Slider
            {...focusSettings}
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            className={SliderCss.slider_web}
          >
            {BigimgList()}
          </Slider>
          <div>
            <div className="small-slider">
              <Slider
                {...thumbnailSettings}
                ref={slider => (this.slider2 = slider)}
              >
                {this.props.showSmallImg ? smallImgList() : ""}
                {this.props.showSmallImg ? (
                  this.props.showVideo ? (
                    <div
                      className={SliderCss.imageSize2VideoDiv}
                      className="imageSize2VideoDiv"
                      onClick={this.openVideo}
                    >
                      <div className={SliderCss.imgSize2}>
                        <img
                          src={`${this.props.ImageData.images[0].displayUrl}`}
                          alt=""
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </Slider>
              {VideoPlayBtn()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderSet;
