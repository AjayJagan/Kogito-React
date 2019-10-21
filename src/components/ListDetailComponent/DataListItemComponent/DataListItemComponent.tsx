import React, { useState, useEffect } from 'react';
import {
  DataListItem,
  DataListItemRow,
  DataListToggle,
  DataListItemCells,
  DataListCell,
  DataListCheck,
  Button,
  DataListAction,
  Dropdown,
  KebabToggle,
  DropdownItem,
  DataListContent,
  DropdownPosition
} from '@patternfly/react-core';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { withApollo, useQuery, useApolloClient } from 'react-apollo';

export interface IOwnProps {
  id: number;
  instanceID: string;
  instanceState: string;
  processID: string;
  parentInstanceID: string | null;
  //client: any;
}
// export interface IStateProps {
//   isOpen: boolean;
//   expanded: Array<string>;
//   isChecked: boolean;
//   isLoaded: boolean;
//   childList: any;
// }

// class DataListItemComponent extends React.Component<IOwnProps, IStateProps> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       expanded: ['kie-datalist-toggle'],
//       isOpen: false,
//       isChecked: false,
//       isLoaded: false,
//       childList: []
//     };
//   }
//   async fetchData() {
//     const { client } = this.props;
//     const result = await client.query({
//       query: gql`
//         {
//           ProcessInstances(filter: { parentProcessInstanceId:"${this.props.instanceID}"}) {
//             id
//             processId
//             parentProcessInstanceId
//             roles
//             state
//           }
//         }
//       `
//     });
//     return result.data.ProcessInstances;
//   }
//   onSelect = event => {
//     this.setState(prevState => ({
//       isOpen: !prevState.isOpen
//     }));
//   };

//   onCheckBoxClick = () => {
//     this.state.isChecked
//       ? this.setState({ isChecked: !this.state.isChecked })
//       : this.setState({ isChecked: !this.state.isChecked });
//   };

//   onToggle = isOpen => {
//     this.setState({ isOpen });
//   };

//   toggle = async id => {
//     const expanded = this.state.expanded;
//     const index = expanded.indexOf(id);
//     const newExpanded =
//       index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
//     this.setState(() => ({ expanded: newExpanded }));
//     if (this.state.isLoaded) {
//     } else {
//       letinput childData = await this.fetchData();

//       this.setState({
//         childList: childData,
//         isLoaded: true
//       });
//     }
//   };

//   render() {
//     const { id } = this.props;

//     return (
//       <React.Fragment>
//         <DataListItem
//           aria-labelledby="kie-datalist-item"
//           isExpanded={!this.state.expanded.includes('kie-datalist-toggle')}
//         >
//           <DataListItemRow>
//             <DataListToggle
//               onClick={() => this.toggle('kie-datalist-toggle')}
//               isExpanded={!this.state.expanded.includes('kie-datalist-toggle')}
//               id="kie-datalist-toggle"
//               aria-controls="kie-datalist-expand"
//             />
//             <DataListCheck
//               aria-labelledby="width-kie-datalist-item"
//               name="width-kie-datalist-item"
//               checked={this.state.isChecked}
//               onChange={() => {
//                 this.onCheckBoxClick();
//               }}
//             />
//             <DataListItemCells
//               dataListCells={[
//                 <DataListCell key="primary content">
//                   Instance {id} ({this.props.processID})
//                 </DataListCell>,
//                 <DataListCell key="secondary content">Chart to be added</DataListCell>,
//                 // this should be removed in favor of the action below... but I can't get the link to work on the action
//                 <DataListCell key="secondary content 2">
//                   <Link to={'/instanceDetail/' + id}>
//                     <Button variant="secondary">Old Details</Button>
//                   </Link>
//                 </DataListCell>,
//                 <DataListCell key="secondary content 3">{this.props.instanceState}</DataListCell>
//               ]}
//             />

