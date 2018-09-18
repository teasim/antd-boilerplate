import "babel-polyfill";
import teasim from "teasim-core";
import createLoading from "teasim-plugin-loading";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
import "styles/index.less";
import "assets/index";

/* 1. Initialize */
const app = teasim();

/* 2. Plugins */
app.use(createLoading());

/* 3. Models */
app.model(require("models/global").default);
app.model(require("models/activities").default);
app.model(require("models/chart").default);
app.model(require("models/error").default);
app.model(require("models/form").default);
app.model(require("models/list").default);
app.model(require("models/login").default);
app.model(require("models/monitor").default);
app.model(require("models/profile").default);
app.model(require("models/project").default);
app.model(require("models/register").default);
app.model(require("models/rule").default);
app.model(require("models/user").default);

/* 4. Install */
app.install(require("pages/index").default);

/* 5. Mount */
app.mount("#root");

/* 6. Settings */

/* 7. ServiceWorker */
if (process.env.NODE_ENV === "production") {
  require("offline-plugin/runtime").install(); // eslint-disable-line global-require
}

/* 8. Application Store */
export default app.store; // eslint-disable-line
