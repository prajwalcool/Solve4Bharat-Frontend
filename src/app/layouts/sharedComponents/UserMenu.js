import React, { useState } from "react";
import { Grow, MenuList, IconButton, MenuItem, Paper } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useDebounce } from "@app/hooks";

import { Manager, Reference, Popper } from "react-popper";

function UserMenu(props) {
  const [opened, setOpened] = useState(false);
  const handleToggle = useDebounce(open => {
    setOpened(open);
  }, 150);
  return (
    <Manager>
      <Reference>
        {({ ref }) => {
          return (
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              ref={ref}
              onMouseEnter={() => handleToggle(true)}
              onMouseLeave={() => handleToggle(false)}
              aria-owns={opened ? "menu-list-grow" : null}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          );
        }}
      </Reference>
      <Popper eventsEnabled={opened} positionFixed>
        {({ ref, style, placement, arrowProps }) => {
          return (
            <div
              ref={ref}
              data-placement={placement}
              style={{ ...style, zIndex: 999 }}
            >
              <Grow in={opened}>
                <Paper
                  onMouseEnter={() => handleToggle(true)}
                  onMouseLeave={() => handleToggle(false)}
                >
                  <Paper>
                    <MenuList className="text-black">
                      <MenuItem>Profile</MenuItem>
                      <MenuItem>My account</MenuItem>
                      <MenuItem>Logout</MenuItem>
                    </MenuList>
                  </Paper>
                </Paper>
              </Grow>
            </div>
          );
        }}
      </Popper>
    </Manager>
  );
}

export default UserMenu;
