import React from 'react';
import { Nav, NavItem, NavList } from '@patternfly/react-core';
export interface IOwnProps {}
export interface IStateProps {
  activeItem: number;
}
export default class NavComponent extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
  }
  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };
  render() {
    const { activeItem } = this.state;
    const navItems = ['Services', 'Policy', 'Authentication', 'Network Services', 'Server'];
    return (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          {navItems.map((navItem, index) => (
            <NavItem itemId={index} isActive={activeItem === index}>
              {navItem}
            </NavItem>
          ))}
        </NavList>
      </Nav>
    );
  }
}
