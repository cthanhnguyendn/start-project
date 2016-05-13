import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from 'container/App';
import SimpleListComponent from 'container/SimpleListComponent';
import PrivatePage from 'container/PrivatePage';
import LoginForm from '../ui/component/LoginForm';
import privateRoute from 'router/privateRoute';
import UserManagementPage from '../ui/container/UserManagementPage'

export default (onLogout) => (
  <Route path="/" name="app" component={App}>
    <IndexRoute component={SimpleListComponent}/>
    <Route path="private" component={privateRoute(PrivatePage)}/>
    <Route path="login" component={LoginForm}/>
    <Route path="logout" onEnter={onLogout}/>
    <Route path="users" component={UserManagementPage}/>
  </Route>
);
