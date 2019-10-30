import React from 'react'
import { 
    Link as RouterLink
 } from 'react-router-dom'

import PropTypes from 'prop-types'
import {
    makeStyles,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Drawer,
 } from '@material-ui/core'

 import {
    DeveloperBoard,
    Assignment,
    Code,
    Info,
 } from '@material-ui/icons'

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}))

function ListItemLink(props) {
    const { icon, primary, to, selected, onClick } = props;
  
    const renderLink = React.useMemo(
      () =>
        React.forwardRef((itemProps, ref) => (
          // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
          // See https://github.com/ReactTraining/react-router/issues/6056
          <RouterLink to={to} {...itemProps} innerRef={ref} />
        )),
      [to],
    );
  
    return (
      <li>
        <ListItem button component={renderLink} selected={selected} onClick={onClick}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
}

ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default function SidePanel() {
    const classes = useStyles()
    
    const pages = ['Dashboard', 'Projects', 'API', 'About']
    const icons = [<DeveloperBoard />, <Assignment />, <Code />, <Info />]
    const [selectedIndex, setSelectedIndex] = React.useState(1)
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index)
    }

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
            <List>    
                {pages.map((text, index) => (
                    <ListItemLink
                        selected={selectedIndex === index}
                        onClick={event => handleListItemClick(event, index)}
                        to={'/'+text.toLowerCase()}
                        primary={text}
                        icon={icons[index]}
                    />
                ))}
            </List>
        </Drawer>
    )
}
