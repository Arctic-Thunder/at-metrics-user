import React, {forwardRef, useEffect, useState} from 'react';
import {Typography, Divider, Grid, Fab, Grow, Tooltip, TextField} from '@material-ui/core';

import {
  AddBox,
  ArrowUpward,
  Cancel,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  Delete,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  Save,
  SaveAlt,
  Search,
  ViewColumn,
} from '@material-ui/icons';

import MaterialTable from 'material-table';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {red, green} from '@material-ui/core/colors';

import {connect} from 'react-redux';
import {getProject as getProjectAction} from '../actions/projectActions';

import ConfirmDeleteDialog from '../components/ConfirmDeleteDialog'
import { set } from 'date-fns';

const tableIcons = {
  Add: forwardRef ((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef ((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef ((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef ((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef ((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef ((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef ((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef ((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef ((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef ((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef ((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef ((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef ((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef ((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef ((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef ((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef ((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const useStyles = makeStyles (theme => ({
  button: {
    margin: theme.spacing (1),
  },
  input: {
    display: 'none',
  },
  fab: {
    margin: theme.spacing (1),
  },
}));

export const ProjectDetailPage = props => {
  const {project, project_id} = props;
  const getProject = id => {
    props.getProject (id);
  };
  const classes = useStyles ();
  const theme = useTheme ();

  useEffect (() => {
    if (project === undefined) {
      getProject (project_id);
    }
  }, []);

  const {name, description} = project !== undefined
    ? project
    : {name: '', description: ''};

  const [newName, setNewName] = useState( name )
  const [newDesc, setNewDesc] = useState( description )
  const [editOpen, setEditOpen] = useState (false);
  const [saveNeeded, setSaveNeeded] = useState (false);
  const [wantsDelete, setWantsDelete] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const handleEditPress = () => {
    setEditOpen (!editOpen);
  };

  const handleSavePress = () => {
    setSaveNeeded (false);
    setEditOpen(false)
  };

  const handleDeletePress = () => {
    setWantsDelete(true)
  }

  const handleChange = event => {
    event.target.id === 'name' ? setNewName(event.target.value) : setNewDesc(event.target.description)
    setSaveNeeded(newName !== name || newDesc !== description)
  }

  const handleClose = () => {
    setWantsDelete(!wantsDelete)
  }

  const handleContinue = () => {
    setWantsDelete(!wantsDelete)
    setConfirmDelete(true)
  }

  const fabs = {
    editBar: [
      {
        color: red[500],
        className: classes.fab,
        icon: <Delete />,
        label: 'Delete',
        size: 'small',
        initial: false,
        onClick: handleDeletePress
      },
      {
        className: classes.fab,
        icon: <Save />,
        label: 'Save',
        size: 'small',
        initial: false,
        color: saveNeeded ? green[500] : null,
        onClick: handleSavePress,
      },
      {
        color: 'primary',
        className: classes.fab,
        icon: editOpen ? <Cancel /> : <Edit />,
        label: editOpen ? 'Cancel' : 'Edit',
        size: 'medium',
        initial: true,
        onClick: handleEditPress,
      },
    ],
  };

  const renderEditableText = () => {
    if (editOpen) {
      console.log("Can Edit")
      return (
        <div>
          <TextField
            margin="dense"
            id="name"
            label="Project Name"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="description"
            label="Project Description"
            fullWidth
            onChange={handleChange}
          />
        </div>
      )
    } else {
      console.log("Can't Edit")
      return (
        <div>
          <Typography variant='h4'>{name}</Typography>
          <Typography variant='body1'>{description}</Typography>
        </div>
      )
    }
  }

  return (
    <section className="project-detail">
      <Grid container spacing={4} direction="column" justify="flex-start">
        <Grid
          container
          item
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            {renderEditableText}
          </Grid>
          <Grid item>
            {fabs.editBar.map ((fab, index) => (
              <Grow
                key={fab.color}
                in={fab.initial || editOpen}
                timeout={transitionDuration}
                unmountOnExit
              >
                <Tooltip
                  title={fab.label}
                >
                  <Fab
                    aria-label={fab.label}
                    id={fab.label.toLowerCase ()}
                    className={fab.className}
                    size={fab.size}
                    style={{
                      backgroundColor: fab.color,
                    }}
                    onClick={fab.onClick}
                  >
                    {fab.icon}
                  </Fab>
                </Tooltip>
              </Grow>
            ))}
            <ConfirmDeleteDialog title="Delete Project" description="Are you sure you want to delete this project? This operation cannot be undone" open={wantsDelete} onClose={handleClose} onContinue={handleContinue} />
          </Grid>
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item>
          <MaterialTable
            title={`Metrics`}
            columns={[
              {title: 'Time', field: 'time', type: 'datetime'},
              {title: 'Name', field: 'name'},
              {title: 'Description', field: 'desc'},
            ]}
            data={[
              {
                time: Date (),
                name: 'test1',
                desc: 'description',
                data: {name: 'example', type: 'whatever'},
              },
              {time: Date (), name: 'test2', desc: 'description'},
              {time: Date (), name: 'test3', desc: 'description'},
              {time: Date (), name: 'test4', desc: 'description'},
              {time: Date (), name: 'test5', desc: 'description'},
              {time: Date (), name: 'test6', desc: 'description'},
              {time: Date (), name: 'test7', desc: 'description'},
              {time: Date (), name: 'test8', desc: 'description'},
              {time: Date (), name: 'test9', desc: 'description'},
              {time: Date (), name: 'test10', desc: 'description'},
              {time: Date (), name: 'test11', desc: 'description'},
              {time: Date (), name: 'test12', desc: 'description'},
              {time: Date (), name: 'test13', desc: 'description'},
              {time: Date (), name: 'test14', desc: 'description'},
              {time: Date (), name: 'test15', desc: 'description'},
              {time: Date (), name: 'test16', desc: 'description'},
              {time: Date (), name: 'test17', desc: 'description'},
            ]}
            options={{search: false}}
            detailPanel={[
              {
                tooltip: 'Metric Details',
                render: rowData => {
                  return (
                    <div>
                      <Typography>Detail View</Typography>
                    </div>
                  );
                },
              },
            ]}
            onRowClick={(event, rowData, togglePanel) => togglePanel ()}
            icons={tableIcons}
          />
        </Grid>
      </Grid>
    </section>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {projects} = state;

  return {
    project: projects.data.find (element => {
      return element.id == ownProps.project_id;
    }),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProject: id => dispatch (getProjectAction (id)),
  };

};

export default connect (mapStateToProps, mapDispatchToProps) (
  ProjectDetailPage
);