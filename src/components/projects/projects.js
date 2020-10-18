import React from "react";
import "./projects.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: "max-content",
    maxHeight: "max-content",
    margin: 10,
    background: " linear-gradient(145deg, #bdc8d7, #e1eeff)",
    boxShadow: " 3px 3px 6px  rgba(18, 18, 19, 0.288),  -3px -3px 6px #E5F2FF",
  },
  media: {},
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className="container">
      <h1>My Work</h1>
      <div className="hr_line">
        <div className="hr_inner"></div>
      </div>

      <div className="projects">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              alt="E-Commerce"
              height="140"
              image={require("../assets/ecom0.png")}
              title="e-commerce web app"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                E-Commerce
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View Demo
            </Button>
            <Button size="small" color="primary">
              Source Code
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Covid-19 Tracker"
              height="140"
              image={require("../assets/corona.png")}
              title="Covid-19 Tracker"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Covid-19 Tracker
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View Demo
            </Button>
            <Button size="small" color="primary">
              Source Code
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Appointment"
              height="140"
              image={require("../assets/apt0.png")}
              title="Appointment"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Pet Appointment
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              VIEW DEMO
            </Button>
            <Button size="small" color="primary">
              SOURCE CODE
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Portfolio"
              height="140"
              image={require("../assets/Portfolio.png")}
              title="Portfolio"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Portfolio
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View Demo
            </Button>
            <Button size="small" color="primary">
              Source Code
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
