import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography
} from '@mui/material';

const user = {
  avatar: '/assets/logos/motive_logo.jpg',
  acsFullName: 'Home Device Manager © Motive',
  acsName: 'HDM'
};

export const AcsProfile = () => (
  <Card>
    
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography
          gutterBottom
          variant="h1"
        >
          {user.acsName}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user.acsFullName}
        </Typography>
      </Box>
    </CardContent>    
  </Card>
);
