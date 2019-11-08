import React from 'react'
import { Typography } from "@material-ui/core"
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export const DashboardPage = (props) => {
    const renderRedirect = () => {
        if(!props.isAuthenticated) {
            console.log("Redirect Loaded")
            return( <Redirect to="/login" /> )
        }
    }

    return (
        <section className="dashboard">
            { renderRedirect() }
            <Typography variant='h5' >DASHBOARD PAGE</Typography>
            <Typography >
                This is a great place to show information about all the user's projects.
            </Typography>
        </section>
    )
}

const mapStateToProps = ( state ) => 
{
    const { user } = state
    return { 
        isAuthenticated: user.info.token !== undefined
    }
}

export default connect(mapStateToProps)(DashboardPage)