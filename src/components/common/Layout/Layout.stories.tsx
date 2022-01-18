import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from './index';

export default {
  title: 'Components/Common/Layout',
  component: Layout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = () => <Layout />;

export const Primary = Template.bind({});
