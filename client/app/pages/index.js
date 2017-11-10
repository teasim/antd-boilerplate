import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "teasim";
// import { LanguagePicker } from 'app/components/index'
import { HomePage } from "./home/index";
import { AboutPage } from "./about/index";

const Application = () => (
  <Layout>
    <Layout.Bodyer>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </Layout.Bodyer>
  </Layout>
);

export default Application;
