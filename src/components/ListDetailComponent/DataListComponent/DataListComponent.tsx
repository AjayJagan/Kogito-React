import React from 'react';
import { DataList, PageSection } from '@patternfly/react-core';
import ScrollArea from 'react-scrollbar';
import './DataList.css';
import DataListTitleComponent from '../DataListTitleComponent/DataListTitleComponent';
import DataListToolbarComponent from '../DataListToolbarComponent/DataListToolbarComponent';
import DataListItemComponent from '../DataListItemComponent/DataListItemComponent';

export interface IOwnProps {}
export interface IStateProps {
  dataListItemArray: any;
}

class DataListComponent extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {
      dataListItemArray: []
    };
  }

  componentDidMount() {
    let tempArray = [];
    for (let i = 1; i < 20; i++) {
      tempArray.push(<DataListItemComponent id={i} key={i} />);
    }
    this.setState({
      dataListItemArray: tempArray
    });
  }

  render() {
    return (
      <React.Fragment>
        <DataListTitleComponent />
        <PageSection>
          <DataList aria-label="Expandable data list example">
            <DataListToolbarComponent />
            <ScrollArea smoothScrolling={true} style={{ width: '100%', height: '620px' }}>
              {...this.state.dataListItemArray}
            </ScrollArea>
          </DataList>
        </PageSection>
      </React.Fragment>
    );
  }
}

export default DataListComponent;
