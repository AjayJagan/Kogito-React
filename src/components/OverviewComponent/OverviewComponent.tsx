import React from 'react';
import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  PageSection,
  PageSectionVariants,
  TextContent,
  Text
} from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
import Table from '../TableComponent/Table';
import './Overview.css';
export interface IOwnProps {}
export interface IStateProps {
  instanceType: string;
}
class OverviewComponent extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {
      instanceType: ''
    };
  }
  onCardClick = detail => event => {
    console.log(this.state.instanceType);
    this.setState({ instanceType: detail });
  };

  render() {
    const instanceDetail = { ACTIVE: '1258', COMPLETED: '1150', ABORTED: '50', INERROR: '58' };
    return (
      <React.Fragment>
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Process Instances</Text>
            <Text component="p"></Text>
          </TextContent>
        </PageSection>
        <PageSection>
          <Gallery gutter="md">
            {Object.keys(instanceDetail).map((detail, index) => (
              <GalleryItem key={index}>
                <Card isHoverable onClick={this.onCardClick(detail)}>
                  <CardBody>{detail}</CardBody>
                  <CardBody>{instanceDetail[detail]}</CardBody>
                </Card>
              </GalleryItem>
            ))}
          </Gallery>
        </PageSection>
        <PageSection variant={PageSectionVariants.light} noPadding={true}>
          <TextContent>
            <Text component="h1">Instance Details</Text>
            <Text component="p"></Text>
          </TextContent>
        </PageSection>
        <PageSection>
          <Table instanceType={this.state.instanceType}></Table>
        </PageSection>
      </React.Fragment>
    );
  }
}

export default OverviewComponent;
