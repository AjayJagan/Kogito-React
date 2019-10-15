import React, {useState} from 'react';
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
}

const PageToolbarComponent: React.FunctionComponent<IOwnProps> = () => {

  const [isKebabDropdownOpen, setKebabDropdownOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  
  const onDropdownToggle = isDropdownOpen => {
    setDropdownOpen(isDropdownOpen);
  };

  const onDropdownSelect = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const onKebabDropdownSelect = () => {
    setKebabDropdownOpen(!isKebabDropdownOpen);
  };
  const onKebabDropdownToggle = isKebabDropdownOpen => {
    setKebabDropdownOpen(isKebabDropdownOpen);
  };
    const kebabDropdownItems = [
      <DropdownItem>
        <BellIcon /> Notifications
      </DropdownItem>,
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownItem component={AboutModalBox} key={1}>
        About
      </DropdownItem>,
      <DropdownSeparator />,
      <DropdownItem component="button" key={2}>
        Log out
      </DropdownItem>
    ];
    return (
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
              onSelect={onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={onDropdownToggle}>User</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
}

export default PageToolbarComponent;