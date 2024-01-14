import React from "react";

import {
  ListItem,
  List as ListComponent,
  Box,
  Divider,
  ListItemText,
} from "@mui/material";
import { WeaknessElements } from "./content/weaknessElements";

export const WeaknessList: React.FC = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
      <ListComponent>
        <ListItem>
          <ListItemText
            primary="Debilidades"
            sx={{ textDecoration: "underline" }}
          />
        </ListItem>
      </ListComponent>
      <Divider />
      <ListComponent>
        {WeaknessElements.map((element, index) => (
          <ListItem disablePadding key={`threaten-${index}`}>
            <ListItemText primary={element} />
          </ListItem>
        ))}
      </ListComponent>
    </Box>
  );
};
