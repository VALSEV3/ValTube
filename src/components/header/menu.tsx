import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom'; // Импортируйте Link из react-router-dom
import { MenuProps } from '../../models/menuprops';

const Menu: React.FC<MenuProps> = ({ showText }) => {
  const drawerWidth = showText ? 260 : 60;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: 'var(--background-color)',
          color: 'var(--color)',
          marginTop: '64px',
          borderRight: 'none',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List sx={{ display: 'flex', flexDirection: 'column' }}>
        <ListItem component="div" disablePadding>
          <Button
            component={Link} // Используйте Link как компонент
            to="/" 
            sx={{
              color: 'var(--color)',
              textTransform: 'none',
              justifyContent: 'flex-start',
              width: '99%',
              padding: '8px 16px',
              borderRadius: '10px',
            }}
          >
            <span style={{ marginRight: '8px' }}><HomeIcon /></span>
            {showText && <span style={{ margin: 0 }}>Home</span>} {/* Замените ListItemText на span */}
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Menu;
