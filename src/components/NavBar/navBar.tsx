import React from "react";

import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import Box from "@mui/material/Box";

import { Listbox, MenuButton, MenuItem } from "./navBar.style";

import { MENU } from "./content/menu";
import { Link, useNavigate } from "react-router-dom";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const onSubMenuClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    route: string
  ) => {
    e.preventDefault();
    navigate(route);
  };

  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      {MENU.map((menu, index) => (
        <Dropdown key={`menu-${index}`}>
          <MenuButton>
            <Link to={menu.link}>{menu.title}</Link>
          </MenuButton>
          {menu.submenus.length !== 0 && (
            <Menu slots={{ listbox: Listbox }}>
              {menu.submenus.map((submenu, index) => (
                <MenuItem
                  key={`submenu-${index}`}
                  onClick={(ev) => onSubMenuClick(ev, submenu.link)}
                >
                  {submenu.title}
                </MenuItem>
              ))}
            </Menu>
          )}
        </Dropdown>
      ))}
    </Box>
  );
};
