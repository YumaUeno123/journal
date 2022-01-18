import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { ReactNode } from 'react';
import { theme } from '@/styles/theme';
import { useRouter } from 'next/router';

const drawerWidth = 130;

type SidebarItem = {
  name: string;
  icon: ReactNode;
  onClick: () => void;
};

export const Sidebar = () => {
  const router = useRouter();

  const sidebarItems: SidebarItem[] = [
    {
      name: '仕訳登録',
      icon: <AssignmentIcon />,
      onClick: () => {
        router.push('/old-journal');
      },
    },
    {
      name: '仕訳申請',
      icon: <AssignmentReturnedIcon />,
      onClick: () => {
        router.push('/applicant');
      },
    },
    {
      name: '仕訳承認',
      icon: <AssignmentTurnedInIcon />,
      onClick: () => {
        router.push('/approver');
      },
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar sx={{ height: '48px' }} />
      <Box
        sx={{
          overflow: 'auto',
          height: 'calc(100vh - 48px)',
          backgroundColor: theme.palette.primary.dark,
        }}
      >
        <List
          sx={{
            paddingTop: 0,
          }}
        >
          {sidebarItems.map((sidebarItem, i) => (
            <ListItem
              sx={{ color: theme.palette.primary.light }}
              button
              key={sidebarItem.name}
              onClick={sidebarItem.onClick}
            >
              <ListItemIcon
                sx={{
                  minWidth: 30,
                  color: theme.palette.primary.light,
                }}
              >
                {sidebarItem.icon}
              </ListItemIcon>
              <ListItemText primary={sidebarItem.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
