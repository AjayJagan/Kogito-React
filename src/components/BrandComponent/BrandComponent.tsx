import React from 'react';
import { Brand } from '@patternfly/react-core';
export interface IOwnProps {}
export interface IStateProps {}
const logo = require('../../static/kogito_logo_rgb.png');

const BrandComponent:React.FunctionComponent<IOwnProps> = (props) => {
    return <Brand src={logo} alt="Kogito Logo"></Brand>;
}

export default BrandComponent;