import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Header } from "../../components/Header/header";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";
import { ARTICLES } from "./content/articles";
import { Footer } from "../../components/Footer/footer";

export const Board: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    route: string
  ) => {
    e.preventDefault();
    navigate(route);
  };

  return (
    <>
      <Header />
      <List
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {ARTICLES.map((article, index) => (
          <ListItem key={`article-${index}`} sx={{ maxWidth: 345 }}>
            <Card>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={article?.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={(e) => handleNavigation(e, article.route)}
                >
                  Saber más
                </Button>
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
      <Footer />
    </>
  );
};
