/**
*
* ButtonC
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ButtonC() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ButtonC.propTypes = {

};

export default ButtonC;
