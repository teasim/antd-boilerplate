import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { Helmet } from "react-helmet";
import { Area } from "teasim";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import {
  loadRepos,
  changeUsername,
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
  makeSelectUsername
} from "app/actions/home/index";
import { makeSelectAuthUser } from "app/actions/auth/index";
import userManager from "app/helpers/userManager";
import messages from "./messages";
import ReposList from "app/components/ReposList/index";

class MainPage extends React.PureComponent {
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
    userManager.removeUser(); // removes the user data from sessionStorage
  };

  render() {
    const { loading, error, repos, user } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Area>
          <h3>Welcome, {user ? user.profile.name : "Mister Unknown"}!</h3>
          <button onClick={this.showUserInfoButtonClick}>Show user info</button>
          <button onClick={this.onLogoutButtonClicked}>Logout</button>
        </Area>
        <hr />
        <Area>
          <FormattedMessage {...messages.hello} />
          <form onSubmit={this.props.onSubmitForm}>
            <label htmlFor="username">
              <input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={this.props.username}
                onChange={this.props.onChangeUsername}
              />
            </label>
          </form>
          <ReposList {...reposListProps} />
        </Area>
      </article>
    );
  }
}

MainPage.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectAuthUser(),
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(MainPage);
