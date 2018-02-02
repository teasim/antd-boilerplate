import React from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Layout, LayoutTopper, LayoutBodyer, LayoutHeader } from "teasim";
import LanguageToggle from "app/containers/LanguageToggle/index";
import HomePage from "./HomePage/index";
import AboutPage from "./AboutPage/index";
import NotFoundPage from "./NotFoundPage/index";
import CallbackPage from "./CallbackPage/index";

const Application = () => (
  <div>
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate">
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Layout>
      <LayoutTopper childClassName="fluid-xxl text-right" >
        <LanguageToggle />
      </LayoutTopper>
      <LayoutHeader childClassName="fluid-xxl text-center">
        Logo
      </LayoutHeader>
      <LayoutBodyer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/callback" component={CallbackPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </LayoutBodyer>
    </Layout>
  </div>
);

export default Application;
