/* eslint-disable max-len */
import Dashboard from 'src/pages/Dashboard/Dashboard';
import Home from 'src/pages/Home/Home';
import TreemapDemo from 'src/pages/TreeMapDemo/TreemapDemo';
import PrivateRoute from 'src/routes/PrivateRoute';
import routeConstants from 'src/routes/route.constants';

const routers = {
  dashboard: {
    exact: true,
    path: routeConstants.DASHBOARD,
    component: Dashboard,
    route: PrivateRoute,
  },
  home: {
    exact: true,
    path: routeConstants.HOME,
    component: Home,
    route: PrivateRoute,
  },
  treemap: {
    exact: true,
    path: routeConstants.TREEMAP,
    component: TreemapDemo,
    route: PrivateRoute,
  },
};
export default routers;
