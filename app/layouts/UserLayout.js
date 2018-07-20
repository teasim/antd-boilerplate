import React from 'react';
import Document from 'teasim-document';
import FixtableLayout from 'teasim-layout/lib/FixtableLayout';
import { Link, Redirect, Switch, Route } from 'react-router-dom';
import { getRoutes } from 'helpers/utils';

class UserLayout extends React.PureComponent {
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = 'Teasim demo';
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - Teasim demo`;
    }
    return title;
  }
  render() {
    const { routerData, match } = this.props;
    return (
      <Document title={this.getPageTitle()}>
        <FixtableLayout>
          <div className="screen-xxs">
            <Switch>
              {getRoutes(match.path, routerData).map(item => (
                <Route
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              ))}
              <Redirect exact from="/user" to="/user/login" />
            </Switch>
          </div>
        </FixtableLayout>
      </Document>
    );
  }
}

export default UserLayout;
