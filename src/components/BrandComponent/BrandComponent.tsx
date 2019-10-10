import React from 'react';
import { Brand } from '@patternfly/react-core';
export interface IOwnProps {}
export interface IStateProps {}
const logo = require('../../static/kogito_logo_rgb.png');
export default class BrandComponent extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Brand src={logo} alt="Kogito Logo"></Brand>;
  }
}
