import React from 'react';
import MaterialTable from 'material-table';

export default function ProjectsTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Project Name', field: 'name' },
      { title: 'Description', field: 'description' },
    ],
    data: [
      { name: 'Bike Shop', description: 'Project for Bike Shop' },
      { name: 'Bike Shop 2', description: 'Project for Bike Shop 2' },
    ],
  });

  return (
    <MaterialTable
      title="My Projects"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}