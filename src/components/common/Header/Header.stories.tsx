import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './index';

export default {
  title: 'Components/Common/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Primary = Template.bind({});
