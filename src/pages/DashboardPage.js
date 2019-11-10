import React from 'react'
import { Typography, Divider } from "@material-ui/core"
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentPage as setCurrentPageAction } from '../actions/pageChangeActions'
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

export const DashboardPage = (props) => {
    const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
        ];
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
            <Typography variant='h5' align="left">Your Dashboard</Typography>
            <br />
            <Divider />
            <br />
            <XYPlot height={300} width= {300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={data} />
            </XYPlot>
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