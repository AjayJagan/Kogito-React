import React from 'react';
import {
  Card,
  CardHeader,
  Title,
  CardBody,
  TextContent,
  Text,
  TextVariants,
  CardFooter,
  Button
} from '@patternfly/react-core';

export interface IOwnProps {}
export interface IStateProps {}

class ProcessVariablesCard extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card style={{ minHeight: '300px' }}>
        <CardHeader>
          <div>
            <Title headingLevel="h2" size="3xl">
              Process Variables
            </Title>
          </div>
        </CardHeader>
        <CardBody>
          <TextContent style={{ maxWidth: '200em' }}>
            <Text component={TextVariants.p}>JSON Fromat</Text>
          </TextContent>
        </CardBody>
        <CardFooter>
          {' '}
          <Button variant="primary" style={{ backgroundColor: '#2174b8', float: 'right' }}>
            Go to Process Variables Page
          </Button>
        </CardFooter>
      </Card>
    );
  }
}
export default ProcessVariablesCard;
