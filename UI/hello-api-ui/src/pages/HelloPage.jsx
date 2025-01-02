import {Box, Typography} from '@mui/material';
import {useState} from "react";
import axios from "axios";
import {enqueueSnackbar} from "notistack";
import RawDataDisplay from "../components/RawDataDisplay.jsx";
import {useSelector} from "react-redux";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const HelloPage = () => {
  const config = useSelector((state) => state.config);
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [data, setData] = useState(undefined);

  function handleOnClick() {
    const nameToUse = name ? name : config.name;
    const endpoint = `${API_BASE_URL}/hello/${nameToUse}`;
    axios.get(endpoint)
      .then(response => {
        setData(response.data);
        setGreeting(response.data.greeting);
        setName('');
      })
      .catch(error => {
        enqueueSnackbar('There was an error fetching a greeting from API!', {variant: 'error'});
      });
  }

  return (
    <Box>
      <Typography variant='h3' component='h1'>
        Greeting Page
      </Typography>
      <Box sx={{mb: 2}}>
        <Typography>Enter your name:</Typography>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={handleOnClick}>Greet</button>
      </Box>
      <Typography>{greeting}</Typography>
      {data && <RawDataDisplay title='Response Data' data={data}/>}
    </Box>
  );
};

export default HelloPage;
