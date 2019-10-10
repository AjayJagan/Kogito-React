import React from 'react';
import { Card, CardBody } from '@patternfly/react-core';

import { TextContent, Text, TextVariants } from '@patternfly/react-core';
export interface IOwnProps {
  icon: any;
  overviewText: string;
  smallText: string;
}
export interface IStateProps {}
export default class CardComponent extends React.Component<IOwnProps, IStateProps> {
  render() {
    return (
      <Card isCompact>
        <CardBody>
          <div className="pf-l-flex pf-m-justify-content-center">
            {this.props.icon}
            <TextContent>
              <Text component={TextVariants.a} href="#">
                {this.props.overviewText}
              </Text>
            </TextContent>
          </div>
        </CardBody>
        <CardBody>
          <div className="pf-l-flex pf-m-justify-content-center">
            <TextContent>
              <Text component={TextVariants.small}>{this.props.smallText}</Text>
            </TextContent>
          </div>
        </CardBody>
      </Card>
    );
  }
}
