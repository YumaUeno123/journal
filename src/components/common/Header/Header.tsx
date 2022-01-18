import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AppsIcon from '@mui/icons-material/Apps';
import { Menu, MenuItem } from './Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpIcon from '@mui/icons-material/Help';
import { theme } from '@/styles/theme';

const userMenuItems: MenuItem[] = [
  {
    label: 'メールアドレス変更',
    onClick: () => console.log('clicked メールアドレス変更'),
  },
  {
    label: 'パスワード変更',
    onClick: () => console.log('clicked パスワード変更'),
  },
  {
    label: 'ログアウト',
    onClick: () => console.log('clicked ログアウト'),
  },
];

const helpIconMenuItems: MenuItem[] = [
  {
    label: 'このページのガイド',
    onClick: () => console.log('clicked このページのガイド'),
  },
  {
    label: 'サポートサイト',
    onClick: () => console.log('clicked サポートサイト'),
  },
  {
    label: 'お問い合わせフォーム',
    onClick: () => console.log('clicked お問い合わせフォーム'),
  },
];

export const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#fff' }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="open drawer" sx={{ mr: 2 }}>
          <AppsIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block', color: theme.palette.text.primary } }}
        >
          Sample Product
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex' }}>
          <Menu title={<HelpIcon />} menuItems={helpIconMenuItems} />
          <Menu title={'鈴木 太郎'} buttonIcon={<ArrowDropDownIcon />} menuItems={userMenuItems} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
