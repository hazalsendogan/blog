import React from "react";
import { Typography, Paper, makeStyles, Link, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  aboutSection: {
    backgroundColor: "#F3F3F3",
    marginBottom: "15px",
    border: '1px solid #E8E8E8',
    padding: '8px' 
  },
  archiveSection: {
    marginBottom: "15px",
  },
  archiveLink: {
    display: "block",
    marginBottom: "10px",
    '&:last-child': {
      marginBottom: 0
    }
  },
  socialLink: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px',
  }
}));

export default function Aside(props) {
  const classes = useStyles();
  return (
    <aside>
      <Paper className={classes.aboutSection} elevation={0}>
        <Typography variant="h6" color="textPrimary">{props.asideInfo.about.title}</Typography>
        <Typography variant="body1" color="textSecondary">
          {props.asideInfo.about.description}
        </Typography>
      </Paper>
      <Paper className={classes.archiveSection} elevation={0}>
        <Typography variant="h6" color="textPrimary">{props.asideInfo.archives.title}</Typography>
        <div>
          {props.asideInfo.archives.archiveLinks.map((link) => (
            <Link key={link.title} to={link.to} className={classes.archiveLink}>
              {link.title}
            </Link>
          ))}
        </div>
      </Paper>
      <Paper elevation={0}>
        <Typography variant="h6" color="textPrimary">{props.asideInfo.socials.title}</Typography>
        <Typography>
          {props.asideInfo.socials.socialLinks.map((network) => (
            <Link display="block" variant="body1" to={network.to} key={network}>
              <span className={classes.socialLink}>
                <network.icon />
                <span>{network.title}</span>
              </span>
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
