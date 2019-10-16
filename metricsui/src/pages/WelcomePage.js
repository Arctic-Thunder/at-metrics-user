import React from 'react'
import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    card: {
      maxWidth: 700,
    },
    media: {
      height: 250,
    },
  });
  
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
                Before you are able to use our service, please be sure to sign in using the login button above
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card> 
        </Grid>
      </Grid>
    );
  }