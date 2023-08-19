import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Container, Box } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'userId',
    headerName: 'UserId',
    width: 150,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Body',
    type: 'number',
    width: 200,
    editable: true,
  },
];

interface GridTableProps {
  posts: Post[];
}

const GridTable = ({ posts }) => {
  const rows = [...posts];

  return (
    <div>
      <h1>Data Table</h1>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default GridTable;
