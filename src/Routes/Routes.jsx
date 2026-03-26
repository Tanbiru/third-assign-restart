import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AppsButton from '../Pages/AppsButton/AppsButton';
import AppDetails from '../Pages/AppDetails/AppDetails';
import Installation from '../Pages/Installation/Installation';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            loader:() => fetch('appData.json'),
            path:"/",
            Component: Home
        },
        {
          path: '/apps',
          loader:() => fetch('appData.json'),
          Component: AppsButton
        },
        {
          path: 'installation',
           loader:() => fetch('appData.json'),
          Component: Installation

        },
        {
          loader: () => fetch('appData.json'),
          path: '/appsDetails/:id',

          Component: AppDetails
        }

    ]
  },
]);