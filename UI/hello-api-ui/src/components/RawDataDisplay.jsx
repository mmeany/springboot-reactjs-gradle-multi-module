import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {Box, IconButton, ToggleButton, ToggleButtonGroup, Typography} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import YAML from 'yaml';

const RawDataDisplay = ({data, format = 'json', title}) => {
  const [displayFormat, setDisplayFormat] = React.useState(format);

  const handleFormatChange = (event, newFormat) => {
    if (newFormat !== null) {
      setDisplayFormat(newFormat);
    }
  };

  const formattedData = displayFormat === 'json' ? JSON.stringify(data, null, 2) : YAML.stringify(data);

  const handleDownload = () => {
    const blob = new Blob([formattedData], {type: 'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `data.${displayFormat}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb={2}>
        <Typography variant='h6'>{title}</Typography>
        <Box>
          <ToggleButtonGroup value={displayFormat} exclusive onChange={handleFormatChange}
                             aria-label='format'>
            <ToggleButton value='json' aria-label='json'>
              JSON
            </ToggleButton>
            <ToggleButton value='yaml' aria-label='yaml'>
              YAML
            </ToggleButton>
          </ToggleButtonGroup>
          <IconButton onClick={handleDownload} aria-label='download'>
            <FileDownloadIcon/>
          </IconButton>
        </Box>
      </Box>
      <pre>{formattedData}</pre>
    </Box>
  );
};

RawDataDisplay.propTypes = {

  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  format: PropTypes.oneOf(['json', 'yaml']),
  title: PropTypes.string.isRequired,
};

export default RawDataDisplay;
