import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';
import { RouteComponentProps } from 'react-router';

export interface IOwnProps {}
export interface IStateProps {}
export type combinedProps = IOwnProps & RouteComponentProps;
class BreadcrumbComponent extends React.Component<combinedProps, IStateProps> {
  constructor(props: combinedProps) {
    super(props);
    console.log(this.props.match);
    this.state = {};
  }
  render() {
    return (
      <Breadcrumb>
        <BreadcrumbItem to="#">Dashboard</BreadcrumbItem>
        <BreadcrumbItem to="#">Instances</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Instance
        </BreadcrumbItem>
      </Breadcrumb>
    );
  }
}
export default BreadcrumbComponent;
