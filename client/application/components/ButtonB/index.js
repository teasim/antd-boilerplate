/**
*
* ButtonB
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ButtonB() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ButtonB.propTypes = {

};

export default ButtonB;
