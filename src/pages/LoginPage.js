import React from 'react'
import {
    Grid,
    Button,
    Typography,
    makeStyles,
    Link,
    Card,
    CardContent,
 } from "@material-ui/core"

 import {
     Switch,
     Route,
     Link as RouterLink,
 } from "react-router-dom"

import Login from '../components/Login'
import Register from '../components/Register'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    card: {
        maxWidth: 500,
        minWidth: 275,
    }
  }));

export default function LoginPage() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Switch>
                <Route exact path={["/", "/login"]}>
                    <Grid
                        container
                        spacing={2}
                        direction="column"
                        justify="center"
                        alignItems="center"
                        style={{minHeight: '75vh' }}
                    >
                        <Grid item>
                            <Typography variant="h4">Arctic Thunder</Typography>
                        </Grid>

                        <Grid item>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Login />
                                    <Button variant="contained" color="primary">Login</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                            
                        <Grid item>
                            <Typography>Don't have an accout?</Typography>
                            <Link underline='none' to={`/register`} component={RouterLink}>
                                <Button variant='outlined'>Sign Up</Button>
                            </Link>
                        </Grid>
                    </Grid>    
                </Route>

                <Route exact path="/register">
                    <Grid
                        container
                        spacing={2}
                        direction='column'
                        justify='center'
                        alignItems='center'
                        style={{minHeight: '75vh'}}
                    >
                        <Grid item>
                            <Typography variant='h4'>Thanks For Choosing Arctic Thunder!</Typography>
                        </Grid>
                        <Grid item>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Register />
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item>
                            <Typography>Already have an accout?</Typography>
                            <Link underline='none' to={`/login`} component={RouterLink}>
                                <Button variant='outlined'>Login</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Route>
            </Switch>
        </div>
    )
}