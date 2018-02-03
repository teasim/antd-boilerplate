import React from "react";
import { Area } from "teasim";
import { withLogin } from "app/helpers/authentication";

const About = () => <Area >Hello AboutPage!</Area>;

export default withLogin(About);
