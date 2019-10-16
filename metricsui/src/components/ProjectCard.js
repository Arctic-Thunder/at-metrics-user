import React from 'react';
import {
  Link
} from 'react-router-dom'

import {
    makeStyles,
    Card,
    CardActionArea,
    CardContent,
    Button,
    Typography
} from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProjectCard(props) {
  const {id, name, description } = props
  const classes = useStyles();
  const link = React.forwardRef((id, ref) => (
    <RouterLink innerRef={ref} to={"/projects/"+id+"/"} {...props} />
  ))
  
  return (
    <Card className={classes.card}>
      <CardActionArea component={link}>
        <CardContent>
          <Typography variant="h5" component="h2" >
            {name}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}