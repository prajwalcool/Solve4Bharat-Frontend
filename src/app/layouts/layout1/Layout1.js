import React, { useContext } from "react";
import { renderRoutes } from "react-router-config";
import AppContext from "app/AppContext";
import ToolbarLayout1 from "./components/ToolbarLayout1";
function Layout1(props) {
  const appContext = useContext(AppContext);

  const { routes } = appContext;
  return (
    <div>
      <ToolbarLayout1 />
      <div className="container-fluid">
        {renderRoutes(routes)}
        {props.children}
      </div>
    </div>
  );
}

export default Layout1;
