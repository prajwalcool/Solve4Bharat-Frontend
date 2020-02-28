import React from "react";
import { Redirect } from "react-router-dom";
import { AppUtils } from "@app";
import { DashBoardConfig } from "app/main/dashboard/DashBoardConfig";
const routeConfigs = [DashBoardConfig];

const routes = [
  ...AppUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: "/",
    component: () => <Redirect to="/dashboard" />
  }
];

export default routes;
