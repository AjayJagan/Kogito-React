import React from 'react';
import { Card, CardBody } from '@patternfly/react-core';

import { TextContent, Text, TextVariants } from '@patternfly/react-core';
export interface IOwnProps {
  icon: any;
  overviewText: string;
  smallText: string;
}
export interface IStateProps {}
const CardComponent:React.FunctionComponent<IOwnProps> = (props) => {
    return (
      <Card isCompact>
        <CardBody>
          <div className="pf-l-flex pf-m-justify-content-center">
            {props.icon}
            <TextContent>
              <Text component={TextVariants.a} href="#">
                {props.overviewText}
              </Text>
            </TextContent>
          </div>
        </CardBody>
        <CardBody>
          <div className="pf-l-flex pf-m-justify-content-center">
            <TextContent>
              <Text component={TextVariants.small}>{props.smallText}</Text>
            </TextContent>
          </div>
        </CardBody>
      </Card>
    );
}

export default CardComponent;