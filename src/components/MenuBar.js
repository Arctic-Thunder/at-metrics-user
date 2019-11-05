import React from 'react';
import {
    Link as RouterLink
} from 'react-router-dom'

import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Link,
 } from '@material-ui/core'

 import {
    Equalizer,
} from '@material-ui/icons'

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
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}))

export default function MenuBar() {
    const classes = useStyles()

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" className={classes.menuButton}>
                    <Equalizer />
                </Typography>
                <Typography align="left" variant="h6" className={classes.title}>
                    Arctic Thunder Metrics
                </Typography>
                <Link color='inherit' underline='none' to={`/login`} component={RouterLink}>
                    <Button variant="outlined" color="inherit" >Login</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}