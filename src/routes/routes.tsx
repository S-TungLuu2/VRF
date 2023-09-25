/* eslint-disable max-len */
import Dashboard from 'src/pages/Trading/Dashboard';
import PrivateRoute from 'src/routes/PrivateRoute';
import routeConstants from 'src/routes/route.constants';

const routers = {
  dashboard: {
    exact: true,
    path: routeConstants.DASHBOARD,
    component: Dashboard,
    route: PrivateRoute,
  },
};
export default routers;
