import React, { PropTypes } from 'react';
import { injectIntl, intlShape } from 'react-intl';

const LanguageOption = ({ value, message, intl }) => (
  <option value={value} >
    {message ? intl.formatMessage(message) : value}
  </option>
);

LanguageOption.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(LanguageOption);
