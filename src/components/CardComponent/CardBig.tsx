import React from 'react';
import { Card, CardHeader, CardBody } from '@patternfly/react-core';
import { TextContent, Text, TextVariants } from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';
import { Title, EmptyState, EmptyStateVariant, EmptyStateIcon, EmptyStateBody } from '@patternfly/react-core';
export interface IOwnProps {}
export interface IStateProps {}
export default class CardBig extends React.Component<IOwnProps, IStateProps> {
  render() {
    return (
      <Card style={{ minHeight: '30em' }}>
        <CardHeader>
          <div className="pf-l-flex pf-m-justify-content-space-evenly pf-m-align-items-center pf-m-align-content-center">
            <TextContent>
              <Text component={TextVariants.a} href="#">
                Process Diagram
              </Text>
            </TextContent>
            <TextContent>
              <Text component={TextVariants.a} href="#">
                Process Log Events
              </Text>
            </TextContent>
            <TextContent>
              <Text component={TextVariants.a} href="#">
                Variables
              </Text>
            </TextContent>
          </div>
        </CardHeader>
        <hr className="pf-c-divider"></hr>
        <CardBody>
          {' '}
          <EmptyState variant={EmptyStateVariant.full}>
            <EmptyStateIcon icon={CubesIcon} />
            <Title headingLevel="h5" size="lg">
              Process Diagram To Be Added Dynamically
            </Title>
            <EmptyStateBody>
              The ProcessDiagram, Log Events and Variables would appear here base on the tab clicked.
            </EmptyStateBody>
          </EmptyState>
        </CardBody>
      </Card>
    );
  }
}
