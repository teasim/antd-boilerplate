import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { makeSelectAuthUser } from "app/actions/auth/selectors";
import LoginButton from "app/components/LoginButton";
import UserDropdownMenu from "./UserDropdownMenu";

function UserNavigationToggle(props) {
  const { user } = props;

  return !user || user.expired ? <LoginButton /> : <UserDropdownMenu />;
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
export default compose(withConnect)(UserNavigationToggle);