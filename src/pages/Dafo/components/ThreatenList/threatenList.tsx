import React from "react";

import {
  ListItem,
  List as ListComponent,
  Box,
  Divider,
  ListItemText,
} from "@mui/material";
import { ThreatenElements } from "./content/threatenElements";

export const ThreatenList: React.FC = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
      <ListComponent>
        <ListItem>
          <ListItemText
            primary="Amenazas"
            sx={{ textDecoration: "underline" }}
          />
        </ListItem>
      </ListComponent>
      <Divider />
      <ListComponent>
        {ThreatenElements.map((element, index) => (
          <ListItem disablePadding key={`threaten-${index}`}>
            <ListItemText primary={element} />
          </ListItem>
        ))}
      </ListComponent>
    </Box>
  );
};
