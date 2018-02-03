import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { makeSelectAuthUser } from "app/actions/auth/selectors";
import Repositories from "./Repositories";
import Landing from "./Landing";

function HomePage(props) {
  const { user } = props;

  return !user || user.expired ? <Landing /> : <Repositories />;
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
