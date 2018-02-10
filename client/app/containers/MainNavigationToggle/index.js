import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { makeSelectAuthUser } from "app/actions/auth/selectors";
import LaunchButton from "app/components/LaunchButton";

function MainNavigationToggle(props) {
  const { user } = props;

  return !user || user.expired ? null : <LaunchButton />;
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
export default compose(withConnect)(MainNavigationToggle);