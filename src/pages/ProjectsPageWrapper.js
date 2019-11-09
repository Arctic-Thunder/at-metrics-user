import React, { useEffect } from 'react'

import {
    Link as RouterLink,
    Route,
    useRouteMatch,
    Switch,
    Redirect,
} from 'react-router-dom'

import { connect } from 'react-redux'
import { getAllProjects as getAllProjectsAction } from '../actions/projectActions'

import {
    makeStyles,
} from '@material-ui/core'

import ProjectDetailPage from './ProjectDetailPage'
import AllProjectsPage from './AllProjectsPage'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}))

export const ProjectsPageWrapper = (props) => {
    const { isAuthenticated } = props

    const classes = useStyles()
    
    const renderRedirect = () => {
        if(!isAuthenticated) {
            return( <Redirect to="/login" /> )
        }
    }

    return (
        <section className="projects">
            {renderRedirect()}
            <Switch>
                <Route exact path="/projects">
                    <AllProjectsPage />
                </Route>
                <Route path="/projects/:project_id" children={({ match }) => (
                    <ProjectDetailPage project_id={match.params.project_id} />
                )}
                />
            </Switch>
        </section>
    )
}

const mapStateToProps = ( state ) => 
{
    const { user } = state
    return { 
        isAuthenticated: user.info.token !== undefined,
    }
}

export default connect(mapStateToProps)(ProjectsPageWrapper)