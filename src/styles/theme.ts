import { createTheme } from '@mui/material';

export const theme = createTheme({
  // TODO: 設定は随時追加する
  palette: {
    primary: {
      main: '#3b7de9',
      light: '#c2d1fc',
      dark: '#32373f',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#999999',
    },
  },
  typography: {
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
    fontSize: 12,
  },
});
