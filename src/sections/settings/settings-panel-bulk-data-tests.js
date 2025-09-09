import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsCustomTests from 'src/sections/settings/settings-custom-tests-table';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import rpcList from './rpc-list';
import { Autocomplete, Box, Button, Card, CardContent, Divider, Grid, SvgIcon, TextField } from '@mui/material';

export default function SettingsPanelBulkDataTests() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panelBulkTests-content"
                    id="panelBulkTests-header">
                    <Typography component="span" variant="h6">Pruebas Bulk Data</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <Card>
                        <CardContent sx={{ pt: 1 }}>
                            <Box sx={{ m: 1 }}>
                                <Typography component="span" variant="h4">TBD</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </AccordionDetails>
            </Accordion>
        </div >
    );
}
