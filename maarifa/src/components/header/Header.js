import React from 'react'
import { Toolbar, Typography, makeStyles, Link } from '@material-ui/core'
// import { Link } from 'react-router-dom'

const useStyles = makeStyles(()=>({
    toolbarContainer: {
        borderBottom: '1px solid #6554C0'
    },
    toolbarTitle: {
        fontFamily: 'Nunito',
        flex: 1
    },
    toolbarLink: {
        paddingRight: '10px',
        fontFamily: 'Nunito',
        '&:last-child': {
            paddingRight: 0
        }
    }
}))


function Header(props) {
    const classes = useStyles();
    return (
        <header>
            <Toolbar className={classes.toolbarContainer}>
                <Typography variant="h6" color="primary" className={classes.toolbarTitle}>
                    {props.headerInfo.title}
                </Typography>
                <div>
                    {
                        props.headerInfo.menuLink.map(link => (
                        <Link key={link.linkName} className={classes.toolbarLink}>{link.linkName}</Link>
                        ))
                    }
                </div>
            </Toolbar>
        </header>
    )
}


export default Header

