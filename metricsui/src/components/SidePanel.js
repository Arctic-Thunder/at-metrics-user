import React from 'react'
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

export default function SidePanel() {
    const classes = useStyles()
    
    const pages = ['Dashboard', 'Projects', 'API']
    const icons = [<DeveloperBoard />, <Assignment />, <Code />]

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
                    <ListItem button key={text}>
                        <ListItemIcon>{icons[index]}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>

                ))}
            </List>
        </Drawer>
    )
}