import DashBoard from "./DashBoard";
import R from "./R";
// import { authRoles } from "app/auth";

export const DashBoardConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  // auth: authRoles.user,
  routes: [
    {
      path: "/dashboard",
      component: DashBoard
    },
    {
      path: "/r",
      component: R
    }
  ]
};

/**
 * Lazy load Example
 */
/*
import React from 'react';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};
*/
