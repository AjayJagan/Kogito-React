import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownToggleCheckbox,
  Button,
  ChipGroup,
  ChipGroupToolbarItem,
  Chip
} from '@patternfly/react-core';
import { FilterIcon } from '@patternfly/react-icons';

export interface IOwnProps {}
export interface IStateProps {
  chipGroups: Array<{ category: string; chips: Array<string> }>;
}

class DataListToolbarComponent extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {
      chipGroups: [
        {
          category: 'Active',
          chips: ['Chip 8', 'Chip 3', 'Chip 5']
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="styleToolBar" style={{ display: 'flex', paddingTop: '20px', paddingLeft: '22px' }}>
          <div>
            <Dropdown
              toggle={
                <DropdownToggle
                  splitButtonItems={[
                    <DropdownToggleCheckbox id="example-checkbox-1" key="split-checkbox" aria-label="Select all" />
                  ]}
                />
              }
            />
          </div>
          <div>
            <Dropdown
              toggle={
                <DropdownToggle>
                  <FilterIcon /> &nbsp;&nbsp; Dropdown
                </DropdownToggle>
              }
              isGrouped
            />
          </div>
          <div>
            <Button variant="primary">Apply Filter</Button>
          </div>
          <div>
            <ChipGroup withToolbar>
              {this.state.chipGroups.map(currentGroup => (
                <ChipGroupToolbarItem key={currentGroup.category} categoryName={currentGroup.category}>
                  {currentGroup.chips.map(chip => (
                    <Chip key={chip}>{chip}</Chip>
                  ))}
                </ChipGroupToolbarItem>
              ))}
            </ChipGroup>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DataListToolbarComponent;
