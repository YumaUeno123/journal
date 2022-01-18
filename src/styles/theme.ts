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
    htmlFontSize: 16, // Mui default
    fontSize: 14, // Mui default
    h4: {
      fontSize: '1.5rem', // 24px
    },
    h5: {
      fontSize: '1.125rem', // 18px
    },
    h6: {
      fontSize: '1rem', // 16px
    },
    subtitle1: {
      fontSize: '0.875rem', // 14px
    },
    subtitle2: {
      fontSize: '0.8125rem', // 13px
    },
    body1: {
      fontSize: '0.8125rem', // 13px
    },
    body2: {
      fontSize: '0.875rem', // 14px
    },
    button: {
      fontSize: '0.8125rem', // 13px
    },
    caption: {
      fontSize: '0.75rem', // 12px
    },
    overline: {
      fontSize: '0.625rem', // 10px
    },
  },
  mixins: {
    toolbar: {
      minHeight: 42,
    },
  },
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
});
