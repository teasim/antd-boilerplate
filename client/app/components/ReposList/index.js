import React from "react";
import PropTypes from "prop-types";

import List from "app/components/List";
import ListItem from "app/components/ListItem";
import LoadingIndicator from "app/components/LoadingIndicator";
import RepoListItem from "app/containers/RepoListItem";

function ReposList({ loading, error, repos }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={"Something went wrong, please try again!"} />
    );
    return <List component={ErrorComponent} />;
  }

  if (repos !== false) {
    return <List items={repos} component={RepoListItem} />;
  }

  return null;
}

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any
};

export default ReposList;
