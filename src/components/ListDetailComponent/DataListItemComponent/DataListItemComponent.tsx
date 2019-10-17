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
import DataListChild from '../DataListItemComponent/DataListItemChildComponent';
import DataListItemChildComponent from '../DataListItemComponent/DataListItemChildComponent';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import query from './fetchQuery';

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

// constructor(props) {
//   super(props);
//     = {
//     expanded: ['kie-datalist-toggle'],
//     isOpen: false,
//     isChecked: false,
//     isLoaded: false,
//     childList: [],
//   };
// }

const DataListItemComponent:React.FunctionComponent<IOwnProps> = (props) => {

  const [expanded, setExpanded] = useState(['kie-datalist-toggle']);
  const [isOpen, setisOpen] = useState(false);
  const [isChecked, setisChecked] = useState(false);
  const [isLoaded, setisLoaded] = useState(false);
  const [childList, setChidList] = useState([]);

  const fetchData = async() => {
    const { client } =  props;
    console.log("client", client);
    console.log('id',props.instanceID)
    const {data, loading} = useQuery(query,{});
    console.log("inside the child",data)
    return data.ProcessInstances;
  }

  

  const onSelect = event => {
    setisOpen((previsOpen) => !previsOpen)

    //  setState(prevState => ({
    //   isOpen: !prevState.isOpen
    // }));
  };

  const onCheckBoxClick = () => {
    console.log(isChecked);
    setisChecked(!isChecked);
    //  .isChecked
    //   ?  setState({ isChecked: ! .isChecked })
    //   :  setState({ isChecked: ! .isChecked });
  }

  const onToggleMore = async () => {
    console.log('inside toggle')
    if (isLoaded) {
      console.log("the state is loaded")
    }
    else {
      console.log("state is not loaded")
      let childData = await fetchData();
      console.log('the childe data', childData)
      //  setState({
      //   childList: childData,
      //   isLoaded: true,
      // })
      setChidList(childData);
      setisLoaded(true);
    }
  }

  const onToggle = isOpen => {
    console.log('inside toggle')
    setisOpen(isOpen);
    //  setState({ isOpen });

  }

  const toggle = id => {
    // const expanded =  .expanded;
    const index = expanded.indexOf(id);
    const newExpanded =
      index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
    //  setState(() => ({ expanded: newExpanded }));
    setExpanded(newExpanded)
    onToggleMore()
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
            {!isLoaded ? "Loading....." : childList.map((child, index) => <DataListItemComponentWithApollo id={index}
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

const DataListItemComponentWithApollo = graphql(query)(DataListItemComponent as any);

export default DataListItemComponentWithApollo;