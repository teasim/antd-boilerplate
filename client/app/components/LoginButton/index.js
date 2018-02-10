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
        outline
      	size="medium" 
        skin="default"
      	onClick={this.onLoginButtonClick}>
      	Login
      </Button>
    );
  }
}

export default LoginButton;
