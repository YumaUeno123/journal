import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

export const Layout: FC = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Box component="main" sx={{ width: '100%' }}>
        <Toolbar sx={{ height: '48px' }} />
        {children}
      </Box>
    </Box>
  );
};
