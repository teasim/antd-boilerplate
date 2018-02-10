import React from "react";
import PropTypes from 'prop-types'
import { Card, CardHead, CardBody, CardFoot, Image } from "teasim";
import "!file-loader?name=[name].[ext]!app/components/FeatureCard/default-image.svg";

const PackageCard = props => (
  <Card className="mb-large">
    <CardHead className="border-default pa-mini">
      <h3>{props.title}</h3>
    </CardHead>
    <CardBody>
      <Image
        accessibilityLabel={props.title}
        defaultSource={{ uri: 'default-image.svg' }}
        source={{ uri: props.image }}
      />
    </CardBody>
    <CardFoot className="border-default pa-mini">
      <h3>{props.version}</h3>
    </CardFoot>
  </Card>
);

PackageCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  version: PropTypes.string,
}

export default PackageCard;
