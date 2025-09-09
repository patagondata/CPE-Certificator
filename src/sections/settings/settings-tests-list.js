import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsSPVTests from 'src/sections/settings/settings-spv-tests';
import SettingsGPVTests from 'src/sections/settings/settings-gpv-tests';
import SettingsAddObjectTests from 'src/sections/settings/settings-add-object-tests';
import SettingsDeleteObjectTests from 'src/sections/settings/settings-delete-object-tests';
import SettingsRebootTests from 'src/sections/settings/settings-reboot-tests';
import SettingsFRTests from 'src/sections/settings/settings-fr-tests';
import SettingsGPVWifi1Tests from 'src/sections/settings/settings-gpv-wifi1-tests';
import SettingsGPVWifi2Tests from 'src/sections/settings/settings-gpv-wifi2-tests';
import SettingsSPVWifi1Tests from 'src/sections/settings/settings-spv-wifi1-tests';
import SettingsSPVWifi2Tests from 'src/sections/settings/settings-spv-wifi2-tests';

export default function SettingsTestsList() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header">
                    <Typography component="span" variant="h6">GetParameterValue</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SettingsGPVTests />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header">
                    <Typography component="span" variant="h6">SetParameterValue</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SettingsSPVTests />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header">
                    <Typography component="span" variant="h6">AddObject</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SettingsAddObjectTests />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header">
                    <Typography component="span" variant="h6">DeleteObject</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SettingsDeleteObjectTests />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5-content"
                    id="panel5-header">
                    <Typography component="span" variant="h6">Reboot</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SettingsRebootTests />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6-content"
                    id="panel6-header">
                    <Typography component="span" variant="h6">Factory Reset</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SettingsFRTests />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7-content"
                    id="panel7-header">
                    <Typography component="span" variant="h6">Consulta de Smart WiFi</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="subpanel7-wifi1-content"
                            id="subpanel7-wifi1-header">
                            <Typography component="span" variant="h6">WLAN.1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SettingsGPVWifi1Tests />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="subpanel7-wifi2-content"
                            id="subpanel7-wifi2-header">
                            <Typography component="span" variant="h6">WLAN.2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SettingsGPVWifi2Tests />
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
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="subpanel8-wifi1-content"
                            id="subpanel8-wifi1-header">
                            <Typography component="span" variant="h6">WLAN.1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SettingsSPVWifi1Tests />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="subpanel8-wifi2-content"
                            id="subpanel8-wifi2-header">
                            <Typography component="span" variant="h6">WLAN.2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SettingsSPVWifi2Tests />
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>            
        </div>
    );
}
