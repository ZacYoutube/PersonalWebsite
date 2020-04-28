import React from 'react';
import { Redirect } from "react-router-dom";
import { Route } from 'react-router-dom';


// auth
const Project = React.lazy(() => import('./component/Project'));
const Home = React.lazy(()=>import('./component/Home'));

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route {...rest} render={props => {
    // authorised so return component
    return <Component {...props} />
  }} />
)

const routes = [
  // auth and account
  { path: '/project', name: 'Project', component: Project, route: Route },
  { path: '/home', name: 'Home', component: Home, route: Route },
 
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />,
    route: PrivateRoute
  },

]

export { routes, PrivateRoute };
