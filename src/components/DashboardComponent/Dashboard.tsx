import React from 'react';
import {
  Avatar,
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import AboutModalBox from '../AboutModalComponent/AboutModal';
import './Dashboard.css';
import Table from '../TableComponent/Table';
export interface IOwnProps {}
export interface IStateProps {
  isDropdownOpen: boolean;
  isKebabDropdownOpen: boolean;
  activeItem: number;
  instanceType: string;
}
interface IinstanceDetails {
  ACTIVE: string;
  COMPLETED: string;
  ABORTED: string;
  INERROR: string;
}
class Dashboard extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0,
      instanceType: ''
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

  onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  onCardClick = detail => event => {
    console.log(this.state.instanceType);
    this.setState({ instanceType: detail });
  };

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem } = this.state;
    const navItems = ['Services', 'Policy', 'Authentication', 'Network Services', 'Server'];
    const instanceDetail = { ACTIVE: '1258', COMPLETED: '1150', ABORTED: '50', INERROR: '58' };
    const PageNav = (
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
    const PageToolbar = (
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
    );
    const brand = <Brand src={require('../../static/kogito_logo_rgb.png')} alt="Kogito Logo"></Brand>;
    const Header = (
      <PageHeader
        logo={brand}
        toolbar={PageToolbar}
        avatar={<Avatar src={require('../../static/user.png')} alt="Avatar image" />}
        showNavToggle
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} />;
    const pageId = 'main-content-page-layout-default-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>;

    const PageBreadcrumb = (
      <Breadcrumb>
        <BreadcrumbItem>Section Home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section Landing
        </BreadcrumbItem>
      </Breadcrumb>
    );

    return (
      <React.Fragment>
        <Page
          header={Header}
          sidebar={Sidebar}
          isManagedSidebar
          skipToContent={PageSkipToContent}
          breadcrumb={PageBreadcrumb}
          mainContainerId={pageId}
        >
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Process Instances</Text>
              <Text component="p"></Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery gutter="md">
              {Object.keys(instanceDetail).map((detail, index) => (
                <GalleryItem key={index}>
                  <Card isHoverable onClick={this.onCardClick(detail)}>
                    <CardBody>{detail}</CardBody>
                    <CardBody>{instanceDetail[detail]}</CardBody>
                  </Card>
                </GalleryItem>
              ))}
            </Gallery>
          </PageSection>
          <PageSection variant={PageSectionVariants.light} noPadding={true}>
            <TextContent>
              <Text component="h1">Instance Details</Text>
              <Text component="p"></Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Table instanceType={this.state.instanceType}></Table>
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}

export default Dashboard;
