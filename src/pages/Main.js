import React from 'react'

import {
    Route,
    Switch,
} from 'react-router-dom'

import {
    makeStyles,
    CssBaseline,
} from '@material-ui/core'

import MenuBar from '../components/MenuBar'
import SidePanel from '../components/SidePanel'
import ApiPage from './ApiPage'
import DashboardPage from './DashboardPage'
import ProjectsPage from './ProjectsPage'
import WelcomePage from './WelcomePage'
import ProjectDetailPage from './ProjectDetailPage'


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

export default function MainPage() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <MenuBar />
            <SidePanel />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route exact path ="/" component={WelcomePage} />
                    <Route path ="/dashboard" component={DashboardPage} />
                    <Route path="/projects" component={ProjectsPage} />
                    <Route path="projects/:project_id" component={ProjectDetailPage} />
                    <Route path="/api" component={ApiPage} />
                    <Route path="/about" component={WelcomePage} />
                </Switch>
            </main>
        </div>
    )
}

