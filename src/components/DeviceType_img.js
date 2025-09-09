import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <Box
      component="img"
      sx={{
        height: 300,
        width: 400,
        boxShadow: 0,
        mx: 10,
        mt: 12
      }}
      src="/assets/logos/DeviceType.png" />
  );
};
