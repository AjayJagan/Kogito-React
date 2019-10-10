import React from 'react';
import { Card, CardHeader, CardBody } from '@patternfly/react-core';
import { TextContent, Text, TextVariants } from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';
import { Title, EmptyState, EmptyStateVariant, EmptyStateIcon, EmptyStateBody } from '@patternfly/react-core';
export interface IOwnProps {}
export interface IStateProps {
  tabDetails: string;
}
export default class CardBig extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {
      tabDetails: ''
    };
  }
  handleOnClick = tabDetail => event => {
    this.setState({ tabDetails: tabDetail });
  };
  render() {
    return (
      <Card style={{ minHeight: '30em' }}>
        <CardHeader>
          <div className="pf-l-flex pf-m-justify-content-space-evenly pf-m-align-items-center pf-m-align-content-center">
            <TextContent>
              <Text component={TextVariants.a} href="#" onClick={this.handleOnClick('Process Diagram')}>
                Process Diagram
              </Text>
            </TextContent>
            <TextContent>
              <Text component={TextVariants.a} href="#" onClick={this.handleOnClick('Process Log Events')}>
                Process Log Events
              </Text>
            </TextContent>
            <TextContent>
              <Text component={TextVariants.a} href="#" onClick={this.handleOnClick('Variables')}>
                Variables
              </Text>
            </TextContent>
          </div>
        </CardHeader>
        <hr className="pf-c-divider"></hr>
        {(() => {
          if (this.state.tabDetails == 'Process Diagram') {
            return (
              <CardBody>
                <EmptyState variant={EmptyStateVariant.full}>
                  <EmptyStateIcon icon={CubesIcon} />
                  <Title headingLevel="h5" size="lg">
                    Process Diagram To Be Added Dynamically
                  </Title>
                  <EmptyStateBody>The Process Diagram would appear here based on the tab clicked.</EmptyStateBody>
                </EmptyState>
              </CardBody>
            );
          } else if (this.state.tabDetails == 'Process Log Events') {
            return (
              <CardBody>
                <EmptyState variant={EmptyStateVariant.full}>
                  <EmptyStateIcon icon={CubesIcon} />
                  <Title headingLevel="h5" size="lg">
                    Process Log Events To Be Added Dynamically
                  </Title>
                  <EmptyStateBody>The Process Log Events would appear here based on the tab clicked.</EmptyStateBody>
                </EmptyState>
              </CardBody>
            );
          } else if (this.state.tabDetails == 'Variables') {
            return (
              <CardBody>
                <EmptyState variant={EmptyStateVariant.full}>
                  <EmptyStateIcon icon={CubesIcon} />
                  <Title headingLevel="h5" size="lg">
                    Variables To Be Added Dynamically
                  </Title>
                  <EmptyStateBody>Variables would appear here based on the tab clicked.</EmptyStateBody>
                </EmptyState>
              </CardBody>
            );
          } else {
            return (
              <CardBody>
                <EmptyState variant={EmptyStateVariant.full}>
                  <EmptyStateIcon icon={CubesIcon} />
                  <Title headingLevel="h5" size="lg">
                    Process Diagram To Be Added Dynamically
                  </Title>
                  <EmptyStateBody>The Process Diagram would appear here based on the tab clicked.</EmptyStateBody>
                </EmptyState>
              </CardBody>
            );
          }
        })()}
      </Card>
    );
  }
}
