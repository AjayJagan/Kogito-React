import React from 'react';
import { Card, CardHeader, Title, CardBody, TextContent, Text, TextVariants } from '@patternfly/react-core';

export interface IOwnProps {}
export interface IStateProps {}

class ProcessDiagramCard extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card style={{ minHeight: '30em' }}>
        <CardHeader>
          <div>
            <Title headingLevel="h2" size="3xl">
              Process Diagram
            </Title>
          </div>
        </CardHeader>
        <CardBody>
          <TextContent style={{ maxWidth: '200em' }}>
            <Text component={TextVariants.p}>
              Show the diagram with the ability to zoom and slide/scroll. A mini map-like interface for reference and
              the future ability to animate
            </Text>
          </TextContent>
        </CardBody>
      </Card>
    );
  }
}
export default ProcessDiagramCard;
