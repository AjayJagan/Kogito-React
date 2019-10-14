import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownToggleCheckbox,
  Button,
  ChipGroup,
  ChipGroupToolbarItem,
  Chip,
  Toolbar,
  ToolbarItem,
  ToolbarGroup
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
        <Toolbar className="pf-u-justify-content-space-between pf-u-mx-xl pf-u-my-md">
          <ToolbarGroup>
          <ToolbarItem>
            <Dropdown
              toggle={
                <DropdownToggle
                  splitButtonItems={[
                    <DropdownToggleCheckbox id="example-checkbox-1" key="split-checkbox" aria-label="Select all" />
                  ]}
                />
              }
            />
          </ToolbarItem>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarItem>
              <Dropdown
                toggle={
                  <DropdownToggle>
                    <FilterIcon /> &nbsp;&nbsp; Dropdown
                  </DropdownToggle>
                }
                isGrouped
              />
            </ToolbarItem>
            <ToolbarItem>
              <Button variant="primary">Apply Filter</Button>
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarItem>
              <ChipGroup withToolbar>
                {this.state.chipGroups.map(currentGroup => (
                  <ChipGroupToolbarItem key={currentGroup.category} categoryName={currentGroup.category}>
                    {currentGroup.chips.map(chip => (
                      <Chip key={chip}>{chip}</Chip>
                    ))}
                  </ChipGroupToolbarItem>
                ))}
              </ChipGroup>
            </ToolbarItem>
          </ToolbarGroup>
        </Toolbar>
      </React.Fragment>
    );
  }
}

export default DataListToolbarComponent;
