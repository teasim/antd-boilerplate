import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { Helmet } from "react-helmet";
import { Area, Button, Searchbox } from "teasim";
import { createStructuredSelector } from "reselect";
import {
  loadRepos,
  changeUsername,
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
  makeSelectUsername
} from "app/actions/home/index";
import ReposList from "app/components/ReposList/index";

class Repositories extends React.PureComponent {
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };

    return (
      <div className="container-xxl" >
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Area >
          <form onSubmit={this.props.onSubmitForm}>
            <Searchbox
              id="username"
              type="text"
              placeholder="hello"
              value={this.props.username}
              onChange={this.props.onChangeUsername}
            />
          </form>
          <ReposList {...reposListProps} />
        </Area>
      </div>
    );
  }
}

Repositories.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
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
export default compose(withConnect)(Repositories);
