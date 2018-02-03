import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { makeSelectAuthUser } from "app/actions/auth/selectors";
import UserNavigator from "app/containers/UserNavigator";
import LoginButton from "app/components/LoginButton";

function LoginToggle(props) {
  const { user } = props;

  return !user || user.expired ? <LoginButton /> : <UserNavigator />;
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectAuthUser()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(LoginToggle);