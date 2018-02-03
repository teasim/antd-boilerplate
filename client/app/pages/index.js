import React from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Row, Column, Layout, LayoutTopper, LayoutBodyer, LayoutHeader, LayoutFooter } from "teasim";
import LanguageToggle from "app/containers/LanguageToggle/index";
import LoginToggle from "app/containers/LoginToggle/index";

import Home from "./Home/index";
import About from "./About/index";
import Callback from "./Callback/index";
import Notfound from "./Notfound/index";

const Application = () => (
  <div>
    <Helmet
      titleTemplate="%s - Teasim Boilerplate"
      defaultTitle="Teasim Boilerplate">
      <meta name="description" content="A Teasim Boilerplate Application" />
    </Helmet>
    <Layout>
      <LayoutTopper childClassName="fluid-xxl px-mini" >
        <Row>
          <Column size="12" className="text-left" >
            <LoginToggle />
          </Column>
          <Column size="12" className="text-right">
            <LanguageToggle />
          </Column>
        </Row>
      </LayoutTopper>
      <LayoutHeader childClassName="fluid-xxl text-center">
        Logo
      </LayoutHeader>
      <LayoutBodyer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/callback" component={Callback} />
          <Route path="" component={Notfound} />
        </Switch>
      </LayoutBodyer>
      <LayoutFooter childClassName="fluid-xxl text-center">
        footer
      </LayoutFooter>
    </Layout>
  </div>
);

export default Application;
