import React from "react";

import {
  ListItem,
  List as ListComponent,
  Box,
  Divider,
  ListItemText,
} from "@mui/material";
import { StrengthElements } from "./content/strengthElements";

export const StrengthList: React.FC = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
      <ListComponent>
        <ListItem>
          <ListItemText
            primary="Fortalezas"
            sx={{ textDecoration: "underline" }}
          />
        </ListItem>
      </ListComponent>
      <Divider />
      <ListComponent>
        {StrengthElements.map((element, index) => (
          <ListItem disablePadding key={`threaten-${index}`}>
            <ListItemText primary={element} />
          </ListItem>
        ))}
      </ListComponent>
    </Box>
  );
};
