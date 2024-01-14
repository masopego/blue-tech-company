import React from "react";

import {
  ListItem,
  List as ListComponent,
  Box,
  Divider,
  ListItemText,
} from "@mui/material";

import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header/header";
import { ELEMENTS } from "./content/literals";

export const Strategy: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          p: "0px 20px",
        }}
      >
        {ELEMENTS.map((element, index) => (
          <>
            <ListComponent key={`list-${index}`}>
              <ListItem>
                <ListItemText primary={element.title} />
              </ListItem>
            </ListComponent>
            <Divider />

            {element.points.map((point, index) => (
              <ListComponent key={`point-${index}`}>
                <ListItem sx={{ fontWeight: "bold" }}>{point.title}:</ListItem>
                {point.descriptions.map((description, index) => (
                  <ListItem>{description}</ListItem>
                ))}
              </ListComponent>
            ))}
          </>
        ))}
      </Box>
      <Footer />
    </>
  );
};
