import React from 'react';
import { Grid, GridItem, PageSection, Breadcrumb, BreadcrumbItem, Title } from '@patternfly/react-core';
import { RouteComponentProps } from 'react-router';
import ProcessDiagramCard from '../CardComponent/ProcessDiagramCard';
import ProcessDetailsCard from '../CardComponent/ProcessDetailsCard';
import ProcessVariablesCard from '../CardComponent/ProcessVariablesCard';
import TimelineCard from '../CardComponent/TimelineCard';

export interface IOwnProps {}
export interface IStateProps {}
export type combinedProps = IOwnProps & RouteComponentProps;

class InstanceDetailComponent extends React.Component<combinedProps, IStateProps> {
  constructor(props: combinedProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <PageSection>
          {/*Bread Crumb Component to be separated */}
          <div style={{ marginTop: '-14px', paddingBottom: '21px' }}>
            <Breadcrumb>
              <BreadcrumbItem to="#">Dashboard</BreadcrumbItem>
              <BreadcrumbItem to="#">Instances</BreadcrumbItem>
              <BreadcrumbItem to="#" isActive>
                Instance {this.props.match.params['processInstanceID']}
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          {/*Title of the instance detail page */}
          <div style={{ paddingBottom: '23px' }}>
            <Title headingLevel="h2" size="3xl">
              Instance {this.props.match.params['processInstanceID']}
            </Title>
          </div>
          <Grid gutter="md">
            <GridItem span={8} rowSpan={10}>
              <ProcessDiagramCard />
            </GridItem>
            <GridItem span={4} rowSpan={9}>
              <ProcessDetailsCard />
            </GridItem>
            <GridItem span={8} rowSpan={8}>
              <ProcessVariablesCard />
            </GridItem>
            <GridItem span={4} rowSpan={8}>
              <TimelineCard />
            </GridItem>
          </Grid>
        </PageSection>
      </React.Fragment>
    );
  }
}

export default InstanceDetailComponent;
