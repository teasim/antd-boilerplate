import React from 'react';
import { dynamic } from "teasim-core";
import { LocaleProvider, Spin} from 'antd';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from "react-router-redux";
import { getRouterData } from 'settings/router';
import Authorized from 'helpers/Authorized';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import ApiLayout from './ApiDoc';

const { AuthorizedRoute } = Authorized;

dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" />;
});

export default function ({ history, app }) {
  const routerData = getRouterData(app);
  const UserLayout = routerData['/user'].component;
  const BasicLayout = routerData['/'].component;
  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/api" component={ApiLayout} />
          <Route path="/user" component={UserLayout} />
          <AuthorizedRoute
            path="/"
            render={props => <BasicLayout {...props} />}
            authority={['admin', 'user']}
            redirectPath="/user/login"
          />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  );
};