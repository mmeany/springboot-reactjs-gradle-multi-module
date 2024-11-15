## Create the project

Note that at the time of writing MUI v6 had just been released and x-data-grid was not compatible, hence the specific
version

```shell
npm create vite@latest mui-starter -- --template react
cd mui-starter
npm install
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid
npm install @reduxjs/toolkit react-redux
npm install axios luxon prop-types
npm install notistack
npm install react-router-dom
```

## Remove chaff

- Add `logo.svg` to `public` and `src/assets`
- Remove `vite.svg` from `public`
- Remove `reacts.svg` from `src/assets`
- Update `index.html`
    - Replace `vite.svg` with `logo.svg`
    - Add Roboto imports

```html

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"/>
```

- Change the `<title>` to reflect the app
- Update `README.md`
- Add `development` environment file `.env.development` add appropriate `VITE_API_BASE_URL`:

```properties
VITE_BASE_URL=/
VITE_API_BASE_URL=http://localhost:9230/scrubbedFeedGenerator
```

- Add `production` environment file `.env.production` add appropriate `VITE_BASE_URL` and `VITE_API_BASE_URL`:

```properties
VITE_BASE_URL=/scrubbedFeedGenerator/
VITE_API_BASE_URL=/scrubbedFeedGenerator
```

- Replace `vite.config.js` with one that respect the `.env.*` as well as fix a bug with rendering MUI Icons:

```javascript
import react from '@vitejs/plugin-react';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
    // Load environment variables based on the current mode (development or production)
    const env = loadEnv(mode, process.cwd());
    return {
        plugins: [react()],
        base: env.VITE_BASE_URL || '/',
        optimizeDeps: {
            include: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
        },
    };
});
```

- Delete everything from `src/index.css`, leave the file though, may need it
- Delete everything from `src/App.css`, leave the file though, may need it
- Create `src/theme.js` with a minimal theme variation:

```javascript
import {createTheme} from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});
export default theme;
````

- Add `favicon`, to generate one I used [https://favicon.io/favicon-generator/](https://favicon.io/favicon-generator/)

`index.html` should look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/site.webmanifest"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"/>
    <title>MUI Starter</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

- Convert logo png to svg and copy it to `arc/assets/logo-192x192.svg`, to convert a favicon to svg I
  used [https://www.freeconvert.com/png-to-svg](https://www.freeconvert.com/png-to-svg)
- Update `src/App.jsx` to make use of MUI, theme and logo:

`src/App.jsx`:

```jsx
import {Box, Container, Typography} from '@mui/material';
import './App.css';
import logo from './assets/logo-192x192.svg';

function App() {
    return (
        <>
            <Container>
                <Box display='flex' alignItems='center' justifyContent='center' my={2}>
                    <img src={logo} alt='Logo' style={{marginRight: '1rem', height: '2rem', marginBottom: '1rem'}}/>
                    <Typography variant='h4' component='h1' align='center' gutterBottom>
                        MUI Starter
                    </Typography>
                </Box>
            </Container>
        </>
    );
}

export default App;
```

At this point the application can be run and presents a single page. Next we add `router`, a `NavBar`, a `toast`
mechanism and some pages.

---

# Phase 2 - NavBar and pages

The AppNavBar component is adapted from documentation, but reads the side-menu entries from a list maintained in
MenuItems.

Create a couple of pages, they all follow a simple format:

```jsx
import {Box, Typography} from '@mui/material';

const AboutPage = () => {
    return (
        <Box>
            <Typography variant='h3' component='h1'>
                About Page
            </Typography>
            <Typography>This feature is still under development.</Typography>
        </Box>
    );
};

export default AboutPage;
```

Update App.jsx, add router, routes and SnackBar container for toasts:

```jsx
import {Box} from '@mui/material';
import {SnackbarProvider} from 'notistack';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import AppNavBar from './components/navbar/AppNavBar.jsx';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

function App() {
    return (
        <BrowserRouter>
            <Box sx={{display: 'flex'}}>
                <SnackbarProvider maxSnack={5} anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                    <AppNavBar>
                        <Routes>
                            <Route path='/' Component={HomePage}/>
                            <Route path='/about' Component={AboutPage}/>
                            <Route path='/settings' Component={SettingsPage}/>
                        </Routes>
                    </AppNavBar>
                </SnackbarProvider>
            </Box>
        </BrowserRouter>
    );
}

export default App;
```

Add a button to home page allowing toast to be tested

```jsx
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
```
