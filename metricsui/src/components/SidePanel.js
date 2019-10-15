import React from 'react'
import {
    makeStyles,
    List,
    ListItem,
    ListItemText,
    Drawer,
 } from '@material-ui/core'

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
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>

                ))}
            </List>
        </Drawer>
    )
}