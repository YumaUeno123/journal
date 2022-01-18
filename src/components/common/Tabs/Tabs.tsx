import * as React from 'react';
import MuiTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

type TabItem = {
  value: string;
  label: React.ReactNode;
};

type Props = {
  tabItems: TabItem[];
  value: string;
  onChange: (value: string) => void;
};

export const Tabs = ({ tabItems, value, onChange }: Props) => {
  const [selectedValue, setSelectedValue] = React.useState(value);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setSelectedValue(newValue);
    onChange(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <MuiTabs
          indicatorColor="primary"
          textColor="inherit"
          value={selectedValue}
          onChange={handleChange}
          aria-label="wrapped label tabs"
        >
          {tabItems.map((tabItem) => (
            <Tab
              key={tabItem.value}
              value={tabItem.value}
              label={tabItem.label}
              wrapped
              sx={{
                px: 3,
                py: 2,
              }}
            />
          ))}
        </MuiTabs>
      </Box>
    </Box>
  );
};
