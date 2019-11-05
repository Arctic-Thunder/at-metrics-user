import React from 'react'
import {
    Typography,
    Container
 } from "@material-ui/core"

import APIPanel from '../components/APIPanel'

export default function ApiPage() {

    const apidata = [
        {name: "/api/new_user/", description: "POST: Create User"},
        {name: "/api/login/",description: "POST: Login User" },
        {name: "/api/projects/{{project_id}}/", description: "GET: Get Project ; DEL: Delete Project"},
        {name: "/api/projects/{{project_id}}/metrics", description: "GET: Get All Metrics For Project ; POST: Add New Metric To Project"},
        {name: "/api/projects/{{project_id}}/metrics/{{metric_id}}/", description: "GET: Get Metric ; DEL: Delete Metric"},
    ]

    return (
        <Container className="api">
            {apidata.map((data) => (
                <APIPanel name={data.name} description={data.description}/>
            ))}
        </Container>
    )
}