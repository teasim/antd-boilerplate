import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { makeSelectAuthUser } from "app/actions/auth/selectors";
import MainPage from "../MainPage";
import LoginPage from "../LoginPage";

function HomePage(props) {
  const { user } = props;

  return !user || user.expired ? <LoginPage /> : <MainPage />;
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
export default compose(withConnect)(HomePage);
