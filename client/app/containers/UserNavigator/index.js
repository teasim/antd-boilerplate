import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { ButtonGroup, Button } from "teasim";
import { createStructuredSelector } from "reselect";
import { makeSelectAuthUser } from "app/actions/auth/index";
import userManager from "app/helpers/userManager";

class UserNavigator extends React.PureComponent {
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  showUserInfoButtonClick = event => {
    event.preventDefault();
    alert(JSON.stringify(this.props.user, null, 2));
  };

  onLogoutButtonClicked = event => {
    event.preventDefault();
    userManager.removeUser();
  };

  render() {
    const { user } = this.props;

    return (
    	<ButtonGroup size="tiny">
        <Button 
          onClick={this.showUserInfoButtonClick}>
          {user ? user.profile.name : "Unknown"}
        </Button>
        <Button 
          onClick={this.onLogoutButtonClicked}>
          Logout
        </Button>
      </ButtonGroup>
    );
  }
}

UserNavigator.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectAuthUser()
});

const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(UserNavigator);
