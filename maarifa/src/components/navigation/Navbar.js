import React from 'react'
import { Toolbar, Link, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(()=>({
    navLinks: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    navLink: {
        color: '#6554C0',
        fontFamily: 'Nunito',
    }
}))

export default function Navbar(props) {
    const classes = useStyles();

    return (
        <div>
            <Toolbar>
                <div className={classes.navLinks}>
                    {
                        props.navbarLinks.map(link => (
                        <Link key={link.linkName} className={classes.navLink}>{link.linkName}</Link>
                        ))
                    }
                </div>
            </Toolbar>
        </div>
    )
}
