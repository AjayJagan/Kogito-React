import React from 'react';
import {
  Button,
  ButtonVariant,
  Dropdown,
  DropdownToggle,
  KebabToggle,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  DropdownItem,
  DropdownSeparator
} from '@patternfly/react-core';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import AboutModalBox from '../AboutModalComponent/AboutModal';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
export interface IOwnProps {}
export interface IStateProps {
  isKebabDropdownOpen: boolean;
  isDropdownOpen: boolean;
  isModalOpen: boolean;
}
export default class PageToolbarComponent extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {
      isKebabDropdownOpen: false,
      isDropdownOpen: false,
      isModalOpen: false
    };
  }
  onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = event => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };
  onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };
  onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };
  handleModalToggle = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen
    }));
  };
  render() {
    const { isModalOpen } = this.state;
    const { isDropdownOpen, isKebabDropdownOpen } = this.state;
    const kebabDropdownItems = [
      <DropdownItem key={1}>
        <BellIcon /> Notifications
      </DropdownItem>,
      <DropdownItem key={2}>
        <CogIcon /> Settings
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownItem key={1} onClick={this.handleModalToggle}>
        About
      </DropdownItem>,
      <DropdownSeparator key={2} />,
      <DropdownItem component="button" key={3}>
        Log out
      </DropdownItem>
    ];
    return (
      <div>
        <AboutModalBox isOpenProp={this.state.isModalOpen} handleModalToggleProp={this.handleModalToggle} />
        <Toolbar>
          <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
            <ToolbarItem>
              <Button id="default-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
                <BellIcon />
              </Button>
            </ToolbarItem>
            <ToolbarItem>
              <Button id="default-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
                <CogIcon />
              </Button>
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
              <Dropdown
                isPlain
                position="right"
                onSelect={this.onKebabDropdownSelect}
                toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
                isOpen={isKebabDropdownOpen}
                dropdownItems={kebabDropdownItems}
              />
            </ToolbarItem>
            <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
              <Dropdown
                isPlain
                position="right"
                onSelect={this.onDropdownSelect}
                isOpen={isDropdownOpen}
                toggle={<DropdownToggle onToggle={this.onDropdownToggle}>User</DropdownToggle>}
                dropdownItems={userDropdownItems}
              />
            </ToolbarItem>
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
