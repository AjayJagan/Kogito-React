import React from 'react';
import { DataList, PageSection, Card } from '@patternfly/react-core';
import ScrollArea from 'react-scrollbar';
import './DataList.css';
import DataListTitleComponent from '../DataListTitleComponent/DataListTitleComponent';
import DataListToolbarComponent from '../DataListToolbarComponent/DataListToolbarComponent';
import DataListItemComponent from '../DataListItemComponent/DataListItemComponent';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';

export interface IOwnProps {}
export interface IStateProps {
  dataListItemArray: any;
  initData: any;
  loading: boolean;
  isCompletedChecked: boolean;
  isActiveChecked: boolean;
  checkedArray: any;
  filterArray: any;
}

class DataListComponent extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {
      dataListItemArray: [],
      initData: null,
      loading: true,
      isActiveChecked: false,
      isCompletedChecked: false,
      checkedArray: [],
      filterArray: []
    };
    this.fetchData(props);
  }
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
      loading: result.loading,
      filterArray: result.data.ProcessInstances
    });
  }
  handleChange = (checked, event) => {
    if (event.target.name == 'isActiveChecked') {
      this.setState(prevState => ({
        isActiveChecked: !prevState.isActiveChecked
      }));
      if (!this.state.isActiveChecked == true) {
        this.setState(prevState => ({
          checkedArray: [...prevState.checkedArray, 'ACTIVE']
        }));
      } else if (!this.state.isActiveChecked == false) {
        let tempArr = this.state.checkedArray.slice();
        let temp = 'ACTIVE';
        _.remove(tempArr, function(temp) {
          return temp == 'ACTIVE';
        });
        this.setState({
          checkedArray: tempArr
        });
      }
    }
    if (event.target.name == 'isCompletedChecked') {
      this.setState(prevState => ({
        isCompletedChecked: !prevState.isCompletedChecked
      }));
      if (!this.state.isCompletedChecked == true) {
        this.setState(prevState => ({
          checkedArray: [...prevState.checkedArray, 'COMPLETED']
        }));
      } else if (!this.state.isCompletedChecked == false) {
        let tempArr = this.state.checkedArray.slice();
        let temp = 'COMPLETED';
        _.remove(tempArr, function(temp) {
          return temp == 'COMPLETED';
        });
        this.setState({
          checkedArray: tempArr
        });
      }
    }
  };
  onFilterClick = () => {
    let tempArr = [];
    this.state.checkedArray.map(check => {
      this.state.initData.map(data => {
        if (data.state.toString().toLowerCase() == check.toString().toLowerCase()) {
          tempArr.push(data);
        }
      });
    });
    this.setState({
      filterArray: tempArr
    });
  };
  render() {
    return (
      <React.Fragment>
        <DataListTitleComponent />
        <PageSection>
          <Card>
            <DataListToolbarComponent
              isActive={this.state.isActiveChecked}
              isComplete={this.state.isCompletedChecked}
              handleChange={this.handleChange}
              checkedArray={this.state.checkedArray}
              filterClick={this.onFilterClick}
            />
            <DataList aria-label="Expandable data list example">
              <ScrollArea smoothScrolling={true} className="scrollArea">
                {/* {...this.state.initData} */}
                {this.state.loading
                  ? 'loading...'
                  : this.state.filterArray.map((item, index) => {
                      return (
                        <DataListItemComponent
                          id={index}
                          key={index}
                          instanceState={item.state}
                          instanceID={item.id}
                          processID={item.processId}
                          parentInstanceID={item.parentProcessInstanceId}
                        />
                      );
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
