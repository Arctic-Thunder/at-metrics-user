import React from 'react'
import { Typography, ListItemIcon } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
    CheckCircleOutline,
} from '@material-ui/icons'


const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 700,
      minWidth: 400,
    },
    media: {
      height: 250,
    },
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
  }));
  
  export default function MediaCard() {
    const classes = useStyles();
  
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh'}}
            >
        <Grid item>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="https://icon-library.net/images/man-png-icon/man-png-icon-2.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Welcome to Arctic Thunder Metrics
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        With this application, you will be able to:
                        <div className={classes.demo}>
                            <List>
                                <ListItem>
                                <ListItemIcon>
                                <CheckCircleOutline />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Add, edit, and delete the projects you want metrics for."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>                                
                                <CheckCircleOutline />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Edit and delete your metrics."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                <CheckCircleOutline />
                                </ListItemIcon>
                                <ListItemText
                                    primary="View your metrics based upon the projects you have."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                <CheckCircleOutline />
                                </ListItemIcon>
                                <ListItemText
                                    primary="View the sample API."
                                />
                                </ListItem>
                            </List>
                        </div>
                    </Typography>
                </CardContent>
            </Card> 
        </Grid>
      </Grid>
    );
  }