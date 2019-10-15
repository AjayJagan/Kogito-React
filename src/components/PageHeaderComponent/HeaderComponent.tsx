import React from 'react';
import { PageHeader } from '@patternfly/react-core';
import Avatar from '../AvatarComponent/AvatarComponent';
import PageToolbarComponent from '../PageToolbarComponent/PageToolbarComponent';
import { Link } from 'react-router-dom';
import BrandComponent from '../BrandComponent/BrandComponent';
export interface IOwnProps {}
export interface IStateProps {}

const HeaderComponent:React.FunctionComponent<IOwnProps> = () => {
    return (
      <PageHeader
        logo={<Link to="/">{<BrandComponent />}</Link>}
        toolbar={<PageToolbarComponent />}
        avatar={<Avatar />}
        showNavToggle
      />
    );
}

export default HeaderComponent;