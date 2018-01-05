import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "teasim";
import { Helmet } from "react-helmet";
import LanguageToggle from "app/containers/LanguageToggle/index";
import HomePage from "./HomePage/index";
import AboutPage from "./AboutPage/index";
import NotFoundPage from "./NotFoundPage/index";
import CallbackPage from "./CallbackPage/index";

const Application = () => (
  <div>
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Layout>
      <Layout.Topper>
        <LanguageToggle />
      </Layout.Topper>
      <Layout.Bodyer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/callback" component={CallbackPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Layout.Bodyer>
    </Layout>
  </div>
);

export default Application;
