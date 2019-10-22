import React, {useState} from 'react';
import {
  DataListItem,
  DataListItemRow,
  DataListToggle,
  DataListItemCells,
  DataListCell,
  DataListCheck,
  Checkbox,
  TextContent,
  Text,
  TextVariants,
  Button,
  DataListAction,
  Dropdown,
  KebabToggle,
  DropdownItem,
  DataListContent,
  DropdownPosition
} from '@patternfly/react-core';
import { Link } from 'react-router-dom';
// import DataListChild from '../DataListItemComponent/DataListItemChildComponent';
// import DataListItemChildComponent from '../DataListItemComponent/DataListItemChildComponent';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';

export interface IOwnProps {
  id: number;
  instanceID: string;
  instanceState: string;
  processID: string;
  parentInstanceID: string | null;
  client: any;
}
export interface IStateProps {
  isOpen: boolean;
  expanded: Array<string>;
  isChecked: boolean;
  isLoaded:boolean;
  childList:any;
}


const DataListItemComponent:React.FunctionComponent<IOwnProps> = (props) => {
  
  const GET_QUERY = gql`
  query getQuery($parentProcessInstanceId: String!){
  ProcessInstances(filter: { parentProcessInstanceId: $parentProcessInstanceId }) {
    id
    processId
    parentProcessInstanceId
    roles
    state
  }
}
`;

  const [expanded, setExpanded] = useState(['kie-datalist-toggle']);
  const [isOpen, setisOpen] = useState(false);
  const [isChecked, setisChecked] = useState(false);

  const parentProcessInstanceId = props.instanceID

  const {data, loading, error} = useQuery(GET_QUERY, {
    variables: { parentProcessInstanceId  },
  }); 

  const onSelect = event => {
    setisOpen((previsOpen) => !previsOpen)
  };

  const onCheckBoxClick = () => {
    console.log(isChecked);
    setisChecked(!isChecked);
  }

  const onToggle = isOpen => {
    console.log('inside toggle')
    setisOpen(isOpen);
  }

  const toggle = id => {
    const index = expanded.indexOf(id);
    const newExpanded =
      index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
    setExpanded(newExpanded)
  };

    const { id } = props;

    return (
      <React.Fragment>
        <DataListItem
          aria-labelledby="kie-datalist-item"
          isExpanded={!expanded.includes('kie-datalist-toggle')}
        >
          <DataListItemRow>
            <DataListToggle
              onClick={() => toggle('kie-datalist-toggle')}
              isExpanded={!expanded.includes('kie-datalist-toggle')}
              id="kie-datalist-toggle"
              aria-controls="kie-datalist-expand"
            />
            <DataListCheck
              aria-labelledby="width-kie-datalist-item"
              name="width-kie-datalist-item"
              checked={isChecked}
              onChange={() => {
                onCheckBoxClick();
              }}
            />
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  Instance {id} ({props.processID})
                </DataListCell>,
                <DataListCell key="secondary content">Chart to be added</DataListCell>,
                // this should be removed in favor of the action below... but I can't get the link to work on the action
                <DataListCell key="secondary content 2">
                  <Link to={'/instanceDetail/' + id}>
                    <Button variant="secondary">Old Details</Button>
                  </Link>
                </DataListCell>
              ]}
            />
            <DataListAction
              aria-labelledby="kie-datalist-item kie-datalist-action"
              id="kie-datalist-action"
              aria-label="Actions"
            >
              {/* <Button variant="secondary" component="a" href={'/instanceDetail/' + id}>
                Details
              </Button> */}
              <Link to={'/instanceDetail/' + id}>
                <Button variant="secondary">Details</Button>
              </Link>
            </DataListAction>
            <DataListAction
              aria-labelledby="kie-datalist-item kie-datalist-action"
              id="kie-datalist-action"
              aria-label="Actions"
            >
              <Dropdown
                isPlain
                position={DropdownPosition.right}
                isOpen={isOpen}
                onSelect={onSelect}
                toggle={<KebabToggle onToggle={onToggle} />}
                dropdownItems={[
                  <DropdownItem key={1}>Link</DropdownItem>,
                  <DropdownItem key={2} component="button">
                    Action
                  </DropdownItem>
                ]}
              />
            </DataListAction>
          </DataListItemRow>
          <DataListContent
            aria-label="Primary Content Details"
            id="kie-datalist-expand1"
            isHidden={expanded.includes('kie-datalist-toggle')}
          >
            {loading ? "Loading....." : data.ProcessInstances.map((child, index) => <DataListItemComponentWithApollo id={index}
              key={index}
              instanceState={child.state}
              instanceID={child.id}
              processID={child.processId}
              parentInstanceID={child.parentProcessInstanceId}/>)}
          </DataListContent>
        </DataListItem>
      </React.Fragment>
    );
}

const DataListItemComponentWithApollo = withApollo(DataListItemComponent as any);

export default DataListItemComponentWithApollo;