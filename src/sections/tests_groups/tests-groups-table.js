import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  SvgIcon,
  ArrowUpOnSquareIcon,
  PlusIcon,
  Container,
  Typography,
  IconButton
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { getInitials } from 'src/utils/get-initials';
import EditIcon from '@heroicons/react/24/solid/PencilSquareIcon';
import DeleteIcon from '@heroicons/react/24/solid/ArchiveBoxXMarkIcon';
import DeleteAlertDialog from 'src/utils/DeleteAlertDialog';


export const TestsGroupsTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => { },
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Box  sx={{ fontSize: 12 }}>
                    ID de Grupo
                  </Box>
                </TableCell>
                <TableCell>
                  Nombre del Grupo
                </TableCell>
                <TableCell>
                  Descripción
                </TableCell>
                <TableCell>
                  Modificar
                </TableCell>
                <TableCell>
                  Eliminar
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((testGroup) => {
                const isSelected = selected.includes(testGroup.id);

                return (
                  <TableRow
                    hover
                    key={testGroup.id}
                    selected={isSelected}
                  >
                    
                    <TableCell>
                      {testGroup.id}
                    </TableCell>
                    <TableCell>
                      {testGroup.group_name}
                    </TableCell>
                    <TableCell>
                      {testGroup.description}
                    </TableCell>
                    <TableCell>
                      <IconButton edge="end"
                      href="/edit-test-group">
                        <SvgIcon>
                          <EditIcon />
                        </SvgIcon>
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <DeleteAlertDialog/>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

TestsGroupsTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
