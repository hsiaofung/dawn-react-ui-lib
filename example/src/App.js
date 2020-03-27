import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DOC, HOME_PAGE } from "./constants";
// web component
import Header from "./components/Header";
import GettingStartedNavBar from "./components/GettingStartedNavBar";
import DocumentNavBar from "./components/DocumentNavBar";
// pages
import Example from "./pages/Example";
import DocCheckbox from "./pages/DocCheckbox";
import DocButton from "./pages/DocButton";
import DocInput from "./pages/DocInput";
import DocSelect from "./pages/DocSelect";
import DocForm from "./pages/DocForm";
import DocStep from "./pages/DocStep";
import DocSubMenu from "./pages/DocSubMenu";
import DocSliderSet from "./pages/DocSliderSet";
import MainContent from "./components/MainContent";
import DocDialog from "./pages/DocDialog";
import DocSearchBar from "./pages/DocSearchbar";
import DocRadio from "./pages/DocRadio";
import DocNavBar from "./pages/DocNavBar";
import DocCard from "./pages/DocCard";
import DocFooter from "./pages/DocFooter";
import Page404 from "./pages/Page404";
import DocHeader from "./pages/DocHeader";
import Introduction from "./pages/Introduction";
import DocChartPie from "./pages/DocChartPie";
import DocChartBar from "./pages/DocChartBar";
import DocChartLine from "./pages/DocChartLine";
import DocChartArea from "./pages/DocChartArea";
import DocDashboard from "./pages/DocDashBoard";
import DocFullBar from "./pages/DocFullBar";
import DocLayout from "./pages/DocLayout";
// prism css
import "./css/prism.css";
import "prismjs";
import "prismjs/components/prism-jsx.min";
//slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyleAndTheme = () => {
  return (
    <div>
      <GettingStartedNavBar />
      <MainContent>
        <h1>StyleAndTheme</h1>
      </MainContent>
    </div>
  );
};

const DocAlert = () => {
  return (
    <div>
      <DocumentNavBar />
      <MainContent>
        <h1>Alert</h1>
      </MainContent>
    </div>
  );
};

export default class App extends Component {
  render() {
    // Getting Started 分支頁
    const routes = [
      {
        path: `${HOME_PAGE}/`,
        exact: true,
        main: props => <Introduction {...props} />
      },
      {
        path: `${HOME_PAGE}/introduction`,
        main: props => <Introduction {...props} />
      },
      {
        path: `${HOME_PAGE}/style-and-theme`,
        main: props => <StyleAndTheme {...props} />
      },
      {
        path: `${HOME_PAGE}/example`,
        main: props => <Example {...props} />
      },
      {
        path: `${HOME_PAGE}/alert`,
        main: props => <DocAlert {...props} />
      }
    ];
    // Document 分支頁
    const documentRoutes = [
      {
        path: `${HOME_PAGE}/${DOC}/alert`,
        main: props => <DocAlert {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/button`,
        main: props => <DocButton {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/checkbox`,
        main: props => <DocCheckbox {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/sliderSet`,
        main: props => <DocSliderSet {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/dialog`,
        main: props => <DocDialog {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/searchbar`,
        main: props => <DocSearchBar {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/form`,
        main: props => <DocForm {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/input`,
        main: props => <DocInput {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/select`,
        main: props => <DocSelect {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/step`,
        main: props => <DocStep {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/subMenu`,
        main: props => <DocSubMenu {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/radio`,
        main: props => <DocRadio {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/header`,
        main: props => <DocHeader {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/navbar`,
        main: props => <DocNavBar {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/card`,
        main: props => <DocCard {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/footer`,
        main: props => <DocFooter {...props} />
      },
      {
        path: `${HOME_PAGE}/${DOC}/chart/pie-graph`,
        main: props => <DocChartPie {...props} />,
        exact: true
      },
      {
        path: `${HOME_PAGE}/${DOC}/chart/bar-graph`,
        main: props => <DocChartBar {...props} />,
        exact: true
      },
      {
        path: `${HOME_PAGE}/${DOC}/chart/line-graph`,
        main: props => <DocChartLine {...props} />,
        exact: true
      },
      {
        path: `${HOME_PAGE}/${DOC}/chart/area-graph`,
        main: props => <DocChartArea {...props} />,
        exact: true
      },
      {
        path: `${HOME_PAGE}/${DOC}/dashboard`,
        main: props => <DocDashboard {...props} />,
        exact: true
      },
      {
        path: `${HOME_PAGE}/${DOC}/fullbar`,
        main: props => <DocFullBar {...props} />,
        exact: true
      },
      {
        path: `${HOME_PAGE}/${DOC}/layout`,
        main: props => <DocLayout {...props} />,
        exact: true
      }
    ];
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
            {documentRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
            <Route path="*" component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}
