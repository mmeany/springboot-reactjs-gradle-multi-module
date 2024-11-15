import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import {Divider, Drawer, IconButton, styled, Toolbar, Typography, useTheme} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import PropTypes from 'prop-types';
import {useState} from 'react';
import logo from '../../assets/logo-192x192.svg';
import MenuItems from './MenuItems.jsx';

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(({theme}) => ({
  flexGrow: 1,
  marginTop: 50,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({open}) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme}) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({open}) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const AppNavBar = (props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const {children} = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={[
              {
                mr: 2,
              },
              open && {display: 'none'},
            ]}
          >
            <MenuIcon/>
          </IconButton>
          <img src={logo} alt='Logo' style={{marginRight: '10px', height: '2rem'}}/>
          <Typography variant='h6' noWrap component='div'>
            MUI Starter App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <MenuItems/>
      </Drawer>
      <Main open={open}>{children}</Main>
    </>
  );
};

AppNavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppNavBar;
