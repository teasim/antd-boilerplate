import React from "react";
import PropTypes from 'prop-types'
import { Card, CardHead, CardBody, Image } from "teasim";
import "!file-loader?name=[name].[ext]!app/components/FeatureCard/default-image.svg";

const FeatureCard = props => (
  <Card className="mb-medium" border="none">
    <CardHead>
      <Image
        accessibilityLabel={`profile picture`}
        defaultSource={{ uri: 'default-image.svg' }}
        source={{ uri: props.image }}
      />
    </CardHead>
    <CardBody className="pa-medium">
      <h3 className="mb-mini text-primary font-light">{props.title}</h3>
      <p>{props.content}</p>
    </CardBody>
  </Card>
);

FeatureCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
}

export default FeatureCard;