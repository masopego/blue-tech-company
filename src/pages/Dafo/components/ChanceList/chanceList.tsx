import React from "react";

import {
  ListItem,
  List as ListComponent,
  Box,
  Divider,
  ListItemText,
} from "@mui/material";
import { ChanceElements } from "./content/chanceElements";

export const ChanceList: React.FC = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
      <ListComponent>
        <ListItem>
          <ListItemText
            primary="Oportunidades"
            sx={{ textDecoration: "underline" }}
          />
        </ListItem>
      </ListComponent>
      <Divider />
      <ListComponent>
        {ChanceElements.map((element, index) => (
          <ListItem disablePadding key={`threaten-${index}`}>
            <ListItemText primary={element} />
          </ListItem>
        ))}
      </ListComponent>
    </Box>
  );
};
