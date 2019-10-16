import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import ApiPage from '../pages/ApiPage'
import DashboardPage from '../pages/DashboardPage'
import ProjectsPage from '../pages/ProjectsPage'

import {
    CssBaseline,
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
 } from '@material-ui/core'

import SidePanel from './SidePanel'
import LoginDialog from './LoginDialog'

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

    const [open, setOpen] = React.useState(false)
    const handleClickLogin = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <Router>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.menuButton}>
                            Arctic Thunder
                        </Typography>
                        <Typography align="left" variant="h6" className={classes.title}>
                            TODO: WHAT AM I
                        </Typography>
                        <Button variant="outlined" color="inherit" onClick={handleClickLogin}>Login</Button>
                        <LoginDialog onClose={handleClose} open={open} />
                    </Toolbar>
                </AppBar>
                <SidePanel />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                        <Switch>
                            <Route exact path ="/">
                                <Typography h1>HOME PAGE</Typography>
                            </Route>
                            <Route path ="/dashboard">
                                <DashboardPage />
                            </Route>
                            <Route path="/projects">
                                <ProjectsPage />
                            </Route>
                            <Route path="/api">
                                <ApiPage />
                            </Route>
                        </Switch>
                </main>
            </Router>
        </div>
    )
}