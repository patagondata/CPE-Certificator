import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import BasicList from './basic-list';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon';
import { Alert, Box, CircularProgress, Divider, SvgIcon } from '@mui/material';
import ExecutionsResultGPV from './executions-result-gpv';
import ExecutionsResultSPV from './executions-result-spv';
import ExecutionsResultAddObject from './executions-result-add-object';

export default function ExecutionStatusTests() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header">
                    
                    <Typography component="span" variant="h6">GetParameterValue</Typography>
                    <Box sx={{ display: 'flex' }}>
                        <SvgIcon fontSize="small">
                        <CheckCircleIcon />
                      </SvgIcon>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <ExecutionsResultGPV/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header">
                    <Typography component="span" variant="h6">SetParameterValue</Typography>
                    <Box sx={{ display: 'flex' }}>
                        <SvgIcon fontSize="small">
                        <CheckCircleIcon />
                      </SvgIcon>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <ExecutionsResultSPV/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header">
                    <Typography component="span" variant="h6">AddObject</Typography>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress size="22px" color="primary" />
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <ExecutionsResultAddObject/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header">
                    <Typography component="span" variant="h6">DeleteObject</Typography>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress size="22px" color="primary" />
                    </Box>
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5-content"
                    id="panel5-header">
                    <Typography component="span" variant="h6">Reboot</Typography>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress size="22px" color="primary" />
                    </Box>
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6-content"
                    id="panel6-header">
                    <Typography component="span" variant="h6">Factory Reset</Typography>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress size="22px" color="primary" />
                    </Box>
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7-content"
                    id="panel7-header">
                    <Typography component="span" variant="h6">Consulta de Smart WiFi</Typography>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress size="22px" color="primary" />
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="subpanel7-wifi1-content"
                            id="subpanel7-wifi1-header">
                            <Typography component="span" variant="h6">WLAN.1</Typography>
                            <Box sx={{ display: 'flex' }}>
                                <CircularProgress size="22px" color="primary" />
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="subpanel7-wifi2-content"
                            id="subpanel7-wifi2-header">
                            <Typography component="span" variant="h6">WLAN.2</Typography>
                            <Box sx={{ display: 'flex' }}>
                                <CircularProgress size="22px" color="primary" />
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8-content"
                    id="panel8-header">
                    <Typography component="span" variant="h6">Reconfiguración de Smart WiFi</Typography>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress size="22px" color="primary" />
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="subpanel8-wifi1-content"
                            id="subpanel8-wifi1-header">
                            <Typography component="span" variant="h6">WLAN.1</Typography>
                            <Box sx={{ display: 'flex' }}>
                                <CircularProgress size="22px" color="primary" />
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="subpanel8-wifi2-content"
                            id="subpanel8-wifi2-header">
                            <Typography component="span" variant="h6">WLAN.2</Typography>
                            <Box sx={{ display: 'flex' }}>
                                <CircularProgress size="22px" color="primary" />
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
