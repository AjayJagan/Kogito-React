import React from 'react';
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
import { withApollo } from 'react-apollo';

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

class DataListItemComponent extends React.Component<IOwnProps, IStateProps> {
  async fetchData() {
    const { client } = this.props;
    console.log("client", client);
    console.log('id',this.props.instanceID)
    const result = await client.query({
      query: gql`
        {
          ProcessInstances(filter: { parentProcessInstanceId:"${this.props.instanceID}"}) {
            id
            processId
            parentProcessInstanceId
            roles
            state
          }
        }
      `
    });
    console.log("inside the child",result)
    return result.data.ProcessInstances;
  }

  constructor(props) {
    super(props);
    this.state = {
      expanded: ['kie-datalist-toggle'],
      isOpen: false,
      isChecked: false,
      isLoaded: false,
      childList: [],
    };
  }

  onSelect = event => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  onCheckBoxClick = () => {
    console.log(this.state.isChecked);
    this.state.isChecked
      ? this.setState({ isChecked: !this.state.isChecked })
      : this.setState({ isChecked: !this.state.isChecked });
  }

  onToggleMore = async () => {
    console.log('inside toggle')
    if (this.state.isLoaded) {
      console.log("the state is loaded")
    }
    else {
      console.log("state is not loaded")
      let childData = await this.fetchData();
      console.log('the childe data', childData)
      this.setState({
        childList: childData,
        isLoaded: true,
      })
    }
  }

  onToggle = isOpen => {
    console.log('inside toggle')
    this.setState({ isOpen });

  }

  toggle = id => {
    const expanded = this.state.expanded;
    const index = expanded.indexOf(id);
    const newExpanded =
      index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
    this.setState(() => ({ expanded: newExpanded }));
    this.onToggleMore()
  };

  render() {
    const { id } = this.props;

    return (
      <React.Fragment>
        <DataListItem
          aria-labelledby="kie-datalist-item"
          isExpanded={!this.state.expanded.includes('kie-datalist-toggle')}
        >
          <DataListItemRow>
            <DataListToggle
              onClick={() => this.toggle('kie-datalist-toggle')}
              isExpanded={!this.state.expanded.includes('kie-datalist-toggle')}
              id="kie-datalist-toggle"
              aria-controls="kie-datalist-expand"
            />
            <DataListCheck
              aria-labelledby="width-kie-datalist-item"
              name="width-kie-datalist-item"
              checked={this.state.isChecked}
              onChange={() => {
                this.onCheckBoxClick();
              }}
            />
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  Instance {id} ({this.props.processID})
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
                isOpen={this.state.isOpen}
                onSelect={this.onSelect}
                toggle={<KebabToggle onToggle={this.onToggle} />}
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
            isHidden={this.state.expanded.includes('kie-datalist-toggle')}
          >
            {!this.state.isLoaded ? "Loading....." : this.state.childList.map((child, index) => <DataListItemComponentWithApollo id={index}
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
}

const DataListItemComponentWithApollo = withApollo<IOwnProps>(DataListItemComponent as any);

export default DataListItemComponentWithApollo;
