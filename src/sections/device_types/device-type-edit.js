import { useCallback, useState } from 'react';
import {
    Autocomplete,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Stack,
    TextField
} from '@mui/material';

export const DeviceTypeEdit = () => {
    const [values, setValues] = useState({
        oui: '',
        pc: '',
        description: '',
        id: ''
    });

    const handleChange = useCallback(
        (event) => {
            setValues((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value
            }));
        },
        []
    );

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
        },
        []
    );

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader
                    subheader="Por favor modifique los datos del Device Type."
                    title="Detalles del Device Type"
                />

                <Divider />
                <CardContent>
                    <Stack
                        spacing={3}
                        sx={{ maxWidth: 400 }}
                    >                       
                        <TextField
                            fullWidth
                            label="OUI"
                            name="oui"
                            onChange={handleChange}
                            value="6C2E85"
                        />
                        <TextField
                            fullWidth
                            label="Product Class"
                            name="pc"
                            onChange={handleChange}
                            value="FAST3890_FB"
                        />
                        <TextField
                            fullWidth
                            label="Descripcion"
                            name="description"
                            onChange={handleChange}
                            value="Huawei 521"
                        />

                        <Button variant="contained"
                        href="/device-types">
                        Actualizar Device Type
                    </Button>
                    </Stack>
                </CardContent>
               
            </Card>
        </form>
    );
};
