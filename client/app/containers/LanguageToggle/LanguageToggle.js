import React from "react";
import PropTypes from "prop-types";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { appLocales } from "app/helpers/internationalization";
import { LanguageSelect } from "app/components/LanguageSelect/index";
import {
  changeLocaleLanguage,
  selectLocaleLanguage
} from "app/actions/lang/index";
import messages from "./messages";

class LanguageToggle extends React.PureComponent {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   this.props.actions.changeLocaleLanguage(event.target.value);
  // }

  render() {
    return (
      <LanguageSelect
        value={this.props.locale}
        values={appLocales}
        messages={messages}
        onToggle={this.props.onLocaleToggle}
      />
    );
  }
}

LanguageToggle.propTypes = {
  locale: PropTypes.string,
  onLocaleToggle: PropTypes.func
};

const mapStateToProps = createSelector(selectLocaleLanguage(), locale => ({
  locale
}));

const mapDispatchToProps = dispatch => ({
  onLocaleToggle: evt => dispatch(changeLocaleLanguage(evt.target.value)),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageToggle);
