import { ComponentStory, ComponentMeta } from '@storybook/react';
import Home from './index';

export default {
  title: 'Pages/Home',
  component: Home,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Primary = Template.bind({});
