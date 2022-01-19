import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { theme } from '@/styles/theme';

type Props = {
  name: string;
  avatar: string;
  size?: 'small' | 'middle' | 'large';
};

export const UserNameWithAvatar = ({ name, avatar, size = 'middle' }: Props) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {size === 'small' ? (
        <>
          <Avatar alt={name} src={avatar} sx={{ width: 24, height: 24 }} />
          <Typography sx={{ fontSize: theme.typography.body1 }}>{name}</Typography>
        </>
      ) : size === 'middle' ? (
        <>
          <Avatar alt={name} src={avatar} />
          <Typography variant="h6">{name}</Typography>
        </>
      ) : size === 'large' ? (
        <>
          <Avatar alt={name} src={avatar} sx={{ width: 56, height: 56 }} />
          <Typography variant="h5">{name}</Typography>
        </>
      ) : null}
    </Stack>
  );
};
