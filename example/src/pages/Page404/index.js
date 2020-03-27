import React, { Component } from "react";
import { Link } from "react-router-dom";
import GettingStartedNavBar from "../../components/GettingStartedNavBar";
import styled from "styled-components";
import Row from "../../components/Layout/Row";
import Col from "../../components/Layout/Col";
import errorImage from "./faint.svg";
import { HOME_PAGE, DOC } from "../../constants";

const Div = styled.div`
  padding-top: 35px;
  padding-left: 255px;
  min-height: calc(100vh - 60px);
  background: #eae8e3;
`;

const Warning = styled.div`
  padding: 35px;
  color: #333333;
  h1 {
    font-size: 80px;
  }
`;

const Warning2 = styled(Warning)`
  text-align: center;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.25;
`;

const ErrorCode = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #999;
  span {
    font-size: 30px;
  }
`;

const Help = styled.div`
  h3 {
    font-size: 24px;
    font-weight: bold;
  }
  a {
    color: #ffb06a;
    font-size: 18px;
    font-weight: bold;
    &:hover {
      opacity: 0.5;
    }
  }
`;

class Page404 extends Component {
  render() {
    return (
      <div>
        <GettingStartedNavBar />
        <Div>
          <Row>
            <Col width="60%">
              <Warning>
                <h1>Oops!</h1>
                <Text>
                  We can't seem to find the page you're <br /> looking for.
                </Text>
                <ErrorCode>
                  Error Code : <span>404</span>
                </ErrorCode>
                <Help>
                  <h3>Here are some helpful links instead:</h3>
                  <Link to={`${HOME_PAGE}`}>HOME</Link>
                  <br />
                  <Link to={`${HOME_PAGE}/${DOC}/alert`}>DOCUMENT</Link>
                  <br />
                  <Link to={`${HOME_PAGE}/example`}>EXAMPLE</Link>
                  <br />
                  <Link to={`${HOME_PAGE}/${DOC}/dashboard`}>DASHBOARD</Link>
                </Help>
              </Warning>
            </Col>
            <Col width="40%">
              <Warning2>
                <img
                  style={{ maxWidth: "300px", marginTop: "45px" }}
                  src={errorImage}
                  alt=""
                />
              </Warning2>
            </Col>
          </Row>
        </Div>
      </div>
    );
  }
}

export default Page404;
