import React from "react";
import { connect } from 'react-redux';
import { compose } from "redux";
import MainPage from '../MainPage';
import LoginPage from '../LoginPage';

function OidcHomePage(props) {
  const { oidc } = props;

  return (
    !oidc || oidc.expired ? <LoginPage/> : <MainPage />
  )
}

function mapStateToProps(state) {
  return {
    oidc: state.oidc
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(OidcHomePage);
