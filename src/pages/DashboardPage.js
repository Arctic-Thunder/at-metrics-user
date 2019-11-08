import React from 'react'
import { Typography } from "@material-ui/core"

export default function DashboardPage() {
    return (
        <section className="dashboard">
            <Typography variant='h5' >DASHBOARD PAGE</Typography>
            <Typography >
                This is a great place to show information about all the user's projects.
            </Typography>
        </section>
    )
}