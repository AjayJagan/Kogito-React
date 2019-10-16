import React from 'react';
import { DataList, PageSection, Card } from '@patternfly/react-core';
import ScrollArea from 'react-scrollbar';
import './DataList.css';
import DataListTitleComponent from '../DataListTitleComponent/DataListTitleComponent';
import DataListToolbarComponent from '../DataListToolbarComponent/DataListToolbarComponent';
import DataListItemComponent from '../DataListItemComponent/DataListItemComponent';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

export interface IOwnProps {}
export interface IStateProps {
  dataListItemArray: any;
  initData: any;
  loading: boolean;
}

class DataListComponent extends React.Component<IOwnProps, IStateProps> {
  async fetchData(props: any) {
    const { client } = props;
    const result = await client.query({
      query: gql`
        {
          ProcessInstances(filter: { parentProcessInstanceId: null }) {
            id
            processId
            parentProcessInstanceId
            roles
            state
          }
        }
      `
    
    });
    this.setState({
      initData: result.data.ProcessInstances,
      loading: result.loading
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      dataListItemArray: [],
      initData: null,
      loading: true
    };
    this.fetchData(props);
  }
  render() {
    return (
      <React.Fragment>
        <DataListTitleComponent />
        <PageSection>
          <Card>
            <DataListToolbarComponent />
            <DataList aria-label="Expandable data list example">
              <ScrollArea smoothScrolling={true} className="scrollArea">
                {/* {...this.state.initData} */}
                {this.state.loading?"loading...":this.state.initData.map((item,index)=>{
                  return <DataListItemComponent id={index}
                    key={index}
                    instanceState={item.state}
                    instanceID={item.id}
                    processID={item.processId}
                    parentInstanceID={item.parentProcessInstanceId}/>
                })}
              </ScrollArea>
            </DataList>
          </Card>
        </PageSection>
      </React.Fragment>
    );
  }
}

export default withApollo(DataListComponent as any);
