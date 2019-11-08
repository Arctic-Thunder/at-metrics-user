import React from 'react'
import {
    Typography,
} from '@material-ui/core'

import MaterialTable from 'material-table'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export const ProjectDetailPage = (props) => {
    const renderRedirect = () => {
        if(!props.isAuthenticated) {
            console.log("Redirect Loaded")
            return( <Redirect to="/login" /> )
        }
    }

    const { name, description } = props.project
    return (
        <section className="project-detail">
            {renderRedirect()}
            <Typography align="middle" variant="h4">{name}</Typography>
            <Typography align="middle" variant="body1">
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
        project: projects.find( element => {
            return element.id === ownProps.project_id
        })
    }
}

export default connect(mapStateToProps)(ProjectDetailPage)
