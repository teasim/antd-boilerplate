/*
 *
 * FormB
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectFormB from './selectors';
import messages from './messages';

export class FormB extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="FormB"
          meta={[
            { name: 'description', content: 'Description of FormB' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

FormB.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  FormB: makeSelectFormB(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormB);
