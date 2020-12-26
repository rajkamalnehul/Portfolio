/** @format */

import React, { useState } from "react";
import "./projects.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function ImgMediaCard() {
  const [loader, setLoader] = useState(true);
  const useStyles = makeStyles({
    root: {
      maxWidth: "max-content",
      maxHeight: "max-content",
      margin: 10,
      background: " linear-gradient(145deg, #bdc8d7, #e1eeff)",
      boxShadow:
        " 3px 3px 6px  rgba(18, 18, 19, 0.288),  -3px -3px 6px #E5F2FF",
    },
    media: {
      height: "auto",
      maxWidth: "100%",
      visibility: loader ? "hidden" : "",
    },
    object: {
      display: loader ? "" : "none",
    },
  });
  const classes = useStyles(loader);

  setTimeout(() => {
    setLoader(false);
  }, 5000);

  return (
    <div className="container">
      <h1>My Work</h1>
      <div className="hr_line">
        <div className="hr_inner"></div>
      </div>

      <div className="projects">
        <Card className={classes.root}>
          <CardActionArea>
            <LinearProgress color="primary" className={classes.object} />
            <CardMedia
              className={classes.media}
              component="img"
              alt="E-Commerce"
              height="140"
              image={require("../assets/amazon.png")}
              title="Amazon Clone"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Amazon Clone
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              style={{ textDecoration: "none" }}
              href="https://silly-villani-899ac9-amazon-clone.netlify.app/"
              target="_blank"
            >
              <Button size="small" color="primary">
                View Demo
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/rajkamalnehul/amazon-clone"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                Source Code
              </Button>
            </a>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <LinearProgress color="primary" className={classes.object} />
            <CardMedia
              className={classes.media}
              component="img"
              alt="Clone"
              height="140"
              image={require("../assets/whatsapp.png")}
              title="Whatsapp Clone"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Whatsapp Clone
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              style={{ textDecoration: "none" }}
              href="https://brave-darwin-whatsapp-clone.netlify.app/"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                View Demo
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/rajkamalnehul/Whatsapp-Clone"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                Source Code
              </Button>
            </a>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <LinearProgress color="primary" className={classes.object} />
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
            <a
              style={{ textDecoration: "none" }}
              href="https://sharp-curran-crownecommerce.netlify.app"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                View Demo
              </Button>
            </a>

            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/rajkamalnehul/ecommerce"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                Source Code
              </Button>
            </a>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <LinearProgress color="primary" className={classes.object} />
            <CardMedia
              className={classes.media}
              component="img"
              alt="taskboard"
              height="140"
              image={require("../assets/taskboard2.0.png")}
              title="Taskboard"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Task Board 2.0
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              style={{ textDecoration: "none" }}
              href="https://dreamy-snyder-42175c.netlify.app"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                View Demo
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/rajkamalnehul/TaskBoard-2.0"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                Source Code
              </Button>
            </a>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <LinearProgress color="primary" className={classes.object} />
            <CardMedia
              className={classes.media}
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
            <a
              style={{ textDecoration: "none" }}
              href="https://pensive-jennings-covid19tracker.netlify.app"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                View Demo
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/rajkamalnehul/covid19tracker"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                Source Code
              </Button>
            </a>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <LinearProgress color="primary" className={classes.object} />
            <CardMedia
              className={classes.media}
              component="img"
              alt="Portfolio"
              height="140"
              image={require("../assets/Portfolio.png")}
              title="Portfolio"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Basic Portfolio
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              style={{ textDecoration: "none" }}
              href="https://rajkamalnehul.github.io/Assignment1-Portfolio-/"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                View Demo
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/rajkamalnehul/Assignment1-Portfolio-"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                Source Code
              </Button>
            </a>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <LinearProgress color="primary" className={classes.object} />

            <CardMedia
              className={classes.media}
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
            <a
              style={{ textDecoration: "none" }}
              href="https://keen-hugle-275442-appointments.netlify.app"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                View Demo
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/rajkamalnehul/Appointments"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                Source Code
              </Button>
            </a>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <LinearProgress color="primary" className={classes.object} />
            <CardMedia
              className={classes.media}
              component="img"
              alt="figma"
              height="140"
              image={require("../assets/figma.png")}
              title="Figma"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Figma to React
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              style={{ textDecoration: "none" }}
              href="https://eager-kepler-198536-figma-to-webapp.netlify.app"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                View Demo
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/rajkamalnehul/starwisp-task"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                Source Code
              </Button>
            </a>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <LinearProgress color="primary" className={classes.object} />
            <CardMedia
              className={classes.media}
              component="img"
              alt="monster-rolodex"
              height="140"
              image={require("../assets/monster.png")}
              title="monster-rolodex"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Monster Rolodex
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              style={{ textDecoration: "none" }}
              href="https://serene-jepsen-monster-rolodex.netlify.app"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                View Demo
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/rajkamalnehul/MonsterRolodex"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                Source Code
              </Button>
            </a>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <LinearProgress color="primary" className={classes.object} />
            <CardMedia
              className={classes.media}
              component="img"
              alt="taskboard"
              height="140"
              image={require("../assets/taskboard.png")}
              title="taskboard"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Task Board
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1NgVXe65JLYmfpz5l4Ak3_KXA7aI5LdPa/view?usp=sharing"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                View Demo
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/rajkamalnehul/TaskBoard"
              target="_blank"
            >
              {" "}
              <Button size="small" color="primary">
                Source Code
              </Button>
            </a>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
