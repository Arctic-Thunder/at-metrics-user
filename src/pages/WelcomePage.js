import React from 'react'
import { Typography } from "@material-ui/core"
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
        <Grid item xs={3}>
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image="https://icon-library.net/images/man-png-icon/man-png-icon-2.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Welcome to Arctic Thunder Metrics
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    With this application, you will be able to:
                    <div className={classes.demo}>
                        <List>
                            <ListItem>
                            <CheckCircleOutline />
                            <ListItemText
                                primary="  Add, edit, and delete the projects you want metrics for."
                            />
                            </ListItem>
                            <ListItem>
                            <CheckCircleOutline />
                            <ListItemText
                                primary="Edit and delete your metrics."
                            />
                            </ListItem>
                            <ListItem>
                            <CheckCircleOutline />
                            <ListItemText
                                primary="View your metrics based upon the projects you have."
                            />
                            </ListItem>
                        </List>
                    </div>
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card> 
        </Grid>
      </Grid>
    );
  }