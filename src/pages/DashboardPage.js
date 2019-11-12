import React from 'react';
import {Typography, Divider, Grid} from '@material-ui/core';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  setCurrentPage as setCurrentPageAction,
} from '../actions/pageChangeActions';
import {
  RadialChart,
  XAxis,
  YAxis,
  XYPlot,
  HorizontalGridLines,
  LineSeries,
} from 'react-vis';
import DiscreteColorLegend from 'react-vis/dist/legends/discrete-color-legend';

export const DashboardPage = props => {
  const data = [{x: 0, y: 8}, {x: 1, y: 5}, {x: 2, y: 4}];
  const items = [
    {title: 'Project 1', color: '#f9c116', stroke: '#fff', strokeWidth: '2'},
    {title: 'Project 2', color: '#006600', stroke: '#fff', strokeWidth: '2'},
    {title: 'Project 3', color: '#1E96BE', stroke: '#fff', strokeWidth: '2'},
    {title: 'Project 4', color: '#4c85ff', stroke: '#fff', strokeWidth: '2'},
    {title: 'Project 5', color: '#f99416', stroke: '#fff', strokeWidth: '2'},
  ];
  const renderRedirect = () => {
    if (!props.isAuthenticated) {
      console.log ('Redirect Loaded');
      return <Redirect to="/login" />;
    }
  };

  props.changePage (0);

  return (
    <section className="dashboard">
      {renderRedirect ()}
      <link
        rel="stylesheet"
        href="https://unpkg.com/react-vis/dist/style.css"
      />
      <Typography variant="h5" align="left">Your Dashboard</Typography>
      <br />
      <Divider />
      <br />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs="3">
          <Typography variant="h6" align="left">Metrics by Projects</Typography>
          <RadialChart
            colorType={'literal'}
            colorDomain={[0, 100]}
            colorRange={[0, 10]}
            margin={{top: 100}}
            getLabel={d => d.name}
            data={[
              {angle: 1, color: '#f9c116'},
              {angle: 2, color: '#006600'},
              {angle: 5, color: '#1E96BE'},
              {angle: 3, color: '#4c85ff'},
              {angle: 5, color: '#f99416'},
            ]}
            labelsRadiusMultiplier={1.1}
            labelsStyle={{fontSize: 12, fill: '#222'}}
            showLabels
            style={{stroke: '#fff', strokeWidth: 2}}
            width={400}
            height={300}
          />
        </Grid>

        <Grid item xs="3">
          <DiscreteColorLegend height={300} width={100} items={items} />
        </Grid>

        <Grid item xs="6">
          <Typography variant="h6" align="left">Metrics Collected</Typography>
          <XYPlot height={300} width={400}>
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={data} />
          </XYPlot>
        </Grid>
      </Grid>
    </section>
  );
};

const mapStateToProps = state => {
  const {user} = state;
  return {
    isAuthenticated: user.info.token !== undefined,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePage: index => dispatch (setCurrentPageAction (index)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (DashboardPage);
