import {
  withLocationplate,
  withRouteRedirect,
  withAuthentication
} from "teasim-plugin-authent";
import {
  makeSelectAuthUser,
  makeSelectAuthLoading
} from "app/actions/auth/selectors";
import Loading from "app/components/Loading";

const locationplate = withLocationplate({});

const userIsAuthenticatedDefaults = {
  authenticatedSelector: makeSelectAuthUser(),
  authenticatingSelector: makeSelectAuthLoading(),
  wrapperDisplayName: "UserIsAuthenticated"
};

export const userIsAuthenticated = withAuthentication(
  userIsAuthenticatedDefaults
);

export const withLogin = withRouteRedirect({
  ...userIsAuthenticatedDefaults,
  AuthenticatingComponent: Loading,
  redirectPath: "/"
});
