import React from "react";
import { Button } from "teasim";
import userManager from "app/helpers/userManager";

class LoginButton extends React.Component {
  onLoginButtonClick = event => {
    event.preventDefault();
    userManager.signinRedirect();
  };

  render() {
    return (
      <Button 
      	size="tiny" 
      	onClick={this.onLoginButtonClick}>
      	Login with Google
      </Button>
    );
  }
}

export default LoginButton;
