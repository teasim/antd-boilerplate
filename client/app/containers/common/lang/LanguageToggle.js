import React, { PureComponent, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { appLocales } from 'app/helpers/internationalization';
import { LanguageSelect } from 'app/components/common/LanguageSelect/index';
import { changeLocaleLanguage, selectLocaleLanguage } from 'app/actions/common/lang/index';
import messages from './messages';

class LanguageToggle extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.actions.changeLocaleLanguage(event.target.value)
  }

  render() {
    return (
      <LanguageSelect 
        value={this.props.locale} 
        values={appLocales} 
        messages={messages}
        onToggle={this.handleChange} 
      />
    );
  }
}

LanguageToggle.propTypes = {
  locale: React.PropTypes.string,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = createSelector(
  selectLocaleLanguage(),
  (locale) => ({ locale })
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({changeLocaleLanguage},dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageToggle);
