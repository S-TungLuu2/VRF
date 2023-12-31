import React, { FC } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

interface Props {
  component: typeof React.Component;
  auth: boolean;
}

const PrivateRoute: FC<Props> = ({ component: Component, auth = true, ...rest }) => (
  <Route
    {...rest}
    render={(props: RouteComponentProps) => (auth ? <Component {...props} /> : <Redirect to={'/'} />)}
    // render={(props: RouteComponentProps) => <Component {...props} />}
  />
);

export default PrivateRoute;
