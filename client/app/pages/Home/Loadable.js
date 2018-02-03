import Loadable from "react-loadable";
import LoadingIndicator from "app/components/LoadingIndicator/index";

export default Loadable({
  loader: () => import("./index"),
  loading: LoadingIndicator
});
