import React from 'react';

import {Link as RouterLink, useRouteMatch} from 'react-router-dom';

import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Link,
} from '@material-ui/core';

import {grey} from '@material-ui/core/colors';

const useStyles = makeStyles ({
  card: {
    minWidth: 200,
    minHeight: 1.1 * 275,
    backgroundColor: grey[200],
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProjectCard (props) {
  const {id, name, description} = props.project;
  const classes = useStyles ();
  let {path, url} = useRouteMatch ();

  return (
    <Link underline="none" to={`${url}/${id}`} component={RouterLink}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.card}>
            <Typography className={classes.title}>
              {name}
            </Typography>
            <Typography
              className={classes.subtitle}
              color="textSecondary"
              gutterBottom
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
