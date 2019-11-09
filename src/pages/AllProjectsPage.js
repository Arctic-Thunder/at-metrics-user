import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import {
    getAllProjects as getAllProjectsAction,
    createProject as addNewProjectAction,
 } from '../actions/projectActions'

import {
    makeStyles,
    Grid,
    Fab,
    Typography,
    Divider,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import ProjectCard from '../components/ProjectCard'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
    }
}))

export const AllProjectsPage = (props) => {
    const { isAuthenticated } = props
    const [open, setOpen] = useState(false)
    const classes = useStyles()
    
    useEffect( (myProps) => {
        props.getProjects()
    }, [] )
    const projects = props.projects !== undefined ? props.projects : []

    const handleOpen = event => {
        setOpen(true)
    }

    const handleClose = event => {
        setOpen(false)
    }

    const handleSubmit = event => {
        setOpen(false)
    }

    return (
        <section className="projects">
            <Grid
                container
                spacing={2}
                direction="column"
            >
                <Grid
                    container
                    item
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography className={classes.title}>Your Projects</Typography>
                    </Grid>
                    <Grid item>
                        <Fab
                            variant="extended"
                            color="primary"
                            aria-label="new project"
                            className={classes.fab}
                            onClick={handleOpen}
                        >
                            <AddIcon />
                            New Project
                        </Fab>

                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labeledby="from-dialog-title"
                        >
                            <DialogTitle id='form-dialog-title'>New Project</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Project Name"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="description"
                                    label="Project Description"
                                    fullWidth
                                    multiline
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">Cancel</Button>
                                <Button onClick={handleSubmit} color="primary">Submit</Button>
                            </DialogActions>
                        </Dialog>

                    </Grid>
                </Grid>

                <Grid item>
                    <Divider />
                </Grid>

                <Grid
                    container
                    item
                    direction="row"
                    spacing={3}
                    justify="space-between"
                >
                    {projects.map((project, index) => (
                        <Grid item>
                            <ProjectCard project={project}/>
                        </Grid>
                    ))}
                </Grid>
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
        addProject: (name, description) => dispatch(addNewProjectAction(name, description)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProjectsPage)