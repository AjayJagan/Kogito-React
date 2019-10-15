import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';
export interface IOwnProps {}
export interface IStateProps {}
const BreadcrumbComponent: React.FunctionComponent<IOwnProps> = () => {
    return (
      <Breadcrumb>
        <BreadcrumbItem>Section Home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section Landing
        </BreadcrumbItem>
      </Breadcrumb>
    );
}

export default BreadcrumbComponent;