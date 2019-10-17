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
  ToolbarGroup,
  DropdownItem,
  Checkbox
} from '@patternfly/react-core';
import { FilterIcon } from '@patternfly/react-icons';
import _ from 'lodash';

export interface IOwnProps {
  isComplete: boolean;
  isActive: boolean;
  checkedArray: any;
  handleChange: any;
  filterClick: any;
}
export interface IStateProps {
  chipGroups: any;
  isOpen: boolean;
  checkedArray: Array<string>;
}

class DataListToolbarComponent extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {
      chipGroups: [],
      isOpen: false,
      checkedArray: []
    };
  }
  onToggle = isOpen => {
    this.setState({
      isOpen
    });
  };
  onSelect = event => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  onFilterClick = () => {
    this.props.filterClick();
    let chipArray = this.state.chipGroups;
    chipArray = [];
    chipArray.push({
      category: 'Status',
      chips: this.props.checkedArray
    });
    this.setState({
      chipGroups: chipArray
    });
  };

  render() {
    const dropDownList = [
      <DropdownItem key="link1" component="checkbox">
        <Checkbox
          label="  ACTIVE"
          aria-label="controlled checkbox example"
          id="check-1"
          name="isActiveChecked"
          onChange={this.props.handleChange}
          isChecked={this.props.isActive}
        />
      </DropdownItem>,
      <DropdownItem key="link2">
        <Checkbox
          label="COMPLETED"
          aria-label="controlled checkbox example"
          id="check-2"
          name="isCompletedChecked"
          onChange={this.props.handleChange}
          isChecked={this.props.isComplete}
        />
      </DropdownItem>,
      <DropdownItem key="link3">
        <Checkbox label="ERROR" aria-label="controlled checkbox example" id="check-3" name="check3" />
      </DropdownItem>,
      <DropdownItem key="link4">
        <Checkbox label="ABORTED" aria-label="controlled checkbox example" id="check-4" name="check4" />
      </DropdownItem>,
      <DropdownItem key="link5">
        <Checkbox label="SUSPENDED" aria-label="controlled checkbox example" id="check-5" name="check5" />
      </DropdownItem>
    ];
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
                  <DropdownToggle onToggle={this.onToggle}>
                    <FilterIcon /> &nbsp;&nbsp; Dropdown
                  </DropdownToggle>
                }
                isOpen={this.state.isOpen}
                dropdownItems={dropDownList}
              />
            </ToolbarItem>
            <ToolbarItem>
              <Button variant="primary" onClick={this.onFilterClick}>
                Apply Filter
              </Button>
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
