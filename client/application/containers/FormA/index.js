/*
 *
 * FormA
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectFormA from './selectors';
import messages from './messages';

export class FormA extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="FormA"
          meta={[
            { name: 'description', content: 'Description of FormA' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

FormA.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  FormA: makeSelectFormA(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormA);
