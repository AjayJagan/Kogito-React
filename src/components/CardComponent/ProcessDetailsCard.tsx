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

class ProcessDetailsCard extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card style={{ minHeight: '370px' }}>
        <CardHeader>
          <div>
            <Title headingLevel="h2" size="3xl">
              Details
            </Title>
          </div>
        </CardHeader>

        <CardBody>
          <TextContent style={{ maxWidth: '200em' }}>
            <Text component={TextVariants.p}>List of detaiils for the instance</Text>
          </TextContent>
        </CardBody>

        <CardFooter>
          <Button variant="primary" style={{ backgroundColor: '#2174b8', float: 'right' }}>
            Go to Details Page
          </Button>
        </CardFooter>
      </Card>
    );
  }
}
export default ProcessDetailsCard;
