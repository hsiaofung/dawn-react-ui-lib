import React, { Component } from "react";
import DocumentNavBar from "../../components/DocumentNavBar";
import DashboardContent from "../../components/DashboardContent";
import Row from "../../components/Layout/Row";
import Col from "../../components/Layout/Col";
import {
  NetworkBoard,
  Number,
  SmallTitle,
  RightContent,
  MaxinPeople,
  PercentColor,
  PercentDiv,
  PercentDivTitle,
  WebNumber,
  PercentWidth,
  FansContent,
  StoreScore,
  StoreScore2,
  StoreScore3,
  File,
  FileImage,
  FileNumber,
  TaiwanSection,
  LineSvg,
  MoreEvent,
  PeopleSection,
  PeopleDes,
  PeopleDesGender
} from "./css";
// Ui-Library
import { LineGraph, BarGraph, PieGraph, AreaGraph } from "dawn-react-ui-lib";
import OpitionSuvey from "./OpitonSuvey";

class DocDashboard extends Component {
  render() {
    // const svgSetup = {
    //   width: 920,
    //   height: 350,
    //   pathColor: "rgba(198,153,103,1)",
    //   pathWidth: "2px",
    //   dotColor: "",
    //   dotHoverColor: "rgba(198,153,103,.8)",
    //   dotSize: 4,
    //   dotHoverSize: 20,
    //   dotTextBg: "#fff"
    // };
    const svgSetup = {
      width: 1000,
      height: 350,
      group: [1, 2, 3, 4, 5],
      color: ["#bc937c", "#bc937c", "#bc937c", "#F0F2F4", "#F0F2F4"]
    };
    const svgSetup2 = {
      width: 400,
      height: 200,
      pathColor: "white",
      pathWidth: "2px",
      dotColor: "",
      dotHoverColor: "rgba(198,153,103,.8)",
      dotSize: 4,
      dotHoverSize: 20,
      dotTextBg: "#fff"
    };
    const pieSetup = {
      width: 150,
      height: 150,
      color: ["#4F6861", "#4B5552"],
      stroke: "transparent",
      textColor: "transparent"
    };
    const data = [
      { month: 1, dollar: 30 },
      { month: 2, dollar: 60 },
      { month: 3, dollar: 20 },
      { month: 4, dollar: 60 },
      { month: 5, dollar: 70 },
      { month: 6, dollar: 65 },
      { month: 7, dollar: 90 },
      { month: 8, dollar: 95 },
      { month: 9, dollar: 97 },
      { month: 10, dollar: 130 },
      { month: 11, dollar: 90 },
      { month: 12, dollar: 90 },
      { month: 1, dollar: 600 },
      { month: 2, dollar: 800 },
      { month: 3, dollar: 400 },
      { month: 4, dollar: 150 },
      { month: 5, dollar: 170 },
      { month: 6, dollar: 180 },
      { month: 7, dollar: 210 },
      { month: 8, dollar: 220 },
      { month: 9, dollar: 580 },
      { month: 10, dollar: 600 },
      { month: 11, dollar: 720 },
      { month: 12, dollar: 310 },
      { month: 1, dollar: 600 },
      { month: 2, dollar: 800 },
      { month: 3, dollar: 400 },
      { month: 4, dollar: 150 },
      { month: 5, dollar: 170 },
      { month: 6, dollar: 180 },
      { month: 7, dollar: 210 },
      { month: 8, dollar: 220 },
      { month: 9, dollar: 580 },
      { month: 10, dollar: 600 },
      { month: 11, dollar: 720 },
      { month: 12, dollar: 310 },
      { month: 1, dollar: 600 },
      { month: 2, dollar: 800 },
      { month: 3, dollar: 400 },
      { month: 4, dollar: 150 },
      { month: 5, dollar: 170 },
      { month: 6, dollar: 180 },
      { month: 7, dollar: 210 },
      { month: 8, dollar: 220 },
      { month: 9, dollar: 580 },
      { month: 10, dollar: 600 },
      { month: 11, dollar: 720 },
      { month: 12, dollar: 910 },
      { month: 1, dollar: 600 },
      { month: 2, dollar: 800 },
      { month: 3, dollar: 400 },
      { month: 4, dollar: 550 },
      { month: 5, dollar: 570 },
      { month: 6, dollar: 380 },
      { month: 7, dollar: 210 },
      { month: 8, dollar: 220 },
      { month: 9, dollar: 580 },
      { month: 10, dollar: 600 },
      { month: 11, dollar: 720 },
      { month: 12, dollar: 310 }
    ];
    const data2 = [
      { hour: 0, people: 3.7 },
      { hour: 3, people: 2.7 },
      { hour: 6, people: 5.5 },
      { hour: 9, people: 4.5 },
      { hour: 12, people: 4.9 },
      { hour: 15, people: 5.7 },
      { hour: 18, people: 4.3 },
      { hour: 21, people: 6.7 },
      { hour: 24, people: 5.8 }
    ];
    const pieData = [
      { platform: "iOS", percentage: 68 },
      { platform: "Android", percentage: 32 }
    ];
    const genderData = [
      { gender: "女", money: 77 },
      { gender: "男", money: 23 }
    ];
    const taiwanData = [
      { name: "臺北市", value: 3718 },
      { name: "新北市", value: 4498 },
      { name: "基隆市", value: 1057 },
      { name: "桃園市", value: 2871 },
      { name: "新竹縣", value: 3075 },
      { name: "新竹市", value: 2998 },
      { name: "苗栗縣", value: 254 },
      { name: "臺中市", value: 3957 },
      { name: "彰化縣", value: 1021 },
      { name: "雲林縣", value: 78 },
      { name: "嘉義市", value: 36 },
      { name: "嘉義縣", value: 31 },
      { name: "南投縣", value: 24 },
      { name: "臺南市", value: 2864 },
      { name: "高雄市", value: 3210 },
      { name: "屏東縣", value: 910 },
      { name: "宜蘭縣", value: 845 },
      { name: "花蓮縣", value: 371 },
      { name: "臺東縣", value: 254 },
      { name: "澎湖縣", value: 0 },
      { name: "金門縣", value: 0 },
      { name: "連江縣", value: 1 }
    ];
    const taiwanSvgSetup = {
      maxRange: 4500,
      height: 500
    };
    const classicColor = ["#96A7BC"];
    const data3 = [
      { year: "北部", money: 97, number: 35 },
      { year: "中部", money: 77, number: 22 },
      { year: "南部", money: 75, number: 12 },
      { year: "東部", money: 27, number: 8 }
    ];
    const color = ["rgba(209, 173, 133,1)", "rgba(209, 173, 133,0.5)"];
    return (
      <div>
        <DocumentNavBar />
        <DashboardContent>
          <div style={{ marginTop: "-45px" }}>
            <Row>
              <Col width="60%">
                <NetworkBoard>
                  <h2>單月造訪人次</h2>
                  <style>{`
                  .StackedAreaChart g{
                    transform: translate(-3px,-40px) scale(1.13,2) !important;
                  }
                  `}</style>
                  <LineGraph
                    data={data}
                    svgSetup={svgSetup}
                    needDot
                    clsNa="StackedAreaChart"
                    type="StackedArea"
                    needCoordinate={false}
                    needDot={false}
                  />
                  <Row>
                    <Col width="60%">
                      <SmallTitle>造訪最高人次</SmallTitle>
                      <div
                        style={{
                          borderBottom: "1px solid #E9E8E7",
                          paddingBottom: "15px",
                          marginBottom: "15px"
                        }}
                      >
                        <Row>
                          <Col width="50%">
                            <Number>
                              9981
                              <span>人次</span>
                            </Number>
                          </Col>
                          <Col width="50%">
                            <MaxinPeople>
                              最高人次 <span>9981</span> (5月){" "}
                              <i
                                className="fas fa-caret-up"
                                style={{ color: "#FD696D" }}
                              />{" "}
                              + 57
                            </MaxinPeople>
                            <MaxinPeople>
                              最低人次 <span>3879</span> (11月){" "}
                              <i
                                className="fas fa-caret-down"
                                style={{ color: "#7AC076" }}
                              />{" "}
                              - 20
                            </MaxinPeople>
                          </Col>
                        </Row>
                      </div>
                      <SmallTitle>備註事項</SmallTitle>
                      <MaxinPeople>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt.
                      </MaxinPeople>
                    </Col>
                    <Col width="40%">
                      <SmallTitle>上網週間流量分析</SmallTitle>
                      <WebNumber>
                        745.9
                        <span>Mbps</span>
                      </WebNumber>
                      <PercentDiv>
                        <PercentDivTitle>
                          <span>內部連結</span>
                          <span>70%</span>
                        </PercentDivTitle>
                        <PercentColor>
                          <PercentWidth percent="70%" background="#647D9B" />
                        </PercentColor>
                      </PercentDiv>
                      <PercentDiv>
                        <PercentDivTitle>
                          <span>外部連結</span>
                          <span>30%</span>
                        </PercentDivTitle>
                        <PercentColor>
                          <PercentWidth percent="30%" background="#9E8678" />
                        </PercentColor>
                      </PercentDiv>
                    </Col>
                  </Row>
                </NetworkBoard>
              </Col>
              <Col width="40%">
                <Row>
                  <Col width="50%">
                    <RightContent background="#647D9B">
                      <h3>
                        <i className="fas fa-venus-mars" />
                        會員性別比例
                      </h3>
                      <MoreEvent>
                        <div>
                          <p>女性</p>
                          <p>16,170 (77%)</p>
                        </div>
                        <div>
                          <p>男性</p>
                          <p>4,830 (23%)</p>
                        </div>
                      </MoreEvent>
                      <BarGraph
                        data={genderData}
                        margin={{ top: 40, right: 40, bottom: -25, left: -30 }}
                        svgWidth={350}
                        svgHeight={160}
                        barWidth={0.6}
                        barSet={1}
                        color={classicColor}
                        id={"example1"}
                      />
                    </RightContent>
                  </Col>
                  <Col width="50%">
                    <RightContent background="#5F9B8B">
                      <h3>
                        <i className="fas fa-mobile-alt" />
                        行動裝置系統比例
                      </h3>
                      <MoreEvent>
                        <div>
                          <p>iOS</p>
                          <p>68.4%</p>
                        </div>
                        <div>
                          <p>Android</p>
                          <p>31.6%</p>
                        </div>
                      </MoreEvent>
                      <div style={{ marginTop: "10px" }}>
                        <PieGraph
                          type="pie"
                          clsNa="pie"
                          data={pieData}
                          svgSetup={pieSetup}
                        />
                      </div>
                    </RightContent>
                  </Col>
                </Row>
                <div style={{ marginTop: "15px" }}>
                  <Row>
                    <Col width="50%">
                      <RightContent background="#9E8678">
                        <h3>
                          <i className="fas fa-hand-pointer" />
                          每日平均瀏覽量
                        </h3>
                        <MoreEvent>
                          <div>
                            <p>昨日</p>
                            <p>284</p>
                          </div>
                          <div>
                            <p>過去7日</p>
                            <p>398</p>
                          </div>
                        </MoreEvent>
                        <div
                          style={{
                            textAlign: "center",
                            fontSize: "89px",
                            marginTop: "45px",
                            marginLeft: "-6px"
                          }}
                        >
                          348
                        </div>
                      </RightContent>
                    </Col>
                    <Col width="50%">
                      <RightContent background="#FFC56A">
                        <h3>
                          <i className="fas fa-clock" />
                          上網時段分析
                        </h3>
                        <MoreEvent>
                          <div>
                            <p>昨日最高</p>
                            <p>1859 (20:00-22:00)</p>
                          </div>
                          <div>
                            <p>過去7日最高</p>
                            <p>2798 (20:00-22:00)</p>
                          </div>
                        </MoreEvent>
                        <LineSvg>
                          <LineGraph
                            data={data2}
                            clsNa="line2"
                            svgSetup={svgSetup2}
                          />
                        </LineSvg>
                      </RightContent>
                    </Col>
                  </Row>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <Row>
                    <Col width="100%">
                      <FansContent>
                        <Row>
                          <Col width="40%">
                            <StoreScore>
                              <h2>67</h2>
                              <p>635 | 台中新光門市</p>
                            </StoreScore>
                          </Col>
                          <Col width="60%">
                            <StoreScore2>
                              <button>查看完整資料</button>
                              <p>
                                Lorem ipsum dolor sit amet consectetuer lit.
                              </p>
                              <Row>
                                <Col width="33.33%">
                                  <StoreScore3>
                                    <h3>1,187</h3>
                                    <span>Following</span>
                                  </StoreScore3>
                                </Col>
                                <Col width="33.33%">
                                  <StoreScore3>
                                    <h3>23K</h3>
                                    <span>Followers</span>
                                  </StoreScore3>
                                </Col>
                                <Col width="33.33%">
                                  <StoreScore3>
                                    <h3>287</h3>
                                    <span>Post</span>
                                  </StoreScore3>
                                </Col>
                              </Row>
                            </StoreScore2>
                          </Col>
                        </Row>
                      </FansContent>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <div style={{ marginTop: "15px" }}>
              <Row>
                <Col width="25%">
                  <File background="#FFC56A">
                    <FileImage>
                      <i className="far fa-file" />
                    </FileImage>
                    <FileNumber>
                      <p>278</p>
                      <span>Documents</span>
                    </FileNumber>
                  </File>
                </Col>
                <Col width="25%">
                  <File background="#647D9B">
                    <FileImage>
                      <i className="far fa-file-archive" />
                    </FileImage>
                    <FileNumber>
                      <p>241</p>
                      <span>Zip Files</span>
                    </FileNumber>
                  </File>
                </Col>
                <Col width="25%">
                  <File background="#5F9B8B">
                    <FileImage>
                      <i className="far fa-file-image" />
                    </FileImage>
                    <FileNumber>
                      <p>2890</p>
                      <span>Photos</span>
                    </FileNumber>
                  </File>
                </Col>
                <Col width="25%">
                  <File background="#EB9093">
                    <FileImage>
                      <i className="far fa-file-video" />
                    </FileImage>
                    <FileNumber>
                      <p>73</p>
                      <span>Videos</span>
                    </FileNumber>
                  </File>
                </Col>
              </Row>
            </div>
            <div style={{ marginTop: "15px" }}>
              <Row>
                <Col width="40%">
                  <TaiwanSection>
                    <h2>會員居住所在地分布</h2>
                    <AreaGraph
                      data={taiwanData}
                      clsNa="taiwan-map"
                      svgSetup={taiwanSvgSetup}
                    />
                    <PeopleSection>
                      <BarGraph
                        id="example3"
                        data={data3}
                        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
                        svgWidth={250}
                        svgHeight={250}
                        bar={{ barWidth: 0.5, barSet: 1 }}
                        color={color}
                        showAxis={{ xAxis: true, yAxis: true }}
                        type="horizontal"
                      />
                      <PeopleDes>
                        <PeopleDesGender background="#D1AD85">
                          女
                        </PeopleDesGender>
                        <PeopleDesGender background="#E8D6C2">
                          男
                        </PeopleDesGender>
                      </PeopleDes>
                    </PeopleSection>
                  </TaiwanSection>
                </Col>
                <Col width="60%">
                  <OpitionSuvey />
                </Col>
              </Row>
            </div>
          </div>
        </DashboardContent>
      </div>
    );
  }
}

export default DocDashboard;
