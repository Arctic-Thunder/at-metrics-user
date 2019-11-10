import React, { forwardRef, useEffect } from 'react'
import {
    Typography,
    Divider,
    Grid,
} from '@material-ui/core'

import {
    AddBox,
    ArrowUpward,
    Check,
    ChevronLeft,
    ChevronRight,
    Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage,
    LastPage,
    Remove,
    SaveAlt,
    Search,
    ViewColumn,
} from '@material-ui/icons';

import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import { connect } from 'react-redux'
import { getProject as getProjectAction } from '../actions/projectActions'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    }

    
const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

export const ProjectDetailPage = (props) => {
    const { isAuthenticated } = props
    const classes = useStyles();

    useEffect( (myProps) => {
        if ( props.project === undefined ) {
            props.getProject(props.project_id)
        }
    }, [] )

    const { name, description } = props.project !== undefined ? props.project : { name:"", description:"" }

    return (
        <section className="project-detail">
            <Grid
                container
                spacing={4}
                direction="column"
                justify="flex-start"
            >
                <Grid item>
                    <Typography variant='h4'>{name}</Typography>
                    <Typography variant='body1'>
                        {description}
                    </Typography>
                </Grid>
                <Grid item>
                    <Divider />
                </Grid>
                <Grid item>
                    <MaterialTable
                        title={`Metrics`}
                        columns={[
                            { title: 'Time', field: 'time', type: 'datetime'},
                            { title: 'Name', field: 'name'},
                            { title: 'Description', field: 'desc'}
                        ]}
                        data={[{time: Date() , name: "Name", desc: "Description of row"}]}
                        options={
                            { search: false }
                        }
                        detailPanel={[
                            {
                                tooltip: 'Metric Details',
                                render: rowData => {
                                    return (
                                        <div>
                                            <Typography>Detail View</Typography>
                                        </div>
                                    )
                                }
                            }
                        ]}
                        onRowClick={(event, rowData, togglePanel) => togglePanel()}
                        icons={tableIcons}
                    />
                    <Button variant="contained" className={classes.button}>
                        Delete Project
                    </Button>
                </Grid>
            </Grid>
        </section>
    )
}

const mapStateToProps = ( state, ownProps ) => 
{
    const { user, projects } = state

    return { 
        isAuthenticated: user.info.token !== undefined,
        project: projects.data.find( element => {
            return element.id == ownProps.project_id
        })
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProject: id => dispatch(getProjectAction(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailPage)
