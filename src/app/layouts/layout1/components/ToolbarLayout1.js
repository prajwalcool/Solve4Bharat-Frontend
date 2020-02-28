import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import UserMenu from "app/layouts/sharedComponents/UserMenu";
import { FormatListBulletedOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function ToolbarLayout1(props) {
  return (
    <div className="important ">
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton className="" color="inherit">
            <FormatListBulletedOutlined />
          </IconButton>
          <h2 className="flex-1 text-center font-pecita">Alphers</h2>
          <div>
            <UserMenu />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ToolbarLayout1;
