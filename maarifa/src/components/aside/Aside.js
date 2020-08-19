import React from "react";
import { Typography, Paper, makeStyles, Link, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  aboutSection: {
    backgroundColor: "#949494",
    marginBottom: "15px",
  },
  archiveSection: {
    marginBottom: "15px",
  },
  archiveLink: {
    display: "block",
    marginBottom: "10px",
  },
}));

export default function Aside(props) {
  const classes = useStyles();
  return (
    <aside>
      <Paper className={classes.aboutSection}>
        <Typography variant="h6">{props.asideInfo.about.title}</Typography>
        <Typography variant="body1">
          {props.asideInfo.about.description}
        </Typography>
      </Paper>
      <Paper className={classes.archiveSection} elevation={0}>
        <Typography variant="h6">{props.asideInfo.archives.title}</Typography>
        <div>
          {props.asideInfo.archives.archiveLinks.map((link) => (
            <Link key={link.title} to={link.to} className={classes.archiveLink}>
              {link.title}
            </Link>
          ))}
        </div>
      </Paper>
      <Paper elevation={0}>
        <Typography variant="h6">{props.asideInfo.socials.title}</Typography>
        <Typography>
          {props.asideInfo.socials.socialLinks.map((network) => (
            <Link display="block" variant="body1" to={network.to} key={network}>
              <span>
                <network.icon />
              </span>
              <span>{network.title}</span>
            </Link>
          ))}
        </Typography>
      </Paper>
    </aside>
  );
}

// Aside.propTypes = {
//     archives: PropTypes.array,
//     description: PropTypes.string,
//     social: PropTypes.array,
//     title: PropTypes.string,
//   };
