import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from './index';

export default {
  title: 'Components/Common/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Primary = Template.bind({});
