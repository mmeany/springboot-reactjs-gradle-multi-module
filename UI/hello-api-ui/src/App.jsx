import {Box} from '@mui/material';
import {SnackbarProvider} from 'notistack';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import AppNavBar from './components/navbar/AppNavBar.jsx';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import HelloPage from "./pages/HelloPage.jsx";
import {Provider} from "react-redux";
import store from "./redux/store.js";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function App() {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Box sx={{display: 'flex'}}>
        <SnackbarProvider maxSnack={5} anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
          <AppNavBar>
            <Routes>
              <Route path='/' Component={HomePage}/>
              <Route path='/about' Component={AboutPage}/>
              <Route path='/hello' Component={HelloPage}/>
              <Route path='/settings' Component={SettingsPage}/>
            </Routes>
          </AppNavBar>
        </SnackbarProvider>
      </Box>
    </BrowserRouter>
  );
}

const AppWithProvider = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

export default AppWithProvider;