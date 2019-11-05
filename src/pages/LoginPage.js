import React from 'react'
import {
    Grid,
    Button,
    Typography,
    makeStyles,
 } from "@material-ui/core"

 import {
     Switch,
     Route
 } from "react-router-dom"

import Login from '../components/Login'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    
  }));

  
export default function LoginPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Switch>
                <Route exact path={["/", "/login"]}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid
                            item
                            xs
                        >
                            <Typography variant="h4">Arctic Thunder</Typography>
                            <Login />
                            <Button variant="contained" color="primary">Login</Button>
                        </Grid>
                        <Grid
                            item
                            xs
                        >
                            <Typography>Don't have an accout?</Typography>
                            <Button>Sign Up</Button>
                        </Grid>
                    </Grid>    
                </Route>

                <Route exact path="/register">
                    <Typography>NEW USER</Typography>
                </Route>
            </Switch>
        </div>
    )
}