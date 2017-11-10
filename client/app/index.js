import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { ConnectedRouter } from "react-router-redux";
import { LocaleProvider } from "app/containers/index";
import { translationMessages } from "app/helpers/internationalization";
import generateStore from "app/stores/index";
import Application from "app/pages/index";
/* eslint-disable import/no-webpack-loader-syntax */
import "!file-loader?name=[name].[ext]!app/resources/icons/favicon.ico";
import "!file-loader?name=[name].[ext]!app/resources/icons/icon-72x72.png";
import "!file-loader?name=[name].[ext]!app/resources/icons/icon-96x96.png";
import "!file-loader?name=[name].[ext]!app/resources/icons/icon-120x120.png";
import "!file-loader?name=[name].[ext]!app/resources/icons/icon-128x128.png";
import "!file-loader?name=[name].[ext]!app/resources/icons/icon-144x144.png";
import "!file-loader?name=[name].[ext]!app/resources/icons/icon-152x152.png";
import "!file-loader?name=[name].[ext]!app/resources/icons/icon-167x167.png";
import "!file-loader?name=[name].[ext]!app/resources/icons/icon-180x180.png";
import "!file-loader?name=[name].[ext]!app/resources/icons/icon-192x192.png";
import "!file-loader?name=[name].[ext]!app/resources/icons/icon-384x384.png";
import "!file-loader?name=[name].[ext]!app/resources/icons/icon-512x512.png";
import "!file-loader?name=[name].[ext]!app/resources/icons/manifest.json";
import "file-loader?name=[name].[ext]!.htaccess";
/* eslint-enable import/no-webpack-loader-syntax */
import "app/styles/application.less";

// Create redux store with history
const initialState = {};
const browserHistory = createHistory();
const { store, history } = generateStore(initialState, browserHistory);
const mountNode = document.getElementById("application");

/* Render development instance */
const renderDevelopmentApplication = messages => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <LocaleProvider messages={messages}>
          <ConnectedRouter history={history}>
            <Application />
          </ConnectedRouter>
        </LocaleProvider>
      </Provider>
    </AppContainer>,
    mountNode
  );
};

if (module.hot) {
  module.hot.accept("app/helpers/internationalization", () => {
    renderDevelopmentApplication(translationMessages);
  });
}

/* Render production instance */
const renderProductionApplication = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <LocaleProvider messages={messages}>
        <ConnectedRouter history={history}>
          <Application />
        </ConnectedRouter>
      </LocaleProvider>
    </Provider>,
    mountNode
  );
};

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import("intl"));
  })
    .then(() =>
      Promise.all([
        import("intl/locale-data/jsonp/en.js"),
        import("intl/locale-data/jsonp/zh.js")
      ])
    )
    .then(() => renderProductionApplication(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  renderProductionApplication(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === "production") {
  require("offline-plugin/runtime").install(); // eslint-disable-line global-require
}
