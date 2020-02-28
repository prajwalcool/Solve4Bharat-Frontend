import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import UserMenu from "app/layouts/sharedComponents/UserMenu";
import { FormatListBulletedOutlined } from "@material-ui/icons";
import { IconButton, Button } from "@material-ui/core";

function ToolbarLayout1(props) {
  return (
    <div className="important ">
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton className="" color="inherit">
            <FormatListBulletedOutlined />
          </IconButton>
          <h1 className="flex-1 text-center font-pecita">Alphers</h1>
          <a href="https://localhost:5000">
            <Button variant="outlined" color="inherit">
              Take a Curated Quiz
            </Button>
          </a>

          <div>
            <UserMenu />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ToolbarLayout1;
