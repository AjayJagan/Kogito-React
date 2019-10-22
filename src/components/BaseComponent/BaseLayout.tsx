import * as React from 'react';
import LoginPage from '../LoginComponent/LoginPage';
import Dashboard from '../DashboardComponent/Dashboard';
import ProcessDetailsPage from '../Templates/ProcessDetailsPage/ProcessDetailsPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export interface IOwnProps {}

const BaseLayout: React.FunctionComponent<IOwnProps> = (props) => {
    return (
      <div>
        <LoginPage>
          <BrowserRouter>
            <Switch>
            {/* <Route path="/" component={Dashboard} /> */}
              <Route path="/" component={ProcessDetailsPage} />
            </Switch>
          </BrowserRouter>
        </LoginPage>
      </div>
    );
}


export default BaseLayout;