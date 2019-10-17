import React from 'react';
import { Card, CardHeader, Title, CardBody, TextContent, Text, TextVariants } from '@patternfly/react-core';
import ScrollArea from 'react-scrollbar';

export interface IOwnProps {}
export interface IStateProps {
  cardBodyArray: any;
}

class TimelineCard extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {
      cardBodyArray: []
    };
  }

  componentDidMount() {
    let tempArray = [];
    for (let i = 0; i < 20; i++) {
      tempArray.push(
        <CardBody key={i}>
          <TextContent style={{ maxWidth: '200em' }}>
            <Text component={TextVariants.p}>A very long list ....................</Text>
          </TextContent>
        </CardBody>
      );
    }
    this.setState({
      cardBodyArray: tempArray
    });
  }

  render() {
    return (
      <Card style={{ minHeight: '405px', marginTop: '-105px' }}>
        <CardHeader>
          {' '}
          <div>
            <Title headingLevel="h2" size="3xl">
              Timeline
            </Title>
          </div>
        </CardHeader>
        <CardBody>
          <TextContent style={{ maxWidth: '200em' }}>
            <Text component={TextVariants.p}>Timeline showing the history for this instance.</Text>
          </TextContent>
        </CardBody>
        <ScrollArea smoothScrolling={true} style={{ width: '100%', height: '250px' }}>
          {...this.state.cardBodyArray}
        </ScrollArea>
      </Card>
    );
  }
}
export default TimelineCard;
