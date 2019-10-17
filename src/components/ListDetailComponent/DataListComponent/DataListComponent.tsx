import React from 'react';
import { DataList, PageSection, Card } from '@patternfly/react-core';
import ScrollArea from 'react-scrollbar';
import DataListTitleComponent from '../DataListTitleComponent/DataListTitleComponent';
import DataListToolbarComponent from '../DataListToolbarComponent/DataListToolbarComponent';
import DataListItemComponent from '../DataListItemComponent/DataListItemComponent';
import { withApollo } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export interface IOwnProps {}
export interface IStateProps {
  dataListItemArray: any;
  initData: any;
  loading: boolean;
}

const DataListComponent:React.FunctionComponent<IOwnProps> = (props) => {

  const GET_QUERY = gql`
  query {
      ProcessInstances(filter: { parentProcessInstanceId: null }) {
        id
        processId
        parentProcessInstanceId
        roles
        state
      }
  }`;
  
    const{data, loading, error} = useQuery(GET_QUERY);
    if (error) return `Error! ${error.message}`;

    return (
      <React.Fragment>
        <DataListTitleComponent />
        <PageSection>
          <Card>
            <DataListToolbarComponent />
            <DataList aria-label="Expandable data list example">
              <ScrollArea smoothScrolling={true} className="scrollArea">  

                {/* {...this.state.initData} */}
                { !loading && data && data.ProcessInstances.map((item,index)=>{
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

export default withApollo(DataListComponent as any);