import React from 'react'
import { Toolbar, Typography, makeStyles, Link } from '@material-ui/core'
// import { Link } from 'react-router-dom'

const useStyles = makeStyles(()=>({
    toolbarContainer: {
        borderBottom: '1px solid #2B2B2B'
    },
    toolbarTitle: {
        flex: 1
    },
    toolbarLink: {
        paddingRight: '10px'
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
                <Typography color="primary">
                    {
                        props.headerInfo.menuLink.map(link => (
                        <Link to={link.to} className={classes.toolbarLink}>{link.linkName}</Link>
                        ))
                    }
                </Typography>
            </Toolbar>
        </header>
    )
}


export default Header

