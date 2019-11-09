import React, { useEffect } from 'react'

import {
    Link as RouterLink,
    useRouteMatch,
    Redirect,
} from 'react-router-dom'

import { connect } from 'react-redux'
import { getAllProjects as getAllProjectsAction } from '../actions/projectActions'

import {
    makeStyles,
    Grid,
    Link,
} from '@material-ui/core'

import ProjectCard from '../components/ProjectCard'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}))

export const AllProjectsPage = (props) => {
    const { isAuthenticated } = props

    const classes = useStyles()
    let { path, url } = useRouteMatch()
    
    useEffect( () => {
        props.getProjects()
    }, [] )
    const projects = props.projects !== undefined ? props.projects : []

    return (
        <section className="projects">
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
        </section>
    )
}

const mapStateToProps = ( state, ownProps ) => {
    const { user, projects } = state
    console.log(projects)
    return { 
        isAuthenticated: user.info.token !== undefined,
        projects: projects.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProjects: () => dispatch(getAllProjectsAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProjectsPage)