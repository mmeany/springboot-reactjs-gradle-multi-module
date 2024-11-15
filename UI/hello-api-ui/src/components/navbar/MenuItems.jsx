import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const MenuItems = () => {
  const navigate = useNavigate();

  const handleItemClicked = (path) => {
    navigate(path);
  };

  return (
    <>
      <List>
        <ListItem key='home' disablePadding>
          <ListItemButton onClick={() => handleItemClicked('/')}>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary='Home'/>
          </ListItemButton>
        </ListItem>
        <ListItem key='hello' disablePadding>
          <ListItemButton onClick={() => handleItemClicked('/hello')}>
            <ListItemIcon>
              <AboutIcon/>
            </ListItemIcon>
            <ListItemText primary='Greet'/>
          </ListItemButton>
        </ListItem>
        <ListItem key='about' disablePadding>
          <ListItemButton onClick={() => handleItemClicked('/about')}>
            <ListItemIcon>
              <AboutIcon/>
            </ListItemIcon>
            <ListItemText primary='About'/>
          </ListItemButton>
        </ListItem>
        <ListItem key='settings' disablePadding>
          <ListItemButton onClick={() => handleItemClicked('/settings')}>
            <ListItemIcon>
              <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary='Settings'/>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default MenuItems;
