import React from 'react'
import {
    Typography,
} from '@material-ui/core'

import MaterialTable from 'material-table'

export default function ProjectDetailPage(props) {
    const { id, name, description } = {id:5, name:"My Page", description:"Page description."}

    return (
        <section className="project-detail">
            <Typography align="left" variant="h4">{name}</Typography>
            <Typography align="left" variant="body1">
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
