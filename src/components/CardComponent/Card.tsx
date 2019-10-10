import React from 'react';
import { Card, CardHeader, CardBody } from '@patternfly/react-core';
import { TextContent, Text, TextVariants } from '@patternfly/react-core';
import { CheckCircleIcon } from '@patternfly/react-icons';
export interface IOwnProps {
  cardDetails: any;
}
export interface IStateProps {}
export default class CardComponent extends React.Component<IOwnProps, IStateProps> {
  render() {
    if (this.props.cardDetails.Header == 'Active Task') {
      return (
        <Card>
          <CardHeader>
            <TextContent>
              <Text component={TextVariants.h6}>{this.props.cardDetails['Header']}</Text>
            </TextContent>
          </CardHeader>
          <hr className="pf-c-divider"></hr>
          <CardBody>
            <TextContent>
              <Text component={TextVariants.small}>Active</Text>
            </TextContent>
            <CheckCircleIcon color="#3ac93d" />
          </CardBody>
          <CardBody>
            <TextContent>
              <Text component={TextVariants.small}>Deployment</Text>
            </TextContent>
            <TextContent>
              <Text component={TextVariants.p}>Staging</Text>
            </TextContent>
          </CardBody>
          <CardBody>
            <TextContent>
              <Text component={TextVariants.small}>Definition Version</Text>
            </TextContent>
            <TextContent>
              <Text component={TextVariants.p}>1.0</Text>
            </TextContent>
          </CardBody>
          <CardBody>
            <TextContent>
              <Text component={TextVariants.small}>Correlation Key</Text>
            </TextContent>
            <TextContent>
              <Text component={TextVariants.p}>200100</Text>
            </TextContent>
          </CardBody>
          <CardBody>
            <TextContent>
              <Text component={TextVariants.small}>Parent Process Instance</Text>
            </TextContent>
            <TextContent>
              <Text component={TextVariants.p}>N/A</Text>
            </TextContent>
          </CardBody>
        </Card>
      );
    } else if (this.props.cardDetails.Header == 'Documents') {
      return (
        <Card>
          <CardHeader>
            <TextContent>
              <Text component={TextVariants.h6}>Documents</Text>
            </TextContent>
          </CardHeader>
          <hr className="pf-c-divider"></hr>
          <CardBody className="pf-l-flex pf-m-column">
            <TextContent>
              <Text component={TextVariants.a} href="#">
                Document1
              </Text>
            </TextContent>
            <TextContent>
              <Text component={TextVariants.small}>Created 3 days ago By Aimee</Text>
            </TextContent>
          </CardBody>
          <CardBody className="pf-l-flex pf-m-column">
            <TextContent>
              <Text component={TextVariants.a} href="#">
                Document2
              </Text>
            </TextContent>
            <TextContent>
              <Text component={TextVariants.small}>Created 1 week ago by Cameron</Text>
            </TextContent>
          </CardBody>
        </Card>
      );
    } else if (this.props.cardDetails.Header1 == 'Active Task') {
      return (
        <Card>
          <CardHeader>
            <TextContent>
              <Text component={TextVariants.h6}>{this.props.cardDetails['Header1']}</Text>
            </TextContent>
          </CardHeader>
          <hr className="pf-c-divider"></hr>
          <CardBody>
            <TextContent>
              <Text component={TextVariants.small}>Task Name</Text>
            </TextContent>
            <TextContent>
              <Text component={TextVariants.p}>{this.props.cardDetails['Task Name']}</Text>
            </TextContent>
          </CardBody>
          <CardBody>
            <TextContent>
              <Text component={TextVariants.small}>Started</Text>
            </TextContent>
            <TextContent>
              <Text component={TextVariants.p}>{this.props.cardDetails['Started']}</Text>
            </TextContent>
          </CardBody>
          <CardBody>
            <TextContent>
              <Text component={TextVariants.small}>Asignee</Text>
            </TextContent>
            <TextContent>
              <Text component={TextVariants.p}>{this.props.cardDetails['Asignee']}</Text>
            </TextContent>
          </CardBody>
        </Card>
      );
    }
  }
}
