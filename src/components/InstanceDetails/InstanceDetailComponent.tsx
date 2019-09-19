import React from 'react';
import './InstanceDetail.css';
import { PageSection, TextContent } from '@patternfly/react-core';
import { Grid, GridItem } from '@patternfly/react-core';
import { WarningTriangleIcon, SyncIcon, UserIcon, CheckCircleIcon } from '@patternfly/react-icons';
import Cards from '../CardComponent/Card';
import CardsSmall from '../CardComponent/CardSmall';
import CardsBig from '../CardComponent/CardBig';
import CardsActivity from '../CardComponent/CardActivity';

export interface IOwnProps {}
export interface IStateProps {}

class InstanceDetail extends React.Component<IOwnProps, IStateProps> {
  render() {
    const activeTaskData = {
      Header: 'Active Task',
      Active: <CheckCircleIcon color="#3ac93d" />,
      Deployment: 'Staging',
      'Definition Version': '1.0',
      'Correlation Key': '200100',
      'Parent Process Instance': 'N/A'
    };
    const DocumentData = {
      Header: 'Documents',
      Document1: 'Created 3 days ago By Aimee',
      Document2: 'Created 1 week ago by Cameron'
    };
    const activeTaskData1 = {
      Header1: 'Active Task',
      'Task Name': 'Call Customer',
      Started: 'Nov 20, 2017 15:39',
      'Definition Version': '1.0',
      Asignee: 'aperson'
    };
    return (
      <React.Fragment>
        <PageSection>
          <TextContent>
            <Grid gutter="md">
              <GridItem span={3} rowSpan={12}>
                <div className="pf-l-flex pf-m-column" data-label=".pf-m-column">
                  <Cards cardDetails={activeTaskData} />
                  <Cards cardDetails={DocumentData} />
                </div>
              </GridItem>
              <GridItem span={2} rowSpan={1}>
                <CardsSmall
                  icon={<WarningTriangleIcon color="red" size="sm" />}
                  overviewText={'300 Unacknowledged'}
                  smallText={'Errors'}
                />
              </GridItem>
              <GridItem span={2} rowSpan={1}>
                <CardsSmall
                  icon={<SyncIcon color="#808080" size="sm" />}
                  overviewText={'150 Active'}
                  smallText={'Jobs'}
                />
              </GridItem>
              <GridItem span={2} rowSpan={1}>
                <CardsSmall icon={<UserIcon color="#808080" size="sm" />} overviewText={'5 User'} smallText={'Tasks'} />
              </GridItem>
              <GridItem span={3} rowSpan={12}>
                <div className="pf-l-flex pf-m-column" data-label=".pf-m-column">
                  <Cards cardDetails={activeTaskData1} />
                  <CardsActivity />
                </div>
              </GridItem>
              <GridItem span={6} rowSpan={12}>
                <CardsBig />
              </GridItem>
            </Grid>
          </TextContent>
        </PageSection>
      </React.Fragment>
    );
  }
}

export default InstanceDetail;
