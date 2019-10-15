import React from 'react'
import {
    CssBaseline,
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
 } from '@material-ui/core'

 import MenuIcon from '@material-ui/icons/Menu'
 import SidePanel from './SidePanel'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

export default function MenuBar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.menuButton}>
                        Arctic Thunder
                    </Typography>
                    <Typography align="left" variant="h6" className={classes.title}>
                        TODO: WHAT AM I
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <SidePanel />
        </div>
    )
}