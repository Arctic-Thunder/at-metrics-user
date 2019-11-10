import React from 'react'
import { Typography, Divider } from "@material-ui/core"
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
            <Typography variant='h5' align="left">Your Dashboard</Typography>
            <br />
            <Divider />
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