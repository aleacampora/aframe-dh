import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routes';

//questo mapper gestisce tutte le rotte
export const RouteMapper = () => {
  return routes.map((route, index) => (
    <Route key={index} path={route.path} element={route.element} />
  ));
};

