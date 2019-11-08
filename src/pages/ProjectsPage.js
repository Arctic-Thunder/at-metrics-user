import React from 'react'

import {
    Link as RouterLink,
    Route,
    useRouteMatch,
    Switch,
    Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'

import {
    makeStyles,
    Grid,
    Link,
} from '@material-ui/core'

import ProjectDetailPage from '../pages/ProjectDetailPage'
import ProjectCard from '../components/ProjectCard'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}))

export const ProjectsPage = (props) => {
    const breadcrumbNameMap = {
        '/projects': 'Projects',
        '/projects/:project_id': ""
      };
    const projects = props.projects

    const classes = useStyles()
    let { path, url } = useRouteMatch()
    
    const renderRedirect = () => {
        if(!props.isAuthenticated) {
            console.log("Redirect Loaded")
            return( <Redirect to="/login" /> )
        }
    }

    return (
        <section className="projects">
            {renderRedirect()}
            <Switch>
                <Route exact path="/projects">
                    <Grid
                    container
                    spacing={4}
                    direction="row"
                    justify="flex-start"
                    >
                        {projects.map((project, index) => (
                            <Grid item>
                                <Link key={index} underline='none' to={`${url}/${project.id}`} component={RouterLink}>
                                    <ProjectCard project={project}/>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Route>
                <Route path="/projects/:project_id" children={({ match }) => (
                    <ProjectDetailPage project_id={match.params.project_id} />
                )}
                />
            </Switch>
        </section>
    )
}

const mapStateToProps = ( state, ownProps ) => 
{
    const { user, projects } = state
    console.log(state)
    return { 
        isAuthenticated: user.info.token !== undefined,
        projects: projects
    }
}

export default connect(mapStateToProps)(ProjectsPage)