import React from 'react';
import { Avatar } from '@patternfly/react-core';
export interface IOwnProps {}
export interface IStateProps {}
const userImage = require('../../static/user.png');

const AvatarComponent:React.FunctionComponent<IOwnProps> = () => {
    return <Avatar src={userImage} alt="Kogito Logo"></Avatar>;
}

export default AvatarComponent;