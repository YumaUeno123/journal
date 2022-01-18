import { Box, Typography } from '@mui/material';

type Props = {
  title: string;
};

export const PageTitle = ({ title }: Props) => {
  return (
    <Box p={3}>
      <Typography variant="h5">{title}</Typography>
    </Box>
  );
};
