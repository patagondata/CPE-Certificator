import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <Box
      component="img"
      sx={{
        height: 233,
        width: 250,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
      }}
      src="/assets/logos/CPE_Cert_logo_home.png" />
  );
};
