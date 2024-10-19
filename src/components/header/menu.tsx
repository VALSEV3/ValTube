import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
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
      <List sx={{ display: 'flex', flexDirection: 'column'}}>
        {[
          { text: 'Home', icon: <HomeIcon /> },
          { text: 'Trending', icon: <TrendingUpIcon /> },
          { text: 'Subscriptions', icon: <SubscriptionsIcon /> },
        ].map(({ text, icon }) => (
          <ListItem key={text} component="div" disablePadding>
            <Button
              sx={{
                color: 'var(--color)',
                textTransform: 'none',
                justifyContent: 'flex-start',
                width: '99%',
                padding: '8px 16px',
                borderRadius: '10px',
              }}
            >
              <span style={{ marginRight: '8px' }}>{icon}</span>
              {showText && <ListItemText primary={text} sx={{ textAlign: 'left', margin: 0 }} />}
            </Button>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Menu;
