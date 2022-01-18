import { Box, Chip } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './index';

export default {
  title: 'Components/Common/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  tabItems: [
    {
      value: 'draft_journals',
      label: '申請前',
    },
    {
      value: 'applied_journals',
      label: '申請済',
    },
    {
      value: 'rejected_journals',
      label: (
        <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
          <span>差戻し</span>
          <Chip label="3" color="error" size="small" sx={{ ml: 2 }} />
        </Box>
      ),
    },
  ],
  value: 'draft_journals',
  onChange: () => {},
};
