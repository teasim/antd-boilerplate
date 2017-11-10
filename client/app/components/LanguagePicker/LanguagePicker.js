import React from "react";
import PropTypes from "prop-types";
import { LanguageToggle } from "app/containers/LanguageToggle/index";

const LanguagePicker = props => <LanguageToggle />;

LanguagePicker.propTypes = {
  size: PropTypes.string
};

export default LanguagePicker;
