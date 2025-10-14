import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { TestsGroupsSearch } from 'src/sections/tests_groups/tests-groups-search';
import { TestsGroupsTable } from 'src/sections/tests_groups/tests-groups-table';
import { applyPagination } from 'src/utils/apply-pagination';

const now = new Date();

const data = [
  {
    id: '1',
    group_name: 'Consulta de Smart Wifi',
    description: 'Agrupación de pruebas para consultar estado de Smart Wifi',    
    phone: 'FAST3890_FB'
  },
  {
    id: '2',
    group_name: 'Reconfiguración de Smart Wifi',
    description: 'Agrupación de pruebas para reconfigurar Smart Wifi',
    phone: 'CGA4233TCH3'
  },
  {
    id: '3',
    group_name: 'Pruebas Bulk Data',
    description: 'Agrupación de pruebas para BulkData',
    phone: 'BCM93384WVG'
  },
  {
    id: '4',
    group_name: 'Consulta de VoIP',
    description: 'Agrupación de pruebas para VoIP',
    phone: 'BCM93384WVG'
  },
  {
    id: '5',
    group_name: 'Reconfiguración de VoIP',
    description: 'Agrupación de pruebas para reconfigurar VoIP',
    phone: 'BCM93384WVG'
  },
  {
    id: '6',
    group_name: 'Consulta USB',
    description: 'Agrupación de pruebas para USB',
    phone: 'BCM93384WVG'
  }
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  return (
    <>
      <Head>
        <title>
          Grupos de Pruebas | Patagondata
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Grupos de Pruebas
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                 
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  href="/add-test-group"
                >
                  Agregar
                </Button>
              </div>
            </Stack>
            <TestsGroupsSearch />
            <TestsGroupsTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