//             <DataListAction
//               aria-labelledby="kie-datalist-item kie-datalist-action"
//               id="kie-datalist-action"
//               aria-label="Actions"
//             >
//               {/* <Button variant="secondary" component="a" href={'/instanceDetail/' + id}>
//                 Details
//               </Button> */}
//               <Link to={'/instanceDetail/' + id}>
//                 <Button variant="secondary">Details</Button>
//               </Link>
//             </DataListAction>
//             <DataListAction
//               aria-labelledby="kie-datalist-item kie-datalist-action"
//               id="kie-datalist-action"
//               aria-label="Actions"
//             >
//               <Dropdown
//                 isPlain
//                 position={DropdownPosition.right}
//                 isOpen={this.state.isOpen}
//                 onSelect={this.onSelect}
//                 toggle={<KebabToggle onToggle={this.onToggle} />}
//                 dropdownItems={[
//                   <DropdownItem key={1}>Link</DropdownItem>,
//                   <DropdownItem key={2} component="button">
//                     Action
//                   </DropdownItem>
//                 ]}
//               />
//             </DataListAction>
//           </DataListItemRow>
//           <DataListContent
//             aria-label="Primary Content Details"
//             id="kie-datalist-expand1"
//             isHidden={this.state.expanded.includes('kie-datalist-toggle')}
//           >
//             {!this.state.isLoaded
//               ? 'Loading.....'
//               : this.state.childList.map((child, index) => (
//                   <DataListItemComponentWithApollo
//                     id={index}
//                     key={index}
//                     instanceState={child.state}
//                     instanceID={child.id}
//                     processID={child.processId}
//                     parentInstanceID={child.parentProcessInstanceId}
//                   />
//                 ))}
//           </DataListContent>
//         </DataListItem>
//       </React.Fragment>
//     );
//   }
// }

//const DataListItemComponentWithApollo = withApollo<IOwnProps>(DataListItemComponent);

const DataListItemComponent: React.FC<IOwnProps> = ({ id, instanceID, instanceState, processID, parentInstanceID }) => {
  const [expanded, setexpanded] = useState(['kie-datalist-toggle']);
  const [isOpen, setisOpen] = useState(false);
  const [isLoaded, setisLoaded] = useState(false);
  const [isChecked, setisChecked] = useState(false);
  const [childList, setchildList] = useState([]);
  const client = useApolloClient();
  const GET_CHILD_INSTANCES = gql`
  {
    ProcessInstances(filter: { parentProcessInstanceId:"${instanceID}"}) {
      id
      processId
      parentProcessInstanceId
      roles
      state
      }
        }
`;
  const onSelect = event => {
    setisOpen(isOpen ? false : true);
  };
  console.log(childList);
  const onCheckBoxClick = () => {
    setisChecked(isChecked ? false : true);
  };

  const onToggle = isOpen => {
    setisOpen(isOpen);
  };

  const toggle = async id => {
    const index = expanded.indexOf(id);
    const newExpanded =
      index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
    setexpanded(newExpanded);
    if (isLoaded) {
    } else {
      const data = await client.query({
        query: GET_CHILD_INSTANCES
      });
      setchildList(data['data']);
      setisLoaded(true);
    }
  };
  return (
    <React.Fragment>
      <DataListItem aria-labelledby="kie-datalist-item" isExpanded={expanded.includes('kie-datalist-toggle')}>
        <DataListItemRow>
          <DataListToggle
            onClick={() => toggle('kie-datalist-toggle')}
            isExpanded={expanded.includes('kie-datalist-toggle')}
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
                Instance {id} ({processID})
              </DataListCell>,
              <DataListCell key="secondary content">Chart to be added</DataListCell>,
              // this should be removed in favor of the action below... but I can't get the link to work on the action
              <DataListCell key="secondary content 2">
                <Link to={'/instanceDetail/' + id}>
                  <Button variant="secondary">Old Details</Button>
                </Link>
              </DataListCell>,
              <DataListCell key="secondary content 3">{instanceState}</DataListCell>
            ]}
          />

          <DataListAction
            aria-labelledby="kie-datalist-item kie-datalist-action"
            id="kie-datalist-action"
            aria-label="Actions"
          >
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
          {isLoaded &&
            childList['ProcessInstances'] != undefined &&
            childList['ProcessInstances'].map((child, index) => {
              console.log('i am a child', child);
              return (
                <DataListItemComponent
                  id={index}
                  key={index}
                  instanceState={child.state}
                  instanceID={child.id}
                  processID={child.processId}
                  parentInstanceID={child.parentProcessInstanceId}
                />
              );
            })}
        </DataListContent>
      </DataListItem>
    </React.Fragment>
  );
};

export default DataListItemComponent;
