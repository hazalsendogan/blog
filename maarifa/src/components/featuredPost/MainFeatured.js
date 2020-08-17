import React from "react";
import { Typography, Paper, makeStyles, Grid, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeatured(props) {
  const classes = useStyles();
  return (
    <div>
      <Paper
        className={classes.mainFeaturedPost}
        style={{ backgroundImage: `url(${props.mainFeaturedPost.imageURL})` }}
      >
        {
          <img
            style={{ display: "none" }}
            src={props.mainFeaturedPost.imageURL}
            alt={props.mainFeaturedPost.imageText}
          />
        }
        <div className={classes.overlay}></div>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {props.mainFeaturedPost.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {props.mainFeaturedPost.description}
              </Typography>
              <Link variant="subtitle1" href="#">
                {props.mainFeaturedPost.link}
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
