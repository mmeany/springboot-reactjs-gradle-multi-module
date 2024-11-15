import {CssBaseline, ThemeProvider} from '@mui/material';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import theme from './theme.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {/* <Provider store={store}> */}
      <App/>
      {/* </Provider> */}
    </ThemeProvider>
  </StrictMode>
);
