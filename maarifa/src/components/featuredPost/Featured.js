import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Link,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(()=>({
    card: {
        display: 'flex',
        flexFlow:'row nowrap',
        alignItems: 'stretch'
    },
    cardTitle: {
      lineHeight:1.5
  },
   
    cardContent: {
        flex:1,
    },
    cardMedia: {
        width: '150px',
        height: '200px'
    }
}))

export default function Featured(props) {
    const classes = useStyles();
  return (
    <div>
      <CardActionArea>
        <Card className={classes.card}>
          <div className={classes.cardContent}>
            <CardContent>
              <Typography variant="h6" className={classes.cardTitle}>{props.post.title}</Typography>
              <Typography variant="subtitle1" className={classes.cardTitle}>{props.post.description}</Typography>
              <Typography variant="subtitle2" className={classes.cardTitle}>{props.post.date}</Typography>
              <Link>{props.post.link}</Link>
            </CardContent>
          </div>
          <CardMedia component="img" image={props.post.imageURL} className={classes.cardMedia}></CardMedia>
        </Card>
      </CardActionArea>
    </div>
  );
}
