import React from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  Layout, 
  LayoutTopper,
  LayoutBodyer, 
  LayoutHeader, 
  LayoutFooter, 
  Header, 
  HeaderLeft, 
  HeaderRight, 
  HeaderBrand,
  Topper,
} from "teasim";
import Brand from "app/components/Brand/index";
import LanguageToggle from "app/containers/LanguageToggle/index";
import MainNavigationToggle from "app/containers/MainNavigationToggle/index";
import UserNavigationToggle from "app/containers/UserNavigationToggle/index";

import Home from "./Home/index";
import About from "./About/index";
import Callback from "./Callback/index";
import Notfound from "./Notfound/index";

const Application = () => (
  <div className="application">
    <Helmet
      titleTemplate="%s - Teasim"
      defaultTitle="Teasim | Build cross platform apps with React and Electron.">
      <meta name="description" content="Build cross platform apps with React and Electron." />
    </Helmet>
    <Layout>
      <LayoutTopper childClassName="container-xxl py-tiny text-right">
        <LanguageToggle />
      </LayoutTopper>
      <LayoutHeader childClassName="container-xxl py-none">
        <Header>
          <HeaderLeft className="py-medium text-left">
            <MainNavigationToggle />
          </HeaderLeft>
          <HeaderRight className="py-medium text-right">
            <UserNavigationToggle/>
          </HeaderRight>
          <HeaderBrand className="text-center">
            <Brand />
          </HeaderBrand>
        </Header>
      </LayoutHeader>
      <LayoutBodyer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/callback" component={Callback} />
          <Route path="" component={Notfound} />
        </Switch>
      </LayoutBodyer>
      <LayoutFooter childClassName="container-xxl py-wide text-center">
        YIQILAI.TECH
      </LayoutFooter>
    </Layout>
  </div>
);

export default Application;
