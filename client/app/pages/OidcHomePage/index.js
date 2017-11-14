import React from "react";
import { connect } from 'react-redux';
import { compose } from "redux";
import MainPage from '../MainPage';
import LoginPage from '../LoginPage';
import { createStructuredSelector } from "reselect";
import { makeSelectOidcUser } from "app/actions/channel/selectors";

function OidcHomePage(props) {
  const { user } = props;

  return (
    !user || user.expired ? <LoginPage/> : <MainPage />
  )
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectOidcUser()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(OidcHomePage);
