import React from "react";
import { FormattedMessage } from "react-intl";
import { Area } from "teasim";
import messages from "./messages";

export default function NotFoundPage() {
  return (
    <Area className="text-center">
      <FormattedMessage {...messages.title} />
    </Area>
  );
}
