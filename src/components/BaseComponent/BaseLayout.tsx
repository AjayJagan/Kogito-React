import * as React from 'react';
import LoginPage from '../LoginComponent/LoginPage';
export interface IOwnProps {}

interface IStateProps {}

export default class BaseLayout extends React.Component<IOwnProps, IStateProps> {
  render() {
    return (
      <div>
        <LoginPage></LoginPage>
      </div>
    );
  }
}
