import React from "react";
import { Container, Typography } from "@material-ui/core";

export default function Footer(props) {
  return (
    <footer>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center">{props.footerInfo.title}</Typography>
        <Typography variant="body1" align="center">{props.footerInfo.description}</Typography>
        <Typography variant="body2" color="textSeondary" align="center">{props.footerInfo.copyright}</Typography>
      </Container>
    </footer>
  );
}
