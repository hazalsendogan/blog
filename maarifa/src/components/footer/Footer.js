import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
  footer: {
    backgroundColor:'#e8e8e8',
    padding:'30px 0'
  }
}))


export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center">{props.footerInfo.title}</Typography>
        <Typography variant="body1" align="center">{props.footerInfo.description}</Typography>
        <Typography variant="body2" color="textSecondary" align="center">{props.footerInfo.copyright}</Typography>
      </Container>
    </footer>
  );
}
