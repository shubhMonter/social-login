import React from 'react';

const Home = React.lazy(() => import('./pages/home'));
const Facebook = React.lazy(()=>import('./pages/Dashboard/Facebook'));
const Google = React.lazy(()=>import("./pages/Dashboard/Google"));




const routes = [
  { path: '/', exact: true, name: 'Home' , component: Home},
  { path: '/facebook', name: 'facebook', component: Facebook },
  { path: '/google', name: 'google', component: Google },

];

export default routes