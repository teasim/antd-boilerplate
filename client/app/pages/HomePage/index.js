import React from "react";
import { Helmet } from "react-helmet";
import { Section } from "teasim";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

export class HomePage extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Section size="huge">
          <FormattedMessage {...messages.hello} />
          <form>
            <label htmlFor="username">
              <input id="username" type="text" placeholder="mxstbr" />
            </label>
          </form>
        </Section>
      </article>
    );
  }
}

export default HomePage;
