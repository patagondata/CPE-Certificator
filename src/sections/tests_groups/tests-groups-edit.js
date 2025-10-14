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

export const TestsGroupsEdit = () => {
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
                    subheader="Por favor modifique los datos del Grupo de Pruebas."
                    title="Detalles del Grupo de Pruebas"
                />

                <Divider />
                <CardContent>
                    <Stack
                        spacing={3}
                        sx={{ maxWidth: 400 }}
                    >                       
                        <TextField
                            fullWidth
                            label="Nombre"
                            name="group_name"
                            onChange={handleChange}
                            value="Consulta de Smart Wifi"
                        />
                        <TextField
                            fullWidth
                            label="Descripcion"
                            name="description"
                            onChange={handleChange}
                            value="Agrupación de pruebas para consultar estado de Smart Wifi"
                        />

                        <Button variant="contained"
                        href="/tests-groups">
                        Actualizar Grupo
                    </Button>
                    </Stack>
                </CardContent>
               
            </Card>
        </form>
    );
};
