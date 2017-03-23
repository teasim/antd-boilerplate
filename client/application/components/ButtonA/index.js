/**
*
* ButtonA
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ButtonA() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ButtonA.propTypes = {

};

export default ButtonA;
