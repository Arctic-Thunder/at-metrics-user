import React from 'react'

import {
    Link as RouterLink,
    Route,
    useRouteMatch,
    Switch
} from 'react-router-dom'

import {
    makeStyles,
    Grid,
    Link,
    Typography,
    Button,
} from '@material-ui/core'

import ProjectDetailPage from '../pages/ProjectDetailPage'
import ProjectCard from '../components/ProjectCard'
import paramCase from 'param-case'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}))

export default function ProjectsPage() {
    const projectdata = [
        {id: "0", name: "Project 1", description: "My first project"},
        {id: "3", name: "Project 2", description: "My second project"},
        {id: "8", name: "Project 3", description: "My third project"},
        {id: "13", name: "Project 4", description: "My fourth project"},
        {id: "55", name: "Project 5", description: "My fifth project"},
        {id: "103", name: "Project 6", description: "My sixth project"},
        {id: "344", name: "Project 7", description: "My seventh project"},
    ]

    const breadcrumbNameMap = {
        '/projects': 'Projects',
        '/projects/:project_id': ""
      };
    
    const classes = useStyles()
    let { path, url } = useRouteMatch()

    return (
        <section className="projects">
            <Switch>
                <Route exact path="/projects">
                    <Grid
                    container
                    spacing={4}
                    direction="row"
                    justify="flex-start"
                    >
                        {projectdata.map((project) => (
                            <Grid item>
                                <Link underline='none' to={`${url}/${project.id}`} component={RouterLink}>
                                    <ProjectCard project={project}/>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Route>
                <Route path="/projects/:project_id">
                    <ProjectDetailPage />
                </Route>
            </Switch>
        </section>
    )
}