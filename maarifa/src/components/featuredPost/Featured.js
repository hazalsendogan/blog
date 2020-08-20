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
        justifyContent: 'space-between',
        marginBottom: '30px'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      flexBasis: '60%',
      justifyContent: 'space-between'
    },
    cardContent: {
        flex: 1,
    },
    cardMedia: {
        width: '150px',
    }
}))

export default function Featured(props) {
    const classes = useStyles();
  return (
    <div>
      <CardActionArea>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" className={classes.cardTitle}>{props.post.title}</Typography>
              <Typography variant="subtitle1" className={classes.cardTitle} color="textSecondary">{props.post.description}</Typography>
              <Typography variant="subtitle2" className={classes.cardTitle} color="textSecondary">{props.post.date}</Typography>
              <Link>{props.post.link}</Link>
            </CardContent>
          </div>
          <CardMedia component="img" image={props.post.imageURL} className={classes.cardMedia}></CardMedia>
        </Card>
      </CardActionArea>
    </div>
  );
}
