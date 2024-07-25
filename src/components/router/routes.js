import React from 'react';
import { SScene } from '../VR/SScene';
import { TScene } from '../VR/TScene';
import { ARFrameBody } from '../AR/ARFrameRender';
import Homepage from '../../pages/Homepage';
import PageNF from '../../pages/PageNF';
import { Navigate } from 'react-router-dom';
import { FScene } from '../VR/FScene';

//tutte le rotte definite dell'app
const routes = [
  { path: '/', element: <Homepage /> },
  { path: '/aframe-dh', element: <Navigate to="/" replace /> }, 
  { path: '/scene1', element: <FScene /> },
  { path: '/scene2', element: <SScene /> },
  { path: '/scene3', element: <TScene /> },
  { path: '/scene4', element: <ARFrameBody /> },
  { path: '*', element: <PageNF /> },
];

export default routes;
