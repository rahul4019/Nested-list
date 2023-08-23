import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { GridTableProps } from '../types';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 20 },
  {
    field: 'userId',
    headerName: 'UserId',
    width: 60,
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
    headerAlign: 'center',
  },
  {
    field: 'body',
    headerName: 'Body',
    type: 'number',
    width: 300,
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
];



const GridTable: React.FC<GridTableProps> = ({ posts }) => {
  const rows = [...posts];

  return (
    <Box sx={{ width: '100%', maxWidth: 700 }}>
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
    </Box>
  );
};

export default GridTable;
