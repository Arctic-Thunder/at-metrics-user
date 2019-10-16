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
} from '@material-ui/core'

import ProjectCard from '../components/ProjectCard'

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
    
    const classes = useStyles()
    let { path, url } = useRouteMatch()

    return (
        <section className="projects">
            <Grid
                container
                spacing={4}
                direction="row"
                justify="flex-start"
            >
                {projectdata.map((data) => (
                    <Grid item>
                        <Link underline='none' to={`${url}/${data.id}`} component={RouterLink}>
                            <ProjectCard name={data.name} description={data.description}/>
                        </Link>
                    </Grid>
            ))}
            </Grid>
        </section>
    )
}