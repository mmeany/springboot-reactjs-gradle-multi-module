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

function App() {
  return (
    <BrowserRouter>
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