import React from 'react'
import { Toolbar, Typography, Link, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(()=>({
    navLinks: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    navLink: {
        color: '#2B2B2B'
    }
}))

export default function Navbar(props) {
    const classes = useStyles();

    return (
        <div>
            <Toolbar>
                <Typography className={classes.navLinks}>
                    {
                        props.navbarLinks.map(link => (
                        <Link to={link.to} className={classes.navLink}>{link.linkName}</Link>
                        ))
                    }
                </Typography>
            </Toolbar>
        </div>
    )
}
