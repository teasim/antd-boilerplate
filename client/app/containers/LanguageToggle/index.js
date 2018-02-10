import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { RuttonGroup, Rutton } from "teasim";
import { appLocales } from "app/helpers/internationalization";
import { changeLocaleLanguage, selectLocaleLanguage } from "app/actions/locale/index";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

class LanguageToggle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.actions.changeLocaleLanguage(this.input.getValue());
  }

  render() {
    return (
      <RuttonGroup 
        outline
        skin='primary' 
        size="tiny"
        ref={ref => this.input = ref}
        defaultValue={this.props.locale}
        onChange={this.handleChange}>
        {appLocales.map(value => (
          <Rutton key={value} value={value}>
            {messages 
              ? <FormattedMessage {...messages[value]} />
              : value
            }
          </Rutton>
        ))}
      </RuttonGroup>
    );
  }
}

LanguageToggle.propTypes = {
  locale: PropTypes.string,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = createSelector(selectLocaleLanguage(), locale => ({
  locale
}));

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ changeLocaleLanguage }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageToggle);
