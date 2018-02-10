import React from "react";
import { Anchor } from 'teasim-normalize'
import { FormattedMessage } from "react-intl";
import messages from "./messages";

const Brand = () => (
  <Anchor href="/" className="text-primary">
    <FormattedMessage {...messages.name} />
  </Anchor>
);

export default Brand;