import React, {useState} from 'react';
import { DataList, PageSection, Card } from '@patternfly/react-core';
import ScrollArea from 'react-scrollbar';
import './DataList.css';
import DataListTitleComponent from '../DataListTitleComponent/DataListTitleComponent';
import DataListToolbarComponent from '../DataListToolbarComponent/DataListToolbarComponent';
import DataListItemComponent from '../DataListItemComponent/DataListItemComponent';
import { graphql } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
import query from './fetchQuery';

export interface IOwnProps {}
export interface IStateProps {
  dataListItemArray: any;
  initData: any;
  loading: boolean;
}

const DataListComponent:React.FunctionComponent<IOwnProps> = (props) => {
   
    const [dataListArray, setDataListArray] = useState([]);
    const [initData, setInitData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async (props: any) =>{
        // const { client } = props;
        const {data, loading} = useQuery(query,{});
        setInitData(data.ProcessInstances);
        setLoading(loading);
      }


//       useQuery(mutation,{
//         variables: {
//             title: title
//         },
//         refetchQueries: [{ query: query }]
//     }).then(()=> hashHistory.push('/'))
// }
    fetchData(props);

    return (
      <React.Fragment>
        <DataListTitleComponent />
        <PageSection>
          <Card>
            <DataListToolbarComponent />
            <DataList aria-label="Expandable data list example">
              <ScrollArea smoothScrolling={true} className="scrollArea">
                {/* {...this.state.initData} */}
                {loading?"loading...": initData.map((item,index)=>{
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

export default graphql(query)(DataListComponent as any);