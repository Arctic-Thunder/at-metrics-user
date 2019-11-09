import React, { useEffect } from 'react'
import {
    Typography,
} from '@material-ui/core'

import MaterialTable from 'material-table'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProject as getProjectAction } from '../actions/projectActions'

export const ProjectDetailPage = (props) => {
    const { isAuthenticated } = props

    useEffect( () => {
        if ( props.project === undefined ) {
            props.getProject(props.project_id)
        }
    }, [] )

    const { name, description } = props.project !== undefined ? props.project : { name:"", description:"" }

    return (
        <section className="project-detail">
            <Typography variant='h4'>{name}</Typography>
            <Typography variant='body1'>
                {description}
            </Typography>
            
            <MaterialTable
                columns={[
                    { title: 'Time', field: 'time', type: 'datetime'},
                    { title: 'Name', field: 'name'},
                    { title: 'Description', field: 'desc'}
                ]}
                data={[{time: Date() , name: "Name", desc: "Description of row"}]}
                title="Project 1 Metrics"
            />
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
