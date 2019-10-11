import React from 'react';
import {
  DataListItem,
  DataListItemRow,
  DataListToggle,
  DataListItemCells,
  DataListCell,
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

export interface IOwnProps {
  id: number;
}
export interface IStateProps {
  isOpen: boolean;
  expanded: Array<string>;
}

class DataListItemComponent extends React.Component<IOwnProps, IStateProps> {
  onToggle: (isOpen: boolean) => void;
  onSelect: (event: any) => void;

  constructor(props) {
    super(props);
    this.state = {
      expanded: ['ex-toggle'],
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({ isOpen });
    };
    this.onSelect = event => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    };
  }

  render() {
    const toggle = id => {
      const expanded = this.state.expanded;
      const index = expanded.indexOf(id);
      const newExpanded =
        index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
      this.setState(() => ({ expanded: newExpanded }));
    };
    const { id } = this.props;

    return (
      <React.Fragment>
        <DataListItem aria-labelledby="ex-item" isExpanded={!this.state.expanded.includes('ex-toggle')}>
          <DataListItemRow>
            <DataListToggle
              onClick={() => toggle('ex-toggle')}
              isExpanded={!this.state.expanded.includes('ex-toggle')}
              id="ex-toggle"
              aria-controls="ex-expand"
            />

            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <div style={{ display: 'flex' }}>
                    <div style={{ paddingTop: '8px', paddingRight: '16px' }}>
                      <Checkbox label="" aria-label="controlled checkbox example" id="check" name="check" />
                    </div>
                    <TextContent>
                      <Text component={TextVariants.p}>Instance {id}</Text>
                    </TextContent>
                  </div>
                </DataListCell>,
                <DataListCell key="secondary content">
                  <div>Chart To Added</div>
                </DataListCell>,
                <DataListCell key="Tertiary content ">
                  <div style={{ paddingLeft: '300px' }}>
                    <Link to={'/instanceDetail/' + id}>
                      <Button variant="secondary">Details</Button>
                    </Link>
                  </div>
                </DataListCell>
              ]}
            />
            <DataListAction aria-labelledby="ex-item1 ex-action1" id="ex-action" aria-label="Actions">
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
            id="ex-expand1"
            isHidden={this.state.expanded.includes('ex-toggle')}
            key={5}
          >
            <p>More Information to be added here</p>
          </DataListContent>
        </DataListItem>
      </React.Fragment>
    );
  }
}

export default DataListItemComponent;
