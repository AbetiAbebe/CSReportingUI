import React from 'react';
import Home from "../pages/home";
import { IRoute } from './route-interface';

const ROUTES:IRoute[] = [
  {
    path: '/',
  id: 'ROOT',
    exact: true,
    component: Home
  },
  {
    path: '/app',
    exact:false,
    id: 'APP',
    component: () => <h1>App</h1>,
    routes: [],
  },
];

export default ROUTES;
