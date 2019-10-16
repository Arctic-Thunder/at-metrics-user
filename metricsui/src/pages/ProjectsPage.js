import React from 'react'

import {
    makeStyles,
    Grid
} from '@material-ui/core'

import ProjectCard from '../components/ProjectCard'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}))

export default function ProjectsPage() {
    const projectdata = [
        {name: "Project 1", description: "My first project"},
        {name: "Project 2", description: "My second project"},
        {name: "Project 3", description: "My third project"},
        {name: "Project 4", description: "My fourth project"},
        {name: "Project 5", description: "My fifth project"},
        {name: "Project 6", description: "My sixth project"},
        {name: "Project 7", description: "My seventh project"},
    ]
    
    const classes = useStyles()

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
                        <ProjectCard name={data.name} description={data.description}/>
                    </Grid>
            ))}
            </Grid>
        </section>
    )
}