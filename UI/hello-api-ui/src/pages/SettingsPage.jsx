import {Box, Button, TextField, Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {updateConfig} from '../redux/configSlice'; // Assuming the file path to configSlice

const SettingsPage = () => {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config);
  const [name, setName] = useState(config.name);
  const [language, setLanguage] = useState(config.language);

  const handleUpdate = () => {
    dispatch(updateConfig({name, language}));
  };

  return (
    <Box>
      <Typography variant="h3" component="h1">
        Settings Page
      </Typography>
      <Typography variant="h6" component="p">
        These settings are stored in your browser's local storage. They will not '
      </Typography>
      <Box mt={3}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          sx={{mt: 2}}
        >
          Update Config
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsPage;
