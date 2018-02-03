import React from "react";
import { connect } from "react-redux";
import { CallbackComponent } from "teasim-plugin-authman";
import { push } from "react-router-redux";
import userManager from "app/helpers/userManager";

class CallbackPage extends React.Component {
  successCallback = () => {
    this.props.dispatch(push("/"));
  };

  render() {
    return (
      <CallbackComponent
        userManager={userManager}
        successCallback={this.successCallback}
        errorCallback={this.successCallback}
      >
        <div>Redirecting...</div>
      </CallbackComponent>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(CallbackPage);
