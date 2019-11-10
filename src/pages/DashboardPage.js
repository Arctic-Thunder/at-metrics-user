import React, { useEffect } from 'react'
import { Typography } from "@material-ui/core"
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentPage as setCurrentPageAction } from '../actions/pageChangeActions'
export const DashboardPage = (props) => {
    const renderRedirect = () => {
        if(!props.isAuthenticated) {
            console.log("Redirect Loaded")
            return( <Redirect to="/login" /> )
        }
    }

    props.changePage(0)

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

const mapDispatchToProps = dispatch => {
    return {
        changePage: index => dispatch(setCurrentPageAction(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)