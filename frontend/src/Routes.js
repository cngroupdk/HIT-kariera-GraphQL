import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AboutPage } from 'src/pages/AboutPage';
import { HomePage } from 'src/pages/HomePage';
import { PageNotFound } from 'src/pages/PageNotFound';
import { SignInPage } from 'src/pages/SignInPage';
import { SignUpPage } from 'src/pages/SignUpPage';
import { UserDetailPage } from 'src/pages/UserDetailPage';

export const route = {
  home: () => `/`,
  practical: (id) => `/practical/${id}`,
  about: () => `/about`,
  signIn: () => `/auth/signin`,
  signUp: () => `/auth/signup`,
  userDetail: (userName) => `/${userName}`,
};

export const PRACTICALS = [];

export function Routes() {
  return (
    <Switch>
      <Route path={route.home()} exact component={HomePage} />
      <Route path={route.about()} exact component={AboutPage} />
      <Route path={route.signIn()} exact component={SignInPage} />
      <Route path={route.signUp()} exact component={SignUpPage} />
      <Route
        path={route.userDetail(':userName')}
        exact
        component={UserDetailPage}
      />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}
