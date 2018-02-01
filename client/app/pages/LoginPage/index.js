import React from "react";
import { Button } from "teasim";
import userManager from "app/helpers/userManager";

class LoginPage extends React.Component {
  onLoginButtonClick = event => {
    event.preventDefault();
    userManager.signinRedirect();
  };

  render() {
    return (
      <div style={styles.root}>
        <h3>Welcome to the teasim-plugin-authman sample app!</h3>
        <p>Please log in to continue</p>
        <Button onClick={this.onLoginButtonClick}>Login with Google</Button>
      </div>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    flexShrink: 1
  }
};

export default LoginPage;
