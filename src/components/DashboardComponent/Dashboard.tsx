import React from 'react';
import { Page, PageSidebar, SkipToContent } from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
import { Route } from 'react-router-dom';
import Overview from '../OverviewComponent/OverviewComponent';
import './Dashboard.css';
import InstanceDetailPage from '../InstanceDetails/InstanceDetailComponent';
import Navbar from '../NavComponent/NavComponent';
import HeaderComponent from '../PageHeaderComponent/HeaderComponent';
import BreadcrumbComponent from '../PageBreadcrumbComponent/BreadcrumbComponent';
export interface IOwnProps {}
export interface IStateProps {}
class Dashboard extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const pageId = 'main-content-page-layout-default-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>;

    return (
      <React.Fragment>
        <Page
          header={<HeaderComponent />}
          sidebar={<PageSidebar nav={<Navbar />} />}
          isManagedSidebar
          skipToContent={PageSkipToContent}
          breadcrumb={<BreadcrumbComponent />}
          mainContainerId={pageId}
          className="page"
        >
          <Route exact path="/instanceDetail" component={InstanceDetailPage} />
          <Route exact path="/" component={Overview} />
        </Page>
      </React.Fragment>
    );
  }
}

export default Dashboard;
