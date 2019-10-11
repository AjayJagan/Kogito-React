import React from 'react';
import { DataList, PageSection, Card } from '@patternfly/react-core';
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
      tempArray.push(<DataListItemComponent id={i} />);
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
          <Card>
          <DataListToolbarComponent />
          <DataList aria-label="Expandable data list example">
            <ScrollArea smoothScrolling={true}>
              {...this.state.dataListItemArray}
            </ScrollArea>
          </DataList>
          </Card>

        </PageSection>
      </React.Fragment>
    );
  }
}

export default DataListComponent;
