import React from "react";
import { Section } from "teasim";
import { withLogin } from "app/helpers/authentication";

const AboutPage = () => <Section size="huge">Hello AboutPage!</Section>;

export default withLogin(AboutPage);
