import {Box, Button, Divider, Typography} from '@mui/material';
import {enqueueSnackbar} from 'notistack';

const HomePage = () => {
  const handleToastClicked = () => {
    console.log('Toast clicked');
    enqueueSnackbar('Do we get an info bar?', {variant: 'info'});
  };

  return (
    <Box>
      <Typography variant='h3' component='h1'>
        Home Page
      </Typography>
      <Typography mb={4}>This feature is still under development.</Typography>
      <Divider/>
      <Box mt={4}>
        <Typography variant='body2' component='h2'>
          Use the button below to test toast notification.
        </Typography>
        <Button variant='contained' color='primary' onClick={handleToastClicked}>
          Toast (TEST)
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
